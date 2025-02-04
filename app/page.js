export const dynamic = "force-dynamic";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Cards from "@/components/cards/getCard";
import Sidebar from "@/components/sidebar/Sidebar";

import { AdvancedFetch } from "@/utils/advancedfetch";

export default async function Home() {
  const { response } = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/Opinions");
  const data = (await response) || [];
  const statusPlanned = data.filter((x) => x.status === "Planned");
  const statusProgress = data.filter((x) => x.status === "InProgress");
  const statusLive = data.filter((x) => x.status === "Live");

  return (
    <>
      <div className={styles.container}>
        <Sidebar statusPlanned={statusPlanned} statusProgress={statusProgress} statusLive={statusLive} />
        <div className={styles.rightContainer}>
          <Header/>
          <Cards/>
        </div>
      </div>
    </>
  );
}
