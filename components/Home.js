import styles from "../styles/Home.module.css";
import React from "react";
import Nav from "../components/Nav";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import Schedule from "./schedule";
import moment from "moment";
import DateHourSelector from "./DateHourSelector";
import DatePicker from "./DatePicker";
import { serverAdress } from "../ffs-tools";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import NoStream from "./NoStream";
import Twitter from "./Twitter";

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
    let endHour = planning.end_time
      ? moment(planning.end_time).format("HH")
      : null;

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
        <h1 className={styles.title}>
          Programme <span className={styles.secondWord}>Twitch</span>
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

        <div className={styles.buttonContainer}>
          <div className={styles.TwitterContainer}>
            <a href="https://twitter.com/ProgrammeTW">
              <Twitter></Twitter>
            </a>
          </div>
          <div className={styles.ArrowContainer}>
            <div class="wrapper">
              <div class="icon">
                <img src="arrow-down.svg" alt="arrow-down" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Fade left>
        <div className={styles.presentation} id="presentation">
          <h2 className={styles.title}>
            Presentation du <span className={styles.secondWord}>projet</span>
          </h2>
          <div className={styles.presentationContainer}>
            <h3>
              Bienvenue sur PTW - Votre Guide Complet des Programmes Twitch
            </h3>
            <p>
              Sur PTW, nous avons un objectif clair : vous offrir un accès
              complet et facile à la grille des programmes diffusés sur Twitch.
            </p>
            <h3>Tout ce dont vous avez besoin, en un seul endroit</h3>
            <p>
              Nous collectons et mettons à jour en temps réel les informations
              des streams directement depuis Twitch. Cela signifie que vous
              pouvez consulter les horaires, les descriptions, et les détails
              des streamers et des évenements Esport sur le site.
            </p>
            <h3>La communauté au cœur de PTW</h3>
            <p>
              Chez PTW, nous croyons en la force de la communauté Twitch. C'est
              pourquoi nous encourageons les streamers à mettre à jour leurs
              plannings pour garantir un accés à ces informations.
            </p>
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className={styles.contact} id="contact">
          <h2 className={styles.title}>
            Rentrons en <span className={styles.secondWord}>contact</span>
          </h2>
          <div className={styles.contactContainer}>
            <h3>N'hésite pas à nous écrire sur Twitter</h3>
            <p>
              Si tu es viewer que tu as une suggestion, une idéee ou que tu
              rencontres un problème.
            </p>
            <p>
              Si tu es streamer et que souhaiterais que ton planning soit
              intégré au programme.
            </p>
            <p>Si tu as juste envie de discuter.</p>

            <div style={styles.twitterContainer}>
              <a href="https://twitter.com/ProgrammeTW">
                <img
                  src="twitter.svg"
                  alt="logo twitter"
                  className={styles.twitter}
                />
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <footer className={styles.footer}>
        Programme Twitch - ©PTW - Pensé et créé par Adrien et Thibaud
      </footer>
    </div>
  );
}

export default Home;
