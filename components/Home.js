import styles from "../styles/Home.module.css";
import React from "react";
import Nav from "../components/NAV";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Bearer, serverAdress, twitchClientId } from "../ffs-tools";
import Schedule from "./schedule";

function Home() {
  const scheduleData = [
    {
      _id: "65003e0cbcba30ee9048008a",
      twitchId: "50597026",
      name: "Ponce",
      broadcasterType: "partner",
      description: "On se tape des immenses barres.",
      profileImage:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/d4737061-8f00-49d9-a56f-fcb4a9230b3f-profile_image-300x300.png",
      offlineImage:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/4e15bd4c-1acc-4f9c-8cce-ddbe13e4e266-channel_offline_image-1920x1080.jpeg",
      createdAt: "2013-10-24T19:04:45Z",
      schedule: [
        {
          id: "eyJzZWdtZW50SUQiOiJjNzZjODRmMy00MTkzLTQxYmItYjZkOC02ZDU0ZTdmY2FkMTkiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-13T09:00:00Z",
          end_time: "2023-09-13T15:00:00Z",
          title: "Zelda TOTK",
          canceled_until: null,
          category: {
            id: "512998",
            name: "The Legend of Zelda: Tears of the Kingdom",
          },
          is_recurring: false,
        },
        {
          id: "eyJzZWdtZW50SUQiOiIxZWYzNzc4YS1mMmNkLTQwY2EtYjFmNS03NzIxMjM2NTcyYzAiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-13T18:00:00Z",
          end_time: "2023-09-13T22:00:00Z",
          title: " WoW Hardcore officiel avec Luuxia",
          canceled_until: null,
          category: {
            id: "18122",
            name: "World of Warcraft",
          },
          is_recurring: false,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJjYzJiNjMxNS03ZTEyLTQzNTktOGY3YS1jNTYyNDY1ODQ4ZjYiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-14T12:00:00Z",
          end_time: "2023-09-14T18:00:00Z",
          title: "Objectif RECORD : Speedrun SMO (reset si 30sec+ de retard)",
          canceled_until: null,
          category: {
            id: "493997",
            name: "Super Mario Odyssey",
          },
          is_recurring: false,
        },
        {
          id: "eyJzZWdtZW50SUQiOiI1OGY4MWQ4ZC05ZWI0LTRhMzYtYjgwNi1kYTk0ZWRlNTNlNzQiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-15T09:00:00Z",
          end_time: "2023-09-15T15:00:00Z",
          title: "Grounded avec Ultia et Rivenzi",
          canceled_until: null,
          category: {
            id: "516086",
            name: "Grounded",
          },
          is_recurring: false,
        },
        {
          id: "eyJzZWdtZW50SUQiOiI4YzJiMDBiYS0wOGEyLTQ4ZGMtOTljZC05OGZjOGNmMDAwZTciLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-17T12:00:00Z",
          end_time: "2023-09-17T18:00:00Z",
          title: "WoW Hardcore officiel avec Luuxia",
          canceled_until: null,
          category: {
            id: "18122",
            name: "World of Warcraft",
          },
          is_recurring: false,
        },
      ],
    },
    {
      _id: "65003e0cbcba30ee90480078",
      twitchId: "40063341",
      name: "Domingo",
      broadcasterType: "partner",
      description: "",
      profileImage:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/3cdae7df-600c-4833-8dfe-8d2abc5a3b25-profile_image-300x300.png",
      offlineImage:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/40696bfb-d47a-41c6-9d35-7867243d7749-channel_offline_image-1920x1080.png",
      createdAt: "2013-02-05T19:20:22Z",
      schedule: [
        {
          id: "eyJzZWdtZW50SUQiOiJjY2QwOTFkOS04ZTRjLTRhNzEtOWVkNy1hOGFiMTM4YmJmMmEiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-13T12:00:00Z",
          end_time: "2023-09-13T13:00:00Z",
          title: "🎙 PRÉLIVE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiI1M2VlMDE4MC1kMGYyLTRjODQtYTEyNS0yZThlNDU5YTE5MjQiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-13T13:00:00Z",
          end_time: "2023-09-13T17:00:00Z",
          title: "STREAM LIBRE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJlNjNhODYxZS04N2I2LTRiYTMtYWIyNC00YjQ0MjJjMzJhZWYiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-14T10:00:00Z",
          end_time: null,
          title: "📺 REACT ",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiI0N2UxZjg4YS1hNjY0LTQzMjYtYWY4YS0xMGZhZTgyYmY2NzQiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-15T12:00:00Z",
          end_time: "2023-09-15T13:00:00Z",
          title: "🎙 PRÉLIVE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJmNDNiYzJhZS1lYWE2LTQzZTMtYTMzMi00NWQzYWFiYjRlYzIiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozN30=",
          start_time: "2023-09-15T13:00:00Z",
          end_time: "2023-09-15T17:00:00Z",
          title: "STREAM LIBRE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiIyODYwNDIzNS1lY2E4LTQyYmUtOGQ0Yi01MTM3YjllYjdlYTYiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-18T17:30:00Z",
          end_time: "2023-09-18T18:30:00Z",
          title: "🎙 PRÉLIVE & DEBRIEF DU GP EXPLORER 2 ",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJkMmIzNmRhYi05MDA2LTQwNjUtODE1NC0wMTk2OGQ4OTU5MjEiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-18T18:30:00Z",
          end_time: "2023-09-18T22:00:00Z",
          title: "📺 REACT",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJhMTI2NDdjMi00NzBlLTQyYWEtOTE1OC1kMTE0N2I0NWYxYTgiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-19T18:00:00Z",
          end_time: "2023-09-19T20:00:00Z",
          title: "🍿 POPCORN AVEC AMIXEM, BOUZI & ANA ON AIR",
          canceled_until: null,
          category: {
            id: "417752",
            name: "Talk Shows & Podcasts",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJjY2QwOTFkOS04ZTRjLTRhNzEtOWVkNy1hOGFiMTM4YmJmMmEiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-20T12:00:00Z",
          end_time: "2023-09-20T13:00:00Z",
          title: "🎙 PRÉLIVE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiI1M2VlMDE4MC1kMGYyLTRjODQtYTEyNS0yZThlNDU5YTE5MjQiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-20T13:00:00Z",
          end_time: "2023-09-20T17:00:00Z",
          title: "STREAM LIBRE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJlNjNhODYxZS04N2I2LTRiYTMtYWIyNC00YjQ0MjJjMzJhZWYiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-21T10:00:00Z",
          end_time: null,
          title: "📺 REACT ",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiI0N2UxZjg4YS1hNjY0LTQzMjYtYWY4YS0xMGZhZTgyYmY2NzQiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-22T12:00:00Z",
          end_time: "2023-09-22T13:00:00Z",
          title: "🎙 PRÉLIVE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJmNDNiYzJhZS1lYWE2LTQzZTMtYTMzMi00NWQzYWFiYjRlYzIiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOH0=",
          start_time: "2023-09-22T13:00:00Z",
          end_time: "2023-09-22T17:00:00Z",
          title: "STREAM LIBRE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiIyODYwNDIzNS1lY2E4LTQyYmUtOGQ0Yi01MTM3YjllYjdlYTYiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOX0=",
          start_time: "2023-09-25T17:30:00Z",
          end_time: "2023-09-25T18:30:00Z",
          title: "🎙 PRÉLIVE & DEBRIEF DU GP EXPLORER 2 ",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJkMmIzNmRhYi05MDA2LTQwNjUtODE1NC0wMTk2OGQ4OTU5MjEiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOX0=",
          start_time: "2023-09-25T18:30:00Z",
          end_time: "2023-09-25T22:00:00Z",
          title: "📺 REACT",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJhMTI2NDdjMi00NzBlLTQyYWEtOTE1OC1kMTE0N2I0NWYxYTgiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOX0=",
          start_time: "2023-09-26T18:00:00Z",
          end_time: "2023-09-26T20:00:00Z",
          title: "🍿 POPCORN AVEC AMIXEM, BOUZI & ANA ON AIR",
          canceled_until: null,
          category: {
            id: "417752",
            name: "Talk Shows & Podcasts",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJjY2QwOTFkOS04ZTRjLTRhNzEtOWVkNy1hOGFiMTM4YmJmMmEiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOX0=",
          start_time: "2023-09-27T12:00:00Z",
          end_time: "2023-09-27T13:00:00Z",
          title: "🎙 PRÉLIVE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiI1M2VlMDE4MC1kMGYyLTRjODQtYTEyNS0yZThlNDU5YTE5MjQiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOX0=",
          start_time: "2023-09-27T13:00:00Z",
          end_time: "2023-09-27T17:00:00Z",
          title: "STREAM LIBRE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiJlNjNhODYxZS04N2I2LTRiYTMtYWIyNC00YjQ0MjJjMzJhZWYiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOX0=",
          start_time: "2023-09-28T10:00:00Z",
          end_time: null,
          title: "📺 REACT ",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
        {
          id: "eyJzZWdtZW50SUQiOiI0N2UxZjg4YS1hNjY0LTQzMjYtYWY4YS0xMGZhZTgyYmY2NzQiLCJpc29ZZWFyIjoyMDIzLCJpc29XZWVrIjozOX0=",
          start_time: "2023-09-29T12:00:00Z",
          end_time: "2023-09-29T13:00:00Z",
          title: "🎙 PRÉLIVE",
          canceled_until: null,
          category: {
            id: "509658",
            name: "Just Chatting",
          },
          is_recurring: true,
        },
      ],
    },
  ];

  const ScheduleCard = scheduleData.map((data) => {
    return data.schedule.map((planning) => {
      return (
        <Schedule
          id={data._id}
          key={planning.id}
          name={data.name}
          title={planning.title}
          start={planning.start_time}
          end={planning.end_time}
          category={planning.category.name}
          image={data.profileImage}
        ></Schedule>
      );
    });
  });

  return (
    <div>
      <Nav></Nav>
      <main className={styles.main}>
        <h1 className={styles.title}>Programme TW</h1>
        <div className={styles.ScheduleGrid}>
        {ScheduleCard}
        </div>
        
      </main>
    </div>
  );
}

export default Home;
