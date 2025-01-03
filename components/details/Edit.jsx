"use client";

import { useState } from "react";
import EditFeedback from "../edit/edit";

export default function Edit({id, data, userId}) {
  const [show , setShow] = useState(false);
  console.log(data);
  
  return(

    <>
    <button onClick={()=> setShow(!show)} className="editBtn">Edit Feedback</button>
    <EditFeedback id={id} data={data} show={show} setShow={setShow} userId={userId}/>
    </>
  ) ;

}
