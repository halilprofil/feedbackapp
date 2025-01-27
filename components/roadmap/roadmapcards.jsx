export const dynamic = "force-dynamic";
import Image from "next/image";
import Likes from "../cards/likes";
import RoadMapHeader from "./header";
import Link from "next/link";
import styles from "./page.module.css";
import { AdvancedFetch } from "@/utils/advancedfetch";

export default async function RoadMapsCards({ statusPlanned, statusProgress, statusLive }) {
  const user = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/User/me");

  let userId;
  if (user && user.status !== 404) {
    userId = user.response.id;
  }

  // Eğer herhangi bir durum verisi yoksa, yükleme mesajı göster
  if (!statusPlanned || !statusProgress || !statusLive) {
    return <p>Data is loading or unavailable.</p>;
  }

  return (
    <>
      <RoadMapHeader userId={userId} />
      <div className={styles.roadmapContainer}>
        {/* Planned Column */}
        <div className={styles.cardColon}>
          <div className={styles.title}>
            <p className={styles.colonTitle}>Planned ({statusPlanned.length})</p>
            <span className={styles.colonSpan}>Ideas prioritized for research</span>
          </div>

          {statusPlanned.map((x) => (
            <Link className={styles.linkcss} key={x.id} href={x.id ? `detail/${x.id}` : "#"}>
              <div className={styles.cardsPlanned}>
                <div className={styles.cardsTop}>
                  <p className={styles.colonP}>Planned</p>
                  <h4>{x.title}</h4>
                  <p className={styles.colonP}>{x.description}</p>
                  <p className={styles.categorieBox}>{x.category}</p>
                </div>
                <div className={styles.likesnCommentDiv}>
                  <Likes />
                  <div className={styles.commentBox}>
                    <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
                    <p className={styles.commentCount}>{x.comment || 0}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* In-Progress Column */}
        <div className={styles.cardColon}>
          <div className={styles.title}>
            <p className={styles.colonTitle}>In-Progress ({statusProgress.length})</p>
            <span className={styles.colonSpan}>Currently being developed</span>
          </div>

          {statusProgress.map((x) => (
            <Link className={styles.linkcss} key={x.id} href={x.id ? `detail/${x.id}` : "#"}>
              <div className={styles.cardsProgress}>
                <div className={styles.cardsTop}>
                  <p className={styles.colonP}>In-Progress</p>
                  <h4>{x.title}</h4>
                  <p className={styles.colonP}>{x.description}</p>
                  <p className={styles.categorieBox}>{x.category}</p>
                </div>
                <div className={styles.likesnCommentDiv}>
                  <Likes />
                  <div className={styles.commentBox}>
                    <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
                    <p className={styles.commentCount}>{x.comment || 0}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Live Column */}
        <div className={styles.cardColon}>
          <div className={styles.title}>
            <p className={styles.colonTitle}>Live ({statusLive.length})</p>
            <span className={styles.colonSpan}>Released features</span>
          </div>

          {statusLive.map((x) => (
            <Link className={styles.linkcss} key={x.id} href={x.id ? `detail/${x.id}` : "#"}>
              <div className={styles.cardsLive}>
                <div className={styles.cardsTop}>
                  <p className={styles.colonP}>Live</p>
                  <h4>{x.title}</h4>
                  <p className={styles.colonP} >{x.description}</p>
                  <p className={styles.categorieBox}>{x.category}</p>
                </div>
                <div className={styles.likesnCommentDiv}>
                  <Likes />
                  <div className={styles.commentBox}>
                    <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
                    <p className={styles.commentCount}>{x.comment || 0}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
