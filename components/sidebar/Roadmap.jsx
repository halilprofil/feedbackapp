"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Roadmap({ statusPlanned, statusProgress, statusLive }) {
  return (
    <div className={styles.roadmap}>
      <div className={styles.roadmapHeader}>
        <h1>Roadmap</h1>
        <Link href={"/roadmap"}>
          <button>view</button>
        </Link>
      </div>
      <div className={styles.roadmapCategoriesBox}>
        <div className={styles.flexbox}>
          <div className={styles.miniflex}>
            <Image width={8} height={8} src="/assets/OrangeDot.svg" alt="" />
            <p className={styles.roadmapCategory}>Planned</p>
          </div>
          <p className={styles.roadmapNumber}>{statusPlanned.length}</p>
        </div>
        <div className={styles.flexbox}>
          <div className={styles.miniflex}>
            <Image width={8} height={8} src="/assets/PurpleDot.svg" alt="" />
            <p className={styles.roadmapCategory}>In-Progress</p>
          </div>
          <p className={styles.roadmapNumber}>{statusProgress.length}</p>
        </div>
        <div className={styles.flexbox}>
          <div className={styles.miniflex}>
            <Image width={8} height={8} src="/assets/BlueDot.svg" alt="bluedot" />
            <p className={styles.roadmapCategory}>Live</p>
          </div>
          <p className={styles.roadmapNumber}>{statusLive.length}</p>
        </div>
      </div>
    </div>
  );
}
