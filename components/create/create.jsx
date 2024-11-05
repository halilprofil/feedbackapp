"use client";

import Image from "next/image";
import "./create.css";
import { useEffect, useRef } from "react";
import { redirect } from "next/navigation";
import { CreateFeedbacks } from "@/app/api/action";
import { revalidatePath } from "next/cache";

export default function CreateFeedback({ show, setShow }) {
  const formRef = useRef(null); // form referansı oluşturuyoruz

  useEffect(() => {}, [show]);

  return (
    <>
      <dialog open={show}>
        <form
          action={async (formData) => {
            await CreateFeedbacks(formData);
            formRef.current.reset(); // Form gönderildikten sonra temizleniyor
          }}
          ref={formRef} // form referansını burada kullanıyoruz
        >
          <h3>Create New Feedback</h3>
          <div className="createForm">
            <h4 className="createTitle">Create New Feedback</h4>
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
            <input type="text" name="userId" hidden value="1a4e85ac-e862-4a68-a42d-56cb2ec8b8df" />
            <input type="text" name="status" hidden value="Planned" />

            <div>
              <p>Feedback Detail</p>
              <label htmlFor="detail">Include any specific comments on what should be improved, added, etc.</label>
              <textarea name="detail" id="detail"></textarea>
            </div>

            <div className="buttons">
              <button className="cancel" onClick={() => setShow(false)}>
                Cancel
              </button>
              <button type="submit" className="KaydetBtn">
                Add Feedback
              </button>
            </div>

            <Image className="img1" src="/assets/circle.svg" width={56} height={56} alt="Circle" />
            <Image className="img2" src="/assets/+.svg" width={16} height={16} alt="Plus Icon" />
          </div>
        </form>
      </dialog>
    </>
  );
}
