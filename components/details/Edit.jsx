"use client";

import { useEffect, useState } from "react";
import EditFeedback from "../edit/edit";
import styles from "./page.module.css";

export default function Edit({ id, data, userId }) {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (!userId) {
      setShow(false);
      setLogin(!login);
    }
  }, [show]);

  return (
    <>
      <button onClick={() => setShow(!show)} className={styles.editBtn}>
        Edit Feedback
      </button>
      <EditFeedback id={id} data={data} show={show} setShow={setShow} userId={userId} login={login} />
    </>
  );
}
