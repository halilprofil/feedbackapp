"use client";
import { useState } from "react";
import "./details.css"

export default function AddComment() {
  const maxChar = 250;
  const [char, setChar] = useState(maxChar);

  function submitComment(e) {
    setChar(maxChar - e.target.value.length);
  }

  return (
    <div className="addComment">
      <h3>Add Comment</h3>
      <form action="">
        <textarea
          onChange={(e) => submitComment(e)}
          placeholder="Type your comment here"
          name="comment"
        ></textarea>
        <div className="addCommentFooter">
          <p className={char <= 0 ? "warning" : ""}>
            {char} Characters left
          </p>
          <button 
            className="postCommentBtn" 
            disabled={char <= 0} 
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}

