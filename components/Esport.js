import styles from "../styles/Esport.module.css";
import React from "react";
import Nav from "../components/NAV";

import DatePicker from "./DatePicker";


function Esport() {
  
  const selectedDay = (val) =>{
    console.log(val)
};
  return (
    <div>
      <Nav></Nav>
      <main className={styles.main}>
        <h1 className={styles.title}>Programme E-sport</h1>
        <div className={styles.datePickerContainer}>

        <DatePicker getSelectedDay={selectedDay} labelFormat={"MMMM"} color={"#9146FF"} endDate={90} />

        </div>
        
        
        
        
      </main>
    </div>
  );
}

export default Esport;
