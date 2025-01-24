"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Filter() {
  const router = useRouter();

  function handleAllBtn() {
    router.push("/");
  }

  return (
    <div className={styles.filterBox}>
      <button className={styles.filterBoxButton} onClick={handleAllBtn}>
        All
      </button>
      <Link href={"/filtered/UI"}>
        <button className={styles.filterBoxButton}>UI</button>
      </Link>
      <Link href={"/filtered/UX"}>
        <button className={styles.filterBoxButton}>UX</button>
      </Link>
      <Link href={"/filtered/Enhancement"}>
        <button className={styles.filterBoxButton}>Enhancement</button>
      </Link>
      <Link href={"/filtered/Bug"}>
        <button className={styles.filterBoxButton}>Bug</button>
      </Link>
      <Link href={"/filtered/Feature"}>
        <button className={styles.filterBoxButton}>Feature</button>
      </Link>
    </div>
  );
}
