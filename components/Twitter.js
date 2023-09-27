import React from "react";
import styles from "../styles/Twitter.module.css";

function Twitter() {
  return (
    <ul className={styles.wrapper}>
      <li className={styles.iconTwitter}>
        <span className={styles.tooltip}>Twitter</span>
        <span className={styles.span}>
          <i className={styles.faTwitter}> <img
                src="twitter_blue.svg"
                alt="logo twitter"
                className={styles.twitterImg}
              /></i>
        </span>
      </li>
    </ul>
  );
}

export default Twitter;
