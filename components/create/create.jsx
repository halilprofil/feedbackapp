"use client";

import Image from "next/image";
import "./create.css";

export default function CreateFeedback() {
  return (
    <>
      <dialog open={true}>
        <form>
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
              <option value=""></option>
            </select>
          </div>

          <div>
            <p>Feedback Detail</p>
            <label htmlFor="detail">Include any specific comments on what should be improved, added, etc.</label>
            <textarea name="detail" id="detail"></textarea>
          </div>

          <div className="buttons">
            <button className="cancel">Cancel</button>
            <button className="KaydetBtn">Add Feedback</button>
          </div>

          <Image className="img1" src="/assets/circle.svg" width={56} height={56}></Image>
          <Image className="img2" src="/assets/+.svg" width={16} height={16}></Image>
        </form>
      </dialog>
    </>
  );
}
