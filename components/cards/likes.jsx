"use client";
import styles from "./page.module.css";

export default function Likes({ voteCount }) {
  return (
    <div className={styles.likes}>
      <p className={styles.likesSign}>^</p>
      <p className={styles.likesCount}>{voteCount}</p>
    </div>
  );
}
