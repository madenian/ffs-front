import styles from "../styles/Home.module.css";
import React from "react";
import Nav from "../components/NAV";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Bearer, serverAdress, twitchClientId } from "../ffs-tools";
import Schedule from "./schedule";
import moment from "moment";
import DateHourSelector from "./DateHourSelector";

function Home() {
  const scheduleData = [
    {
      _id: "65003e0cbcba30ee9048008a",
      twitchId: "50597026",
      name: "Ponce",
      broadcasterType: "partner",
      description: "On se tape des immenses barres.",
      profileImage:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/d4737061-8f00-49d9-a56f-fcb4a9230b3f-profile_image-300x300.png",
      offlineImage:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/4e15bd4c-1acc-4f9c-8cce-ddbe13e4e266-channel_offline_image-1920x1080.jpeg",
      createdAt: "2013-10-24T19:04:45Z",
      schedule: [
        {
          id: "eyJzZWdtZW50SUQiOiJjNzZjODRmMy00MTkzLTQxYmItYjZkOC02ZDU0ZTdmY2FkMTkiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-13T09:00:00Z",
          end_time: "2023-09-13T15:00:00Z",
          title: "Zelda TOTK",
          canceled_until: null,
          category: {
            id: "512998",
            name: "The Legend of Zelda: Tears of the Kingdom",
          },
          is_recurring: false,
        },
        {
          id: "eyJzZWdtZW50SUQiOiIxZWYzNzc4YS1mMmNkLTQwY2EtYjFmNS03NzIxMjM2NTcyYzAiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-13T18:00:00Z",
          end_time: "2023-09-13T22:00:00Z",
          title: " WoW Hardcore officiel avec Luuxia",
          canceled_until: null,
          category: {
            id: "18122",
            name: "World of Warcraft",
          },
          is_recurring: false,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJjYzJiNjMxNS03ZTEyLTQzNTktOGY3YS1jNTYyNDY1ODQ4ZjYiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-14T12:00:00Z",
          end_time: "2023-09-14T18:00:00Z",
          title: "Objectif RECORD : Speedrun SMO (reset si 30sec+ de retard)",
          canceled_until: null,
          category: {
            id: "493997",
            name: "Super Mario Odyssey",
          },
          is_recurring: false,
        },
        {
          id: "eyJzZWdtZW50SUQiOiI1OGY4MWQ4ZC05ZWI0LTRhMzYtYjgwNi1kYTk0ZWRlNTNlNzQiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-15T09:00:00Z",
          end_time: "2023-09-15T15:00:00Z",
          title: "Grounded avec Ultia et Rivenzi",
          canceled_until: null,
          category: {
            id: "516086",
            name: "Grounded",
          },
          is_recurring: false,
        },
        {
          id: "eyJzZWdtZW50SUQiOiI4YzJiMDBiYS0wOGEyLTQ4ZGMtOTljZC05OGZjOGNmMDAwZTciLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-17T12:00:00Z",
          end_time: "2023-09-17T18:00:00Z",
          title: "WoW Hardcore officiel avec Luuxia",
          canceled_until: null,
          category: {
            id: "18122",
            name: "World of Warcraft",
          },
          is_recurring: false,
        },
      ],
    },
    {
      _id: "65003e0cbcba30ee90480078",
      twitchId: "40063341",
      name: "Domingo",
      broadcasterType: "partner",
      description: "",
      profileImage:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/3cdae7df-600c-4833-8dfe-8d2abc5a3b25-profile_image-300x300.png",
      offlineImage:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/40696bfb-d47a-41c6-9d35-7867243d7749-channel_offline_image-1920x1080.png",
      createdAt: "2013-02-05T19:20:22Z",
      schedule: [
        {
          id: "eyJzZWdtZW50SUQiOiI0N2UxZjg4YS1hNjY0LTQzMjYtYWY4YS0xMGZhZTgyYmY2NzQiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOX0=",
          start_time: "2023-09-29T12:00:00Z",
          end_time: "2023-09-29T13:00:00Z",
          title: "🎙 PRÉLIVE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJjY2QwOTFkOS04ZTRjLTRhNzEtOWVkNy1hOGFiMTM4YmJmMmEiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-13T12:00:00Z",
          end_time: "2023-09-13T13:00:00Z",
          title: "🎙 PRÉLIVE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiI1M2VlMDE4MC1kMGYyLTRjODQtYTEyNS0yZThlNDU5YTE5MjQiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-13T13:00:00Z",
          end_time: "2023-09-13T17:00:00Z",
          title: "STREAM LIBRE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJlNjNhODYxZS04N2I2LTRiYTMtYWIyNC00YjQ0MjJjMzJhZWYiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-14T10:00:00Z",
          end_time: null,
          title: "📺 REACT ",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiI0N2UxZjg4YS1hNjY0LTQzMjYtYWY4YS0xMGZhZTgyYmY2NzQiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-15T12:00:00Z",
          end_time: "2023-09-15T13:00:00Z",
          title: "🎙 PRÉLIVE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJmNDNiYzJhZS1lYWE2LTQzZTMtYTMzMi00NWQzYWFiYjRlYzIiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-15T13:00:00Z",
          end_time: "2023-09-15T17:00:00Z",
          title: "STREAM LIBRE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJkMmIzNmRhYi05MDA2LTQwNjUtODE1NC0wMTk2OGQ4OTU5MjEiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-18T18:30:00Z",
          end_time: "2023-09-18T22:00:00Z",
          title: "📺 REACT",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiIyODYwNDIzNS1lY2E4LTQyYmUtOGQ0Yi01MTM3YjllYjdlYTYiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-18T17:30:00Z",
          end_time: "2023-09-18T18:30:00Z",
          title: "🎙 PRÉLIVE & DEBRIEF DU GP EXPLORER 2 ",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJhMTI2NDdjMi00NzBlLTQyYWEtOTE1OC1kMTE0N2I0NWYxYTgiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-19T18:00:00Z",
          end_time: "2023-09-19T20:00:00Z",
          title: "🍿 POPCORN AVEC AMIXEM, BOUZI & ANA ON AIR",
          canceled_until: null,
          category: {
            id: "417752",
            name: "Talk Shows & Podcasts",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJjY2QwOTFkOS04ZTRjLTRhNzEtOWVkNy1hOGFiMTM4YmJmMmEiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-20T12:00:00Z",
          end_time: "2023-09-20T13:00:00Z",
          title: "🎙 PRÉLIVE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiI1M2VlMDE4MC1kMGYyLTRjODQtYTEyNS0yZThlNDU5YTE5MjQiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-20T13:00:00Z",
          end_time: "2023-09-20T17:00:00Z",
          title: "STREAM LIBRE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJlNjNhODYxZS04N2I2LTRiYTMtYWIyNC00YjQ0MjJjMzJhZWYiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-21T10:00:00Z",
          end_time: null,
          title: "📺 REACT ",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiI0N2UxZjg4YS1hNjY0LTQzMjYtYWY4YS0xMGZhZTgyYmY2NzQiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-22T12:00:00Z",
          end_time: "2023-09-22T13:00:00Z",
          title: "🎙 PRÉLIVE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJlNjNhODYxZS04N2I2LTRiYTMtYWIyNC00YjQ0MjJjMzJhZWYiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOX0=",
          start_time: "2023-09-28T10:00:00Z",
          end_time: null,
          title: "📺 REACT ",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJmNDNiYzJhZS1lYWE2LTQzZTMtYTMzMi00NWQzYWFiYjRlYzIiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-22T13:00:00Z",
          end_time: "2023-09-22T17:00:00Z",
          title: "STREAM LIBRE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiIyODYwNDIzNS1lY2E4LTQyYmUtOGQ0Yi01MTM3YjllYjdlYTYiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOX0=",
          start_time: "2023-09-25T17:30:00Z",
          end_time: "2023-09-25T18:30:00Z",
          title: "🎙 PRÉLIVE & DEBRIEF DU GP EXPLORER 2 ",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJkMmIzNmRhYi05MDA2LTQwNjUtODE1NC0wMTk2OGQ4OTU5MjEiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOX0=",
          start_time: "2023-09-25T18:30:00Z",
          end_time: "2023-09-25T22:00:00Z",
          title: "📺 REACT",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJhMTI2NDdjMi00NzBlLTQyYWEtOTE1OC1kMTE0N2I0NWYxYTgiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOX0=",
          start_time: "2023-09-26T18:00:00Z",
          end_time: "2023-09-26T20:00:00Z",
          title: "🍿 POPCORN AVEC AMIXEM, BOUZI & ANA ON AIR",
          canceled_until: null,
          category: {
            id: "417752",
            name: "Talk Shows & Podcasts",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJjY2QwOTFkOS04ZTRjLTRhNzEtOWVkNy1hOGFiMTM4YmJmMmEiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOX0=",
          start_time: "2023-09-27T12:00:00Z",
          end_time: "2023-09-27T13:00:00Z",
          title: "🎙 PRÉLIVE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiI1M2VlMDE4MC1kMGYyLTRjODQtYTEyNS0yZThlNDU5YTE5MjQiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOX0=",
          start_time: "2023-09-27T13:00:00Z",
          end_time: "2023-09-27T17:00:00Z",
          title: "STREAM LIBRE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
      ],
    },
  ];

  const actualHour = moment().format("HH");
  const actualDay = moment().format("DD/MM/YYYY");

  const [selectedDate, setSelectedDate] = useState(actualDay);
  const [selectedHour, setSelectedHour] = useState(parseInt(actualHour));
  
// fonction définie pour transiter dans les props de DateHourSelector pour l'inverse data flow
  const selectedDay = (date) => {
    const formattedDate = moment(date).format("DD/MM/YYYY");
    setSelectedDate(formattedDate);
  };
  // console.log("Date du HOME", selectedDate);
  
  // fonction définie pour transiter dans les props de DateHourSelector pour l'inverse data flow
  const selectedTime = (hour) => {
    console.log("Hour du HOME", hour);
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
  // console.log("allSchedules1", allSchedules[1]);

  // Tri des plannings par date de début
  const sortedSchedules = allSchedules.sort((a, b) => {
    return new Date(a.start_time).getTime() - new Date(b.start_time).getTime();
  });

  //formattage de la date en fonction du start_time
  const dayOfStream = (date) => {
    const day = moment(date).format("DD/MM/YYYY");
    return day;
  };

  const filteredSchedules = sortedSchedules.filter((planning) => {
    //   // Filtrer les plannings qui ne sont pas sur la bonne journée
    return dayOfStream(planning.start_time) == selectedDate;
  });

  // définition d'un filtre en fonction de l'heure de début et de fin : si l'heure de début est inférieure à l'heure sélectionnée et que l'heure de fin est supérieure à l'heure sélectionnée alors on garde le planning
  const filteredSchedulesByHour = filteredSchedules.filter((planning) => {
    const startHour = moment(planning.start_time).format("HH");
    const endHour = moment(planning.end_time).format("HH");

    if (!endHour) {
      endHour = 24;
    }
    return startHour <= selectedHour && endHour >= selectedHour;
   
  }
  );
  
  
  const ScheduleCard = filteredSchedulesByHour.map((planning) => {
    // Maintenant, vous pouvez accéder aux données du streamer via planning.streamerData
    return (
      <Schedule
        id={planning.streamerData.id}
        key={planning.id}
        name={planning.streamerData.name}
        title={planning.title}
        start={planning.start_time}
        end={planning.end_time}
        category={planning.category.name}
        image={planning.streamerData.image}
      ></Schedule>
    );
  });

  useEffect(() => {
    console.log("selectedDate", selectedDate);
  }, [selectedDate]);

  return (
    <div>
      <Nav></Nav>
      <main className={styles.main}>
        <h1 className={styles.title}>Programme TW</h1>
        <div className={styles.ScheduleGrid}>
          <DateHourSelector
            selectedDay={selectedDay}
            selectedTime={selectedTime}
          ></DateHourSelector>
          {ScheduleCard}
        </div>
      </main>
    </div>
  );
}

export default Home;
