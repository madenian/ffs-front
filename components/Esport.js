import styles from "../styles/Esport.module.css";
import React from "react";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import DateHourSelector from "./DateHourSelector";
import EsportSchedule from "./EsportSchedule";
import moment from "moment";
import Loading from "./Loading";
import { serverAdress } from "../ffs-tools";
import Zoom from "react-reveal/Zoom";
import NoStream from "./NoStream";

function Esport() {
  const actualHour = moment().format("HH");
  const actualDay = moment().format("DD/MM/YYYY");

  const [scheduleData, setScheduleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedDate, setSelectedDate] = useState(actualDay);
  const [selectedHour, setSelectedHour] = useState(parseInt(actualHour));

  const selectedDayOnClick = (val) => {
    const formattedDate = moment(val).format("DD/MM/YYYY");
    setSelectedDate(formattedDate);
  };

  const selectedTime = (hour) => {
    setSelectedHour(hour);
  };

  useEffect(() => {
    const games = [
      "cs-go",
      "league-of-legends",
      "rl",
      "valorant",
      "dota-2",
      "starcraft-2",
      "fifa",
      "r6-siege",
    ];

    const fetchPromises = games.map((game) =>
      fetch(`${serverAdress}/esport/${game}`).then((response) =>
        response.json()
      )
    );

    Promise.all(fetchPromises)
      .then((results) => {
        const allGameData = results.reduce((accumulator, data) => {
          return accumulator.concat(data);
        }, []);

        setScheduleData(allGameData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Tri des plannings par date de début
  const sortedSchedules = scheduleData.sort((a, b) => {
    return new Date(a.start_time).getTime() - new Date(b.start_time).getTime();
  });

  //formattage de la date en fonction du start_time
  const dayOfStream = (date) => {
    const day = moment(date).format("DD/MM/YYYY");
    return day;
  };
  // Filtrer les plannings qui ne sont pas sur la bonne journée

  const filteredSchedules = sortedSchedules.filter((planning) => {
    return dayOfStream(planning.begin_at) == selectedDate;
  });

  // définition d'un filtre en fonction de l'heure de début et de fin : si l'heure de début est inférieure à l'heure sélectionnée et que l'heure de fin est supérieure à l'heure sélectionnée alors on garde le planning
  const filteredSchedulesByHour = filteredSchedules.filter((planning) => {
    const startHour = moment(planning.begin_at).format("HH");
    const endHour = moment(startHour, "HH").add(2, "hours").format("HH");
    ;

    return startHour <= selectedHour && (!endHour || endHour >= selectedHour);
  });

  const ScheduleCard = filteredSchedulesByHour.map((planning, i) => {
    // Initialisez les variables pour les liens Twitch
    let twitchFrUrl = null;
    let twitchEnUrl = null;

    // Parcourez les éléments de streams_list pour trouver les liens Twitch appropriés
    planning.streams_list.forEach((stream) => {
   
      if (stream.language === "fr") {
        twitchFrUrl = stream.raw_url;
      } else if (stream.language === "en") {
        twitchEnUrl = stream.raw_url;
      }
    });

    return (
      <EsportSchedule
        key={i}
        game={planning.videogame.slug}
        title={planning.name}
        start={planning.begin_at}
        league={planning.league.name}
        twitchFr={twitchFrUrl}
        twitchEn={twitchEnUrl}
      ></EsportSchedule>
    );
  });

  return (
    <div>
      <Nav></Nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Programme <span className={styles.secondWord}>E-sport</span>
        </h1>
        <div className={styles.datePickerContainer}>
          <DatePicker
            getSelectedDay={selectedDayOnClick}
            labelFormat={"MMMM"}
            color={"#9146FF"}
            endDate={90}
          />
        </div>
        <DateHourSelector selectedTime={selectedTime}></DateHourSelector>
        <div className={styles.ScheduleGrid}>
        <Zoom>
            {isLoading ? (
              <Loading />
            ) : ScheduleCard.length === 0 ? (
              <NoStream />
            ) : ScheduleCard.length === 1 ? (
              <>
                {ScheduleCard[0]}
                <div></div>
              </>
            ) : (
              ScheduleCard
            )}
          </Zoom>
        </div>
      </main>
    </div>
  );
}

export default Esport;
