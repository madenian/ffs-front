import styles from "../styles/Home.module.css";
import React from "react";
import Nav from "../components/Nav";
import Loading from "./Loading";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Schedule from "./schedule";
import moment from "moment";
import DateHourSelector from "./DateHourSelector";
import DatePicker from "./DatePicker";
import { serverAdress } from "../ffs-tools";

function Home() {
  const actualHour = moment().format("HH");
  const actualDay = moment().format("DD/MM/YYYY");

  const [scheduleData, setScheduleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedDate, setSelectedDate] = useState(actualDay);
  const [selectedHour, setSelectedHour] = useState(parseInt(actualHour));

  // Fetch du back pour récupérer les planning et infos au chargement de la page

  useEffect(() => {
    fetch(`${serverAdress}/streamers`).then((response) =>
      response.json().then((data) => {
        setScheduleData(data);
        setIsLoading(false);
      })
    );
  }, []);
 

  const selectedDayOnClick = (val) => {
    const formattedDate = moment(val).format("DD/MM/YYYY");
    setSelectedDate(formattedDate);
  };

  // fonction définie pour transiter dans les props de DateHourSelector pour l'inverse data flow
  const selectedTime = (hour) => {
    
    // const formattedHour = moment(hour).format("HH");
    setSelectedHour(hour);
  };

  const allSchedules = scheduleData.flatMap((streamer) => {
    // Aplatir les tableaux de plannings en ajoutant une référence aux données du streamer
    return streamer.schedule.map((planning) => {
      return {
        streamerData: {
          id: streamer._id,
          name: streamer.name,
          image: streamer.profileImage,
        },
        ...planning, // Copier toutes les autres propriétés du planning
      };
    });
  });



  // Tri des plannings par date de début
  const sortedSchedules = allSchedules.sort((a, b) => {
    return new Date(a.start_time).getTime() - new Date(b.start_time).getTime();
  });



  //formattage de la date en fonction du start_time
  const dayOfStream = (date) => {
    const day = moment(date).format("DD/MM/YYYY");
    return day;
  };
  // Filtrer les plannings qui ne sont pas sur la bonne journée

  const filteredSchedules = sortedSchedules.filter((planning) => {
    return dayOfStream(planning.start_time) == selectedDate;
  });



  // définition d'un filtre en fonction de l'heure de début et de fin : si l'heure de début est inférieure à l'heure sélectionnée et que l'heure de fin est supérieure à l'heure sélectionnée alors on garde le planning
  const filteredSchedulesByHour = filteredSchedules.filter((planning) => {
    const startHour = moment(planning.start_time).format("HH");
    let endHour = planning.end_time ? moment(planning.end_time).format("HH") : null;
  
    if (endHour === "00") {
      endHour = "24"; 
    }
  
    return startHour <= selectedHour && (!endHour || endHour >= selectedHour);
  });

 

  const ScheduleCard = filteredSchedulesByHour.map((planning) => {
    // Maintenant, vous pouvez accéder aux données du streamer via planning.streamerData
    const category = planning.category
      ? planning.category.name
      : "Catégorie inconnue";

   

    return (
      <Schedule
        id={planning.streamerData.id}
        key={planning.id}
        name={planning.streamerData.name}
        title={planning.title}
        start={planning.start_time}
        end={planning.end_time}
        category={category}
        image={planning.streamerData.image}
      ></Schedule>
    );
  });

  return (
    <div>
      <Nav></Nav>
      <main className={styles.main}>
        <h1 className={styles.title}>Programme Twitch</h1>
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
          {isLoading ? <Loading /> : ScheduleCard}
        </div>
      </main>
    </div>
  );
}

export default Home;
