"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Filter({ usage, handleLinkClick }) {
  const router = useRouter();

  function handleAllBtn() {
    router.push("/");
    handleLinkClick();
  }
  // burada ki usage prop oalrak gelcek,
  // yeni yapılan sagdan cıkacak sidebar da propa string "sidebar" verilince display none stili uygulanmayacak
  return (
    <div className={usage === "sidebar" ? styles.miniFilter : styles.filterBox}>
      <button className={styles.filterBoxButton} onClick={handleAllBtn}>
        All
      </button>
      <Link href={"/filtered/UI"}>
        <button onClick={handleLinkClick} className={styles.filterBoxButton}>
          UI
        </button>
      </Link>
      <Link href={"/filtered/UX"}>
        <button onClick={handleLinkClick} className={styles.filterBoxButton}>
          UX
        </button>
      </Link>
      <Link href={"/filtered/Enhancement"}>
        <button onClick={handleLinkClick} className={styles.filterBoxButton}>
          Enhancement
        </button>
      </Link>
      <Link href={"/filtered/Bug"}>
        <button onClick={handleLinkClick} className={styles.filterBoxButton}>
          Bug
        </button>
      </Link>
      <Link href={"/filtered/Feature"}>
        <button onClick={handleLinkClick} className={styles.filterBoxButton}>
          Feature
        </button>
      </Link>
    </div>
  );
}
