"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Goback() {
  const router = useRouter();

  function handleGoBackBtn() {
    router.push("/");
  }
  return (
    <button onClick={handleGoBackBtn} className={styles.goback}>
      <p className={styles.gobackP}>{"<"}</p>
      <h6 className={styles.gobackH}>Go Back</h6>
    </button>
  );
}
