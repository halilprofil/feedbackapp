import styles from "./page.module.css";
import Filter from "./filter";
import Roadmap from "./Roadmap";
import { AdvancedFetch } from "@/utils/advancedfetch";
import Logout from "../login/logout";

export default async function Sidebar({ statusPlanned, statusProgress, statusLive }) {
  const { response } = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/User/me");

  return (
    <>
      <div className={styles.Sidebar}>
        <div className={styles.header}>
          <h3 className={styles.headerH}>Frontend Mentor</h3>
          <p className={styles.headerP}>Feedback Board</p>
          {response !== null && (
            <>
              <p>Welcome @{response.nickname} </p> <Logout />
            </>
          )}
        </div>
        <Filter />
        <Roadmap statusPlanned={statusPlanned} statusProgress={statusProgress} statusLive={statusLive} />
      </div>
    </>
  );
}
