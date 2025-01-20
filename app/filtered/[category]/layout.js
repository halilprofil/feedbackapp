import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/Sidebar";
import { AdvancedFetch } from "@/utils/advancedfetch";

export default async function Layout({ children }) {
  const { response: opinions } = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/Opinions") ;

  const data = await opinions || [];
  const statusPlanned = data.filter((x) => x.status === "Planned");
  const statusProgress = data.filter((x) => x.status === "InProgress");
  const statusLive = data.filter((x) => x.status === "Live");
  return (
    <>
      <div className="container">
        <Sidebar statusPlanned={statusPlanned} statusProgress={statusProgress} statusLive={statusLive} />
        <div className="rightContainer">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
