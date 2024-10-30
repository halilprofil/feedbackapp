"use client";

export default function AddComment() {
  return (
    <div className="addComment">
      <h3>Add Comment</h3>
      <textarea placeholder="Type your comment here" name="" id=""></textarea>
      <div className="addCommentFooter">
        <p>250 Characters left</p>
        <button className="postCommentBtn">Post Comment</button>
      </div>
    </div>
  );
}
