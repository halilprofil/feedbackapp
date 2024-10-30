"use client";
export default function Likes({voteCount}) {
  return (
    <div className="likes">
      <p className="likesSign">^</p>
      <p className="likesCount">{voteCount}</p>
    </div>
  );
}
