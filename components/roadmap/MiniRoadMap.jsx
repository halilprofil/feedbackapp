"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Likes from "../cards/likes";
import Image from "next/image";

export default function MiniRoadMap({ statusPlanned, statusProgress, statusLive }) {
  const [cards, setCards] = useState(statusPlanned);

  useEffect(() => {
    console.log(cards==statusPlanned);
    console.log('useEffect');
  }, [cards]);

  return (
    <div className={styles.miniRoadmapContainer}>
      <div className={styles.miniRoadmapButtons}>
        <button className={styles.miniRoadmapButton} style={{ color: cards == statusPlanned ? "#3A4374" : "gray" }} onClick={() => setCards(statusPlanned)}>Planned ({statusPlanned.length})</button>
        <button className={styles.miniRoadmapButton} style={{ color: cards == statusProgress ? "#3A4374" : "gray" }} onClick={() => setCards(statusProgress)}>In-Progress ({statusProgress.length})</button>
        <button className={styles.miniRoadmapButton} style={{ color: cards == statusLive ? "#3A4374" : "gray" }} onClick={() => setCards(statusLive)}>Live ({statusLive.length})</button>
      </div>

      <div className={styles.miniRoadmapColon}>
        {cards == statusPlanned && 
              cards.map((x) => 
            <Link className={styles.linkcss} key={x.id} href={x.id ? `detail/${x.id}` : "#"}>
              <div className={styles.cardsPlanned}>
                <div className={styles.cardsTop}>
                  <p className={styles.colonP}>Planned</p>
                  <h4>{x.title}</h4>
                  <p className={styles.colonP}>{x.description}</p>
                  <p className={styles.categorieBox}>{x.category}</p>
                </div>
                <div className={styles.likesnCommentDiv}>
                  <Likes voteCount={x.voteCount} />
                  <div className={styles.commentBox}>
                    <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
                    <p className={styles.commentCount}>{x.comment || 0}</p>
                  </div>
                </div>
              </div>
            </Link>
              )}

            {cards == statusProgress && 
              cards.map((x) =>  
              <Link className={styles.linkcss} key={x.id} href={x.id ? `detail/${x.id}` : "#"}>
              <div className={styles.cardsProgress}>
                <div className={styles.cardsTop}>
                  <p className={styles.colonP}>In-Progress</p>
                  <h4>{x.title}</h4>
                  <p className={styles.colonP}>{x.description}</p>
                  <p className={styles.categorieBox}>{x.category}</p>
                </div>
                <div className={styles.likesnCommentDiv}>
                  <Likes voteCount={x.voteCount} />
                  <div className={styles.commentBox}>
                    <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
                    <p className={styles.commentCount}>{x.comment || 0}</p>
                  </div>
                </div>
              </div>
            </Link>
             )}

            {cards == statusLive && 
              cards.map((x) => 
                <Link className={styles.linkcss} key={x.id} href={x.id ? `detail/${x.id}` : "#"}>
              <div className={styles.cardsLive}>
                <div className={styles.cardsTop}>
                  <p className={styles.colonP}>Live</p>
                  <h4>{x.title}</h4>
                  <p className={styles.colonP} >{x.description}</p>
                  <p className={styles.categorieBox}>{x.category}</p>
                </div>
                <div className={styles.likesnCommentDiv}>
                  <Likes voteCount={x.voteCount} />
                  <div className={styles.commentBox}>
                    <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
                    <p className={styles.commentCount}>{x.comment || 0}</p>
                  </div>
                </div>
              </div>
            </Link>
             )}
        
        
        

        
      </div>
    </div>
  );
}
