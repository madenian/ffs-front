import styles from "../styles/Loading.module.css";
import React from "react";

function NoStream() {
  return (
    <div className={styles.loadWrapp}>
      
        <p className={styles.text}>Pas de stream sur ce créneau</p>
        
    </div>
  );
}

export default NoStream;