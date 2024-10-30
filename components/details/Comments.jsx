"use client";

import Image from "next/image";

export default function Comments() {
  return (
    <div className="commentBoxes">
      <p className="commentsCount">4 Comments</p>
      <div className="commentInfo">
        <Image width={40} height={40} src="/assets/profileimg.svg" alt="commentIcon" />
        <div className="commentContent">
          <div className="userInfo">
            <div className="userInfoColumn">
              <p className="name">Elijah Moss</p>
              <p className="username">@hexagon.bestagon</p>
            </div>
            <button className="replyBtn">Reply</button>
          </div>
          <div className="userComment">
            Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor
            in the evening after my device’s dark mode turns on without the bright background it currently has.
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
