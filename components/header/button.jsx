"use client";

import { useState } from "react";
import CreateFeedback from "../create/create";
import { useRouter } from "next/router";

export default function AddFeedBackBtn() {
  const [show, setShow] = useState(false);

  function openModal() {
    setShow(true);
  }

  return (
    <>
      <button onClick={openModal} className="add-feedback-btn">
        + Add Feedback
      </button>
      <CreateFeedback show={show} setShow={setShow} />
    </>
  );
}
