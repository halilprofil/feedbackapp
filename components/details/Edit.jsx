"use client";

import { useEffect, useState } from "react";
import EditFeedback from "../edit/edit";

export default function Edit({id, data, userId}) {
  const [show , setShow] = useState(false);
  const [login, setLogin] =useState(false);
  useEffect(()=>{
    if(!userId){
      setShow(false)
      setLogin(!login)
    }

  },[show])
  
  return(

    <>
    <button onClick={()=> setShow(!show)} className="editBtn">Edit Feedback</button>
    <EditFeedback id={id} data={data} show={show} setShow={setShow} userId={userId} login={login}/>
    </>
  ) ;

}
