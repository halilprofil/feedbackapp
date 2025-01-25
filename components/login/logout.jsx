"use client";
import styles from "./page.module.css";
import { useFormState } from "react-dom";
import { loginUser, logoutUser } from "@/app/api/action";

export default function Logout() {
  return (
    <>
      <form action={logoutUser}>
        <button className={styles.logoutBtn}>logout</button>
      </form>
    </>
  );
}
