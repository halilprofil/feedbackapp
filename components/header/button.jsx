"use client";

import { useState, dialogRef } from "react";
import CreateFeedback from "../create/create";

export default function AddFeedBackBtn() {
  const [show, setShow] = useState(false);

  function openModal() {
    setShow(true);
    const dialog = dialogRef.current;
  }

  function closeModal() {
    setShow(false);
    const dialog = dialogRef.current;
  }

  return (
    <>
      <button onClick={() => setShow(true)} className="add-feedback-btn">
        + Add Feedback
      </button>
      <CreateFeedback />
    </>
  );
}
