"use client";

import EditFeedback from "../edit/edit";

export default function Edit({id, data}) {
  
  return(

    <>
    <button className="editBtn">Edit Feedback</button>
    <EditFeedback id={id} data={data}/>
    </>
  ) ;

}
