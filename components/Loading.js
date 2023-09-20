import styles from "../styles/Loading.module.css";
import React from "react";

function Loading() {
  return (
    <div className={styles.loadWrapp}>
      <div className={styles.load}>
        <p className={styles.text}>Chargement</p>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default Loading;
