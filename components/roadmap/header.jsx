import Goback from "../details/Goback";
import AddFeedBackBtn from "../header/button";
import styles from "./page.module.css";

export default function RoadMapHeader({ userId }) {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.rightContent}>
          <Goback />
          <h3 className={styles.roadmapH}>Roadmap</h3>
        </div>
        <AddFeedBackBtn userId={userId} />
      </div>
    </>
  );
}
