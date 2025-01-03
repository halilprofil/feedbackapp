"use client";

import { useEffect, useState } from "react";
import CreateFeedback from "../create/create";
import { useRouter } from "next/router";
import Login from "../login/login";

export default function AddFeedBackBtn({userId}) {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);

  function openModal() {
    setShow(!show);
  }

  
  useEffect(() => {
    console.log(login)
    if(!userId){
      setLogin(!login);
    }
  },[show]);  
 

  return (
    <>
      <button onClick={openModal} className="add-feedback-btn">
        + Add Feedback
      </button>
      <CreateFeedback show={show} setShow={setShow} userId = {userId}/>
      {!userId && <Login login={login}/>}
    </>
  );
}
