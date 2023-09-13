
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Schedule.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch, faEye } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';

function formatTime(timeStr) {
    const date = moment(timeStr);

    return date.format("HH:mm");
  }

function Schedule({ name, title, id, start, end, category, image }) {

    const twitchUrl = `https://www.twitch.tv/${name}`;
    const formattedStartTime = formatTime(start);
    const formattedEndTime = formatTime(end);

  return (
   <div className={styles.CardContainer}>
    <div className={styles.ImageContainer}>
        <img src={image} className = {styles.StreamImage}></img>
    <a href={twitchUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faEye}
            beat
            style={{ color: "#be5cff", cursor: "pointer" }}
          />
        </a>
        {/* <FontAwesomeIcon icon={faTwitch} beat style={{color: "#be5cff",}} /> */}
        
    </div>
    <div className={styles.DescriptionContainer}>
        <div className={styles.DescriptionLine}>{name}</div>
        <div className={styles.DescriptionLine}>{title}</div>
        <div className={styles.DescriptionLine}>{category}</div>
        <div>{formattedStartTime} / {formattedEndTime}</div>
        
       
       
        
       
          
    </div>
    
   </div>

  );
}

export default Schedule;
