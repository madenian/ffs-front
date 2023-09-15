import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React from "react";
import styles from "../styles/DateHourSelector.module.css";
import moment from "moment/moment";
import { useState, useEffect } from "react";

const DateHourSelector = (props) => {
  const marks = [
    {
      value: 0,
      label: "Minuit",
    },
    {
      value: 3,
      label: "3h",
    },
    {
      value: 6,
      label: "6h",
    },
    {
      value: 9,
      label: "9h",
    },
    {
      value: 12,
      label: "Midi",
    },
    {
      value: 15,
      label: "15h",
    },
    {
      value: 18,
      label: "18h",
    },
    {
      value: 24,
      label: "Minuit",
    },
    {
      value: 21,
      label: "21h",
    },
  ];
  const actualHour = parseInt(moment().format("HH"));
  // const actualDay = moment().format("DD/MM/YYYY");

  // const [selectedHour, setSelectedHour] = useState(parseInt(actualHour));
  // const [selectedDate, setSelectedDate] = useState(actualDay);

  //fonction reçu pour l'inverse data flow pour la gestion du jour
  // const onSelectedDay = (date) => {
  //   const formattedDate = moment(date).format("DD/MM/YYYY");
  //   props.selectedDay(formattedDate);

  //   // console.log("selectedDate dans la fonction ", selectedDate);
  //   console.log("selectedDate dans la fonction formatted ", formattedDate);
  // };

  //fonction reçu pour l'inverse data flow pour la gestion de l'heure
  const onSelectedHour = (hour) => {
    console.log("hour", hour);
    props.selectedTime(hour);
    // console.log("selectedHour dans la fonction ", formattedHour);
  };

  // console.log("selectedDate En dehors de tout ", selectedDate);
  // console.log("hour", actualHour);
  // console.log("selectedHour", selectedHour);

  // console.log("actualDay", actualDay);
  // console.log("selectedDate", selectedDate);

  return (
    <>
      <div className={styles.DateHourPicker}>
        {/* <ReactHorizontalDatePicker
          enableScroll={false}
          enableDays={10}
          onSelectedDay={onSelectedDay}
          className={styles.DatePicker}
        /> */}

        <Box className={styles.Box} width={500}>
          <Slider
            className={styles.Slider}
            aria-label="Hour"
            defaultValue={actualHour}
            valueLabelDisplay="auto"
            step={0.5}
            marks={marks}
            min={0}
            max={24}
            color="primary"
            onChange={(e, value) => onSelectedHour(value)}
          />
        </Box>
      </div>
    </>
  );
};

export default DateHourSelector;
