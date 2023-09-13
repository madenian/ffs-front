// import styles from "../styles/Schedule.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Schedule({ name, title, id, start, end, category, image }) {


  return (
   <div>
    {name}
    {title}
    {start}
    {end}
   </div>

  );
}

export default Schedule;
