import styles from '../styles/Home.module.css';
import React from "react";
import Nav from "../components/NAV";

function Home() {

  
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
