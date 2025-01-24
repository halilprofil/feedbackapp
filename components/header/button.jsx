"use client";

import { useEffect, useState } from "react";
import CreateFeedback from "../create/create";
import Login from "../login/login";
import styles from "./page.module.css";

export default function AddFeedBackBtn({ userId }) {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    console.log(login);
    if (!userId) {
      setLogin(!login);
    }
  }, [show]);

  return (
    <>
      <button onClick={() => setShow(!show)} className={styles.addFeedbackBtn}>
        + Add Feedback
      </button>
      <CreateFeedback show={show} setShow={setShow} userId={userId} />
      {!userId && <Login login={login} />}
    </>
  );
}
