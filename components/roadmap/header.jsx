import Goback from "../details/Goback";
import AddFeedBackBtn from "../header/button";
import styles from "./page.module.css";

export default function RoadMapHeader({ userId }) {
  return (
    <>
      <div className={styles.header - container}>
        <div className={styles.right - content}>
          <Goback />
          <h3>Roadmap</h3>
        </div>
        <AddFeedBackBtn userId={userId} />
      </div>
    </>
  );
}
