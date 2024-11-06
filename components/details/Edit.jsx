"use client";

import { useState } from "react";
import EditFeedback from "../edit/edit";

export default function Edit({id, data}) {
  const [show , setShow] = useState(false);
  
  return(

    <>
    <button onClick={()=> setShow(true)} className="editBtn">Edit Feedback</button>
    <EditFeedback id={id} data={data} show={show} setShow={setShow}/>
    </>
  ) ;

}
