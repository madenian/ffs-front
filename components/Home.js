import styles from "../styles/Home.module.css";
import React from "react";
import Nav from "../components/NAV";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Bearer, serverAdress, twitchClientId } from "../ffs-tools";

function Home() {
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    fetch(`${serverAdress}/streamers`)
      .then((response) => response.json())
      .then(async (data) => {
        const updatedStreamers = [];
        for (let i = 0; i < data.length; i++) {
          try {
            const response = await fetch(
              `https://api.twitch.tv/helix/schedule?broadcaster_id=${data[i].twitchId}`,
              {
                method: "GET",
                headers: {
                  "Client-Id": "yezyu92gzd8s4bpqxyrl1r893te09j",
                  Authorization: `Bearer c4rczh7a6nniomgrnd42sybt14ivcw`,
                },
              }
            );
            const schedule = await response.json();
            if (!schedule.error) {
              updatedStreamers.push({
                data: data[i],
                planning: schedule.data.segments,
              });
            }
          } catch (error) {
            console.error("Error fetching schedule:", error);
          }
        }
        setStreamers(updatedStreamers);
        console.log("updatedstreamers", updatedStreamers);
      });
    console.log("streamers", streamers);
  }, []);

  /*
  streamers.map((streamer) => {
    
    name : streamers.data.name;
    photo: streamers.data.profileImage;
    
  const planning= streamers.data.planning.map{
    date: streamers.data.planning.date;


  }
  });


  exemple planning : planning
: 
Array(20)
0
: 
canceled_until
: 
null
category
: 
null
end_time
: 
"2023-09-13T22:00:00Z"
id
: 
"eyJzZWdtZW50SUQiOiJiMmNjN2VhYi01NTczLTRhY2QtOWJlZi1mMDI0OTBmOTdmODEiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30="
is_recurring
: 
true
start_time
: 
"2023-09-13T18:00:00Z"
title
: 
"La grosse soirée"
*/
  return (
    <div>
      <Nav></Nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {/* {streamers} */}
      </main>
    </div>
  );
}

export default Home;
