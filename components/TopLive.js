import styles from "../styles/TopLive.module.css";
import React, { useEffect, useState } from "react";
import Nav from "../components/NAV";
import Schedule from "./schedule";

function TopLive() {
  //state pour stocker les données de l'API
  const [topLiveData, setTopLiveData] = useState([]);

  // route pour fetch l'API de twitch afin de connaître les 20 plus gros live français
  useEffect(() => {
    fetch("http://localhost:3000/toplive/fr")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTopLiveData(data);
      });
  }, []);

  //fonction pour afficher les données de l'API

  const topLiveDatatoDisplay = topLiveData.map((streamer, i) => {

    //formattage de la description du live pour limiter le nombre de caractères
    const formatDescription =
      streamer.title.length < 90
        ? streamer.title
        :
     streamer.title.slice(0, 90) + "...";

    
    //formattage de l'image du live
    const formatImage = `https://static-cdn.jtvnw.net/previews-ttv/live_user_${streamer.user_login}.jpg`;
    return (
      <Schedule
        id={streamer.id}
        key={i}
        name={streamer.user_name}
        title={formatDescription}
        category={streamer.game_name}
        image={formatImage}
        viewer={streamer.viewer_count}
      />
    );
  });

  return (
    <div>
      <Nav></Nav>
      <main className={styles.main}>
        <h1 className={styles.title}>20 plus gros live Français</h1>
        <div className={styles.ScheduleGrid}>{topLiveDatatoDisplay}</div>
      </main>
    </div>
  );
}

export default TopLive;
