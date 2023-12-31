import styles from "../styles/TopLive.module.css";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Loading from "./Loading";
import Schedule from "./schedule";
import { serverAdress } from "../ffs-tools";
import Zoom from "react-reveal/Zoom";

function TopLive() {
  //state pour stocker les données de l'API
  const [topLiveData, setTopLiveData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // route pour fetch l'API de twitch afin de connaître les 20 plus gros live français
  useEffect(() => {
    fetch(`${serverAdress}/toplive/fr`)
      .then((response) => response.json())
      .then((data) => {
        setTopLiveData(data);
        setIsLoading(false)
      });
  }, []);

  //fonction pour afficher les données de l'API

  const topLiveDatatoDisplay = topLiveData.map((streamer, i) => {

    //formattage de la description du live pour limiter le nombre de caractères
    const formatDescription =
      streamer.title.length < 75
        ? streamer.title
        :
     streamer.title.slice(0, 75) + "...";

    
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
        <h1 className={styles.title}>Top live <span className={styles.secondWord}>FR</span></h1>
        <div className={styles.ScheduleGrid}>
          <Zoom>
          {isLoading ? <Loading /> : topLiveDatatoDisplay}
          </Zoom>
        </div>
      </main>
    </div>
  );
}

export default TopLive;
