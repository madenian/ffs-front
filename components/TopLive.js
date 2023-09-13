import styles from "../styles/TopLive.module.css";
import React from "react";
import Nav from "../components/NAV";


function TopLive() {
  

  return (
    <div>
      <Nav></Nav>
      <main className={styles.main}>
        <h1 className={styles.title}>20 plus gros live Français</h1>
        
        
      </main>
    </div>
  );
}

export default TopLive;
