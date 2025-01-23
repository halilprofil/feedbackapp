import Image from "next/image";
import styles from "./page.module.css";
import Likes from "./likes";
import { getFeedback } from "@/utils/fetch";
import Link from "next/link";
import Empty from "../empty/empty";

export default async function Cards1() {
  const { response } = await getFeedback();
  const data = response || [];

  return (
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
              </div>
            </div>
          </Link>
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
}
