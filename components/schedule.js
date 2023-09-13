
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Schedule.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch, faEye } from "@fortawesome/free-solid-svg-icons";

function Schedule({ name, title, id, start, end, category, image }) {

    const twitchUrl = `https://www.twitch.tv/${name}`;

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
        <div>{start}</div>
        <div>{end}  </div>
       
       
        
       
          
    </div>
    
   </div>

  );
}

export default Schedule;
