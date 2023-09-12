import styles from "../styles/Home.module.css";
import React from "react";
import Nav from "../components/NAV";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Bearer, serverAdress, twitchClientId } from "../ffs-tools";

function Home() {
  const streamersId = [];

  fetch(`${serverAdress}/streamers`)
    .then((response) => response.json())
    .then((data) => {
     
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].twitchId)
        fetch(
          `https://api.twitch.tv/helix/schedule?broadcaster_id=${data[i].twitchId}`,
          {
            method: "GET",
            headers: {
              "Client-Id": "yezyu92gzd8s4bpqxyrl1r893te09j",
              'Authorization' : `Bearer c4rczh7a6nniomgrnd42sybt14ivcw`,
            },
          }
        )
          .then((response) => response.json())
          .then((schedule) => {
            console.log('planning', schedule
            );
            console.log('streamers', data[i].name)
          });
      
      } 
       
      
    });

  return (
    <div>
      <Nav></Nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}

export default Home;
