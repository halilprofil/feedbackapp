export const dynamic = "force-dynamic";
import Image from "next/image";
import Cards from "../cards/getCard";
import AddComment from "./AddComment";
import styles from "./page.module.css";
import Edit from "./Edit";
import Goback from "./Goback";
import Comments from "./Comments";
import { AdvancedFetch } from "@/utils/advancedfetch";
import Likes from "../cards/likes";

export default async function Details({ id }) {
  const { response } = await AdvancedFetch(`https://feedback.nazlisunay.com.tr/api/Opinions/${id}`);
  const data = response;
  const user = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/User/me");
  let userId;
  let realUserData;
  if (user.status !== 404) {
    userId = await user.response.id;
    const userData = await AdvancedFetch(`https://feedback.nazlisunay.com.tr/api/User/${userId}`);
    realUserData = userData.response;
  }

  const allUserData = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/User/all");
  const realAllUserData = allUserData;
  console.log(realAllUserData);

  return (
    <>
      <div className={styles.detailPage}>
        <div className={styles.headerDetail}>
          <Goback />
          <Edit id={id} data={data} userId={userId} />
        </div>
        <div key={data?.id} className={styles.cardsContainer}>
          <div className={styles.leftcontentCard}>
            <Likes voteCount={data?.voteCount} />
            <div className={styles.content}>
              <p className={styles.title}>{data?.title}</p>
              <p className={styles.text}>{data?.description}</p>
              <p className={styles.categories}>{data?.category}</p>
            </div>
          </div>
          <div className={styles.commentBox}>
            <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
            <p className={styles.commentCount}>{data?.comments.length}</p>
          </div>
        </div>
        <Comments realAllUserData={realAllUserData} data={data} userId={userId} />
        <AddComment userId={userId} id={id} />
      </div>
    </>
  );
}
