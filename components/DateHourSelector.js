import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React from "react";
import styles from "../styles/DateHourSelector.module.css";
import moment from "moment/moment";
import ReactHorizontalDatePicker from "react-horizontal-strip-datepicker";


const DateHourSelector = () => {

  const onSelectedDay = (selectedDate) => {
    console.log(selectedDate);
  };

  const actualHour = moment().format("HH");
  console.log("hour", actualHour);

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
    {
      value: 21.3,
      label: "",
    },
  ];

  return (
    <>
      <div className={styles.DateHourPicker}>
        <ReactHorizontalDatePicker
          enableScroll={false}
          enableDays={10}
          selectedDay={onSelectedDay}
          className={styles.DatePicker}
        />
      
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
        />
      </Box>
      </div>
    </>
  );
};

export default DateHourSelector;