"use client";
import Image from "next/image";
import "./create.css";
import { useFormState } from "react-dom";
import { CreateFeedbacks } from "@/app/api/action";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import Login from "../login/login";

export default function CreateFeedback({ show, setShow, userId }) {
  const [state, action] = useFormState(CreateFeedbacks, null);
  const dialogRef = useRef(null);
  useEffect(() => {
    console.log(state?.success)
    console.log();
    if(state?.error){
        toast.error(state?.error)
    }
    if(state?.success){
        toast.success(state?.success)
        dialogRef.current.close()

    }
  },[state]);

  return (
    <>
      {userId && <dialog ref={dialogRef} open={show}>
        <form action={action} className="createForm">
          <h3>Create New Feedback</h3>
          <div>
            <h4 className="createTitle">Create New Feedback</h4>
            <div>
              <p>Feedback Title</p>
              <label htmlFor="createTitle1">Add a short, descriptive headline</label>
              <input type="text" name="title" id="createTitle1" />
              {state?.title && <div className="error">{state.title}</div>}
            </div>

            <div>
              <p>Category</p>
              <label htmlFor="createCategory1">Choose a category for your feedback</label>
              <select name="category" id="createCategory1">
                <option value="UI">UI</option>
                <option value="UX">UX</option>
                <option value="Enhancement">Enhancement</option>
                <option value="Bug">Bug</option>
                <option value="Feature">Feature</option>
              </select>
              {state?.category && <div className="error">{state.category}</div>}
            </div>

            <input type="text" name="userId" hidden value={userId} />
            <input type="text" name="status" hidden value="Planned" />

            <div>
              <p>Feedback Detail</p>
              <label htmlFor="createDetail1">Include any specific comments on what should be improved, added, etc.</label>
              <textarea name="detail" id="createDetail1"></textarea>
              {state?.detail && <div className="error">{state.detail}</div>}
            </div>

            <div className="buttons">
              <button type="button" className="cancel" onClick={() => setShow(false)}>
                Cancel
              </button>
              <button type="submit" className="KaydetBtn">Add Feedback</button>
            </div>

            <Image className="img1" src="/assets/circle.svg" width={56} height={56} alt="Circle" />
            <Image className="img2" src="/assets/+.svg" width={16} height={16} alt="Plus Icon" />
          </div>
        </form>
      </dialog>}
    </>
  );
}
