export const dynamic = "force-dynamic";
import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/Sidebar";
import { AdvancedFetch } from "@/utils/advancedfetch";
import styles from "./layout.module.css";
import MiniSidebar from "@/components/sidebar/MiniSidebar";

export default async function Layout({ children }) {
  const { response: opinions } = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/Opinions");

  const data = (await opinions) || [];
  const statusPlanned = data.filter((x) => x.status === "Planned");
  const statusProgress = data.filter((x) => x.status === "InProgress");
  const statusLive = data.filter((x) => x.status === "Live");
  return (
    <>
      <div className={styles.container}>
        <Sidebar statusPlanned={statusPlanned} statusProgress={statusProgress} statusLive={statusLive} />
        <div className={styles.rightContainer}>
          <Header />
          <main>{children}</main>
        </div>
        <MiniSidebar statusPlanned={statusPlanned} statusProgress={statusProgress} statusLive={statusLive} />
      </div>
    </>
  );
}
