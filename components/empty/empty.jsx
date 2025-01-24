import Image from "next/image";
import AddFeedBackBtn from "../header/button";
import styles from "./page.module.css";

export default function Empty() {
  return (
    <>
      <div className={styles.emptyContainer}>
        <div className={styles.emptyContext}>
          <Image src="/assets/dedective.png" width={130} height={130} alt="dedective"></Image>
          <div className={styles.emptyTexts}>
            <h3 className={styles.emptyH3}>There is no feedback yet.</h3>
            <p className={styles.emptyP}>
              Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
            </p>
          </div>

          <AddFeedBackBtn />
        </div>
      </div>
    </>
  );
}
