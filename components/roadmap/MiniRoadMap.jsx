"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Likes from "../cards/likes";
import Image from "next/image";
import { getFeedback } from "@/utils/fetch";
import { AdvancedFetch } from "@/utils/advancedfetch";

export default function MiniRoadMap({ statusPlanned, statusProgress, statusLive }) {
  const [cards, setCards] = useState(statusPlanned);
  const [commentsMap, setCommentsMap] = useState(new Map());

  useEffect(() => {
    setCards(statusPlanned); // Props değişirse güncelliyoruz.
  }, [statusPlanned, statusProgress, statusLive]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { response } = await getFeedback();
        const data = response || [];

        const commentsData = await Promise.all(
          data.map(async (x) => {
            const { response: opinionDetail } = await AdvancedFetch(
              `https://feedback.nazlisunay.com.tr/api/Opinions/${x.id}`
            );
            return { id: x.id, commentCount: opinionDetail?.comments?.length || 0 };
          })
        );

        setCommentsMap(new Map(commentsData.map((item) => [item.id, item.commentCount])));
      } catch (error) {
        console.error("Yorumlar alınırken hata oluştu:", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className={styles.miniRoadmapContainer}>
      <div className={styles.miniRoadmapButtons}>
        <button className={styles.miniRoadmapButton} style={{ color: cards === statusPlanned ? "#3A4374" : "gray" }} onClick={() => setCards(statusPlanned)}>
          Planned ({statusPlanned.length})
        </button>
        <button className={styles.miniRoadmapButton} style={{ color: cards === statusProgress ? "#3A4374" : "gray" }} onClick={() => setCards(statusProgress)}>
          In-Progress ({statusProgress.length})
        </button>
        <button className={styles.miniRoadmapButton} style={{ color: cards === statusLive ? "#3A4374" : "gray" }} onClick={() => setCards(statusLive)}>
          Live ({statusLive.length})
        </button>
      </div>

      <div className={styles.miniRoadmapColon}>
        {cards.map((x) => (
          <Link className={styles.linkcss} key={x.id} href={x.id ? `detail/${x.id}` : "#"}>
            <div className={styles[`cards${cards === statusPlanned ? "Planned" : cards === statusProgress ? "Progress" : "Live"}`]}>
              <div className={styles.cardsTop}>
                <p className={styles.colonP}>{cards === statusPlanned ? "Planned" : cards === statusProgress ? "In-Progress" : "Live"}</p>
                <h4>{x.title}</h4>
                <p className={styles.colonP}>{x.description}</p>
                <p className={styles.categorieBox}>{x.category}</p>
              </div>
              <div className={styles.likesnCommentDiv}>
                <Likes voteCount={x.voteCount} />
                <div className={styles.commentBox}>
                  <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
                  <p className={styles.commentCount}>{commentsMap.get(x.id) || 0}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
