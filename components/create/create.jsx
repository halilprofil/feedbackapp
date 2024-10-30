"use client";

import Image from "next/image";
import "./create.css";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { CreateFeedbacks } from "@/app/api/action";

export default function CreateFeedback({ show, setShow }) {
  useEffect(() => {}, [show]);
  return (
    <>
      <dialog open={show}>
        <form action={CreateFeedbacks}>
          <h3>Create New Feedback</h3>
          <div>
            <p>Feedback Title</p>
            <label htmlFor="title">Add a short, descriptive headline</label>
            <input type="text" name="title" id="title" />
          </div>

          <div>
            <p>Category</p>
            <label htmlFor="category">Choose a category for your feedback</label>
            <select name="category" id="category">
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
              <option value="Feature">Feature</option>
            </select>
          </div>

          <div>
            <p>Feedback Detail</p>
            <label htmlFor="detail">Include any specific comments on what should be improved, added, etc.</label>
            <textarea name="detail" id="detail"></textarea>
          </div>

          <div className="buttons">
            <button className="cancel" onClick={() => setShow(false)}>
              Cancel
            </button>
            <button className="KaydetBtn">Add Feedback</button>
          </div>

          <Image className="img1" src="/assets/circle.svg" width={56} height={56}></Image>
          <Image className="img2" src="/assets/+.svg" width={16} height={16}></Image>
        </form>
      </dialog>
    </>
  );
}
