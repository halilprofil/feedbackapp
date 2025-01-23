import Image from "next/image";
import AddFeedBackBtn from "./button";
import Filter from "./filter";
import { getFeedback } from "@/utils/fetch";
import { AdvancedFetch } from "@/utils/advancedfetch";
import styles from "./page.module.css";

export default async function Header() {
  const { response } = await getFeedback();
  const data = response;
  const user = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/User/me");
  console.log(user.status);
  let userId;
  if (user.status !== 404) {
    userId = user.response.id;
  }

  return (
    <>
      <div className={styles.header - container}>
        <div className={styles.hc - right - content}>
          <div>
            <Image src="/assets/figure.svg" alt="Figure illustration" width={23} height={24} />
            <p>{data?.length} Suggestion</p>
          </div>
          <Filter />
        </div>
        <AddFeedBackBtn userId={userId} />
      </div>
    </>
  );
}
