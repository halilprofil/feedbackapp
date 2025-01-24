"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Comments({ realAllUserData, data }) {
  const usersData = realAllUserData.response;
  console.log(data);
  return (
    <div className={styles.commentBoxes}>
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
          <div key={comment.id} className={styles.commentInfo}>
            {/* <Image 
                width={40} 
                height={40} 
                src={user.avatar} 
                alt="User Avatar" 
              /> */}
            <div className={styles.commentContent}>
              <div className={styles.userInfo}>
                <div className={styles.userInfoColumn}>
                  <p className={styles.name}>{`${user.firstName} ${user.lastName}`.trim()}</p>
                  <p className={styles.username}>@{user.nickname}</p>
                </div>
                <button className={styles.replyBtn}>Reply</button>
              </div>

              <div className={styles.userComment}>{comment.content || "No comment available."}</div>
            </div>
            <div className={styles.divider}></div>
          </div>
        );
      })}
    </div>
  );
}
