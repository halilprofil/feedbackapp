"use client";

import Image from "next/image";

export default function Comments({ realAllUserData, data }) {
  const usersData = realAllUserData.response;

  return (
    <div className="commentBoxes">
      <p className="commentsCount">{data.comments.length} Comments</p>

      {data.comments.map((comment) => {
        // Yorumdaki kullanıcıyı `userId` ile bul
        const user = usersData.find((u) => u.id === comment.userId) || {
          firstName: "Anonymous",
          lastName: "",
          avatar: "/assets/profileimg.svg",
          nickname: "unknown",
        };

        return (
          <div key={comment.id} className="commentInfo">
            {/* <Image 
                width={40} 
                height={40} 
                src={user.avatar} 
                alt="User Avatar" 
              /> */}
            <div className="commentContent">
              <div className="userInfo">
                <div className="userInfoColumn">
                  <p className="name">{`${user.firstName} ${user.lastName}`.trim()}</p>
                  <p className="username">@{user.nickname}</p>
                </div>
                <button className="replyBtn">Reply</button>
              </div>
              <div className="userComment">{comment.content || "No comment available."}</div>
            </div>
            <div className="divider"></div>
          </div>
        );
      })}
    </div>
  );
}
