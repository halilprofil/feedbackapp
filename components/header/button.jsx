"use client";

import { useState } from "react";
import CreateFeedback from "../create/create";
import { useRouter } from 'next/router';

export default function AddFeedBackBtn() {
  const [show, setShow] = useState(false);

<<<<<<< HEAD
=======
  function openModal() {
    setShow(true);
  }

>>>>>>> origin/halil
  return (
    <>
      <button onClick={openModal} className="add-feedback-btn">
        + Add Feedback
      </button>
<<<<<<< HEAD
      <CreateFeedback show={show} setShow={setShow} />
=======
      <CreateFeedback show={show} setShow={setShow}/>
>>>>>>> origin/halil
    </>
  );
}
