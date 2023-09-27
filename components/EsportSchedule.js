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
          <a href={twitchUrlFr} target="_blank" rel="noopener noreferrer" aria-label="go to twitch channel">
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#a855f7"
                d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"
              />
            </svg>
            <svg
              width="15"
              height="20"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="circleFlagsFr0">
                <circle cx="256" cy="256" r="256" fill="#fff" />
              </mask>
              <g mask="url(#circleFlagsFr0)">
                <path
                  fill="#eee"
                  d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"
                />
                <path fill="#0052b4" d="M0 0h167v512H0z" />
                <path fill="#d80027" d="M345 0h167v512H345z" />
              </g>
            </svg>
          </a>
        )}

        {twitchUrlEn && (
          <a href={twitchUrlEn} target="_blank" rel="noopener noreferrer">
            <svg
              width="25"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#a855f7"
                d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"
              />
            </svg>
            <svg
              width="15"
              height="20"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="circleFlagsUs0">
                <circle cx="256" cy="256" r="256" fill="#fff" />
              </mask>
              <g mask="url(#circleFlagsUs0)">
                <path
                  fill="#eee"
                  d="M256 0h256v64l-32 32l32 32v64l-32 32l32 32v64l-32 32l32 32v64l-256 32L0 448v-64l32-32l-32-32v-64z"
                />
                <path
                  fill="#d80027"
                  d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"
                />
                <path fill="#0052b4" d="M0 0h256v256H0Z" />
                <path
                  fill="#eee"
                  d="m187 243l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67zm162-81l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Zm162-82l57-41h-70l57 41l-22-67Zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Z"
                />
              </g>
            </svg>
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
