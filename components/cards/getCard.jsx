export const dynamic = "force-dynamic";
import Image from "next/image";
import styles from "./page.module.css";
import Likes from "./likes";
import { getFeedback } from "@/utils/fetch";
import Link from "next/link";
import Empty from "../empty/empty";
import { AdvancedFetch } from "@/utils/advancedfetch";
import Header from "../header/header";

export default async function Cards() {
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


  const commentsMap = new Map(commentsData.map((item) => [item.id, item.commentCount]));

  return (
  <>
    <div className={styles.containerC}>
      {data.length > 0 ? (
        data.map((x) => (
          <Link key={x.id} href={`detail/${x.id}`}>
            <div className={styles.cardsContainer}>
              <div className={styles.leftcontentCard}>
                <Likes voteCount={x.voteCount} />
                <div className={styles.content}>
                  <p className={styles.title}>{x.title}</p>
                  <p className={styles.text}>{x.description}</p>
                  <p className={styles.categories}>{x.category}</p>
                </div>
              </div>
              <div className={styles.commentBox}>
                <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
                <span className={styles.commentCount}>{commentsMap.get(x.id) || 0}</span>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <Empty />
      )}
    </div>
  
  </>
   
  );
}