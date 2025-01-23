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
      <p>{"<"}</p>
      <h6>Go Back</h6>
    </button>
  );
}
