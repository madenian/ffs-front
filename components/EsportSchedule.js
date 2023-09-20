import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Schedule.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch, faEye } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

function formatTime(timeStr) {
  const date = moment(timeStr);
  return date.format("HH:mm");
}

function EsportSchedule({ title, start, game, twitchFr, twitchEn, league }) {
  const twitchUrlFr = twitchFr;
  const twitchUrlEn = twitchEn;

  const formattedStartTime = formatTime(start);
  const formattedEndTime = moment(formattedStartTime, "HH:mm")
    .add(2, "hours")
    .format("HH:mm");

  return (
    <div className={styles.CardContainer}>
      <div className={styles.ImageContainer}>
        <img
          src={`/${game}.png`}
          className={styles.StreamImage}
          alt="Image du jeu"
        />
        {twitchUrlFr && (
          <a href={twitchUrlFr} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faEye}
              beat
              style={{ color: "#9146ff", cursor: "pointer" }}
            />
            FR
          </a>
        )}

        {twitchUrlEn && (
          <a href={twitchUrlEn} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faEye}
              beat
              style={{ color: "#9146ff", cursor: "pointer" }}
            />
            EN
          </a>
        )}
      </div>
      <div className={styles.DescriptionContainer}>
        <div className={styles.DescriptionName}>{game.toUpperCase()}</div>
        <div className={styles.DescriptionName}> League : {league}</div>
        <div className={styles.DescriptionTitle}>{title}</div>

        {start ? (
          <div className={styles.DescriptionLine}>
            {formattedStartTime} / {formattedEndTime}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default EsportSchedule;
