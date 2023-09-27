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

function Schedule({ name, title, id, start, end, category, image, viewer }) {
  const twitchUrl = `https://www.twitch.tv/${name}`;
  const formattedStartTime = formatTime(start);
  const formattedEndTime = formatTime(end);

  return (
    <div className={styles.CardContainer}>
      <div className={styles.ImageContainer}>
        <img src={image} className={styles.StreamImage} alt = "Image du streamer"></img>
        <a href={twitchUrl} target="_blank" rel="noopener noreferrer" aria-label="go to twitch channel">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#a855f7"
              d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"
            />
          </svg>
        </a>
        {viewer ? <div className={styles.ViewerCount}>{viewer}</div> : null}
        {/* <FontAwesomeIcon icon={faTwitch} beat style={{color: "#be5cff",}} /> */}
      </div>
      <div className={styles.DescriptionContainer}>
        <div className={styles.DescriptionName}>{name}</div>
        <div className={styles.DescriptionTitle}>{title}</div>
        <div className={styles.DescriptionLine}>{category}</div>

        {start ? (
          <div className={styles.DescriptionLine}>
            {formattedStartTime} / {formattedEndTime}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Schedule;
