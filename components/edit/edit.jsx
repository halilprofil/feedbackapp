"use client";
import Image from "next/image";
import AddFeedBackBtn from "../header/button";
import "./edit.css";
import { AdvancedFetch } from "@/utils/advancedfetch";
import { useState } from "react";
import { EditFeedbacks } from "@/app/api/action";

export default function EditFeedback({ id ,data , show , setShow , userId}) {
  console.log(userId);
  

  

  return (
    <>
      <dialog open={show}>
        <form action={EditFeedbacks}> {/* Form onSubmit ile handleEdit'e bağlı */}
          <input type="number" hidden  name="postId" value={id} />
          <h3>Editing ‘Add a dark theme option’</h3>
          <div>
            <p>Feedback Title</p>
            <label htmlFor="titleEdit">Add a short, descriptive headline</label>
            <input type="text" name="title" id="titleEdit" defaultValue={data.title}/>
          </div>

          <div>
            <p>Category</p>
            <label htmlFor="categoryEdit">Choose a category for your feedback</label>
            <select name="category" id="categoryEdit" defaultValue={data.category}>
              <option value="feature">Feature</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>
          </div>
          <input type="text" name="userId" hidden value={userId}/>

          <div>
            <p>Update Status</p>
            <label htmlFor="status">Change feedback state</label>
            <select name="status" id="status" defaultValue={data.status}>
              <option value="Planned">Planned</option>
              <option value="InProgress">In-Progress</option>
              <option value="Live">Live</option>
            </select>
          </div>

          <div>
            <p>Feedback Detail</p>
            <label htmlFor="detailEdit">Include any specific comments on what should be improved, added, etc.</label>
            <textarea
              name="detail"
              id="detailEdit"
              placeholder="It would help people with light sensitivities and who prefer dark mode."
              defaultValue={data.detail}
            ></textarea>
          </div>

          <div className="buttons">
            <button className="delete">
              Delete
            </button>

            <button type="button" onClick={() => setShow(false)} className="cancel">
              Cancel
            </button>
            <button type="submit" className="cancel">
              Save Feedback
            </button>
          </div>

          <Image className="img1" src="/assets/circle.svg" width={56} height={56} alt="Circle" />
          <Image className="img2" src="/assets/imgedit.svg" width={20} height={20} alt="Edit Icon" />
        </form>
      </dialog>
    </>
  );
}
