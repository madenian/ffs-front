import styles from '../styles/Home.module.css';
import React from "react";
import Nav from "../components/NAV";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';

function Home() {

fetch(`${serverAdress}/`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${user.token}`,)

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
