"use client";

import { useState } from "react";
import CreateFeedback from "../create/create";

export default function AddFeedBackBtn() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)} className="add-feedback-btn">
        + Add Feedback
      </button>
      <CreateFeedback show={show} setShow={setShow} />
    </>
  );
}
