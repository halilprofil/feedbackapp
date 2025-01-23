import Likes from "@/components/cards/likes";
import { AdvancedFetch } from "@/utils/advancedfetch";
import Image from "next/image";
import Link from "next/link";

export default async function Filtered({ params }) {
  const { category } = params;
  console.log(category);
  const { response } = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/Opinions");
  const data = (await response) || [];
  console.log(data);
  const filteredData = data?.filter((x) => x.category === category);
  return (
    <>
      {filteredData?.map((x) => (
        <Link href={`/detail/${x.id}`} key={x.id}>
          <div key={x.id} className={styles.cardsContainer}>
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
              <p className={styles.commentCount}>{x.comments}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
