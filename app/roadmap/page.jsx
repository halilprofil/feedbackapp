import RoadMapsCards from "@/components/roadmap/roadmapcards";
import { AdvancedFetch } from "@/utils/advancedfetch";

export default async function RoadMap() {
  const { response } = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/Opinions");
  console.log("ROADMAP", response);

  const data = await response;
  const statusPlanned = data.filter((x) => x.status === "Planned");
  const statusProgress = data.filter((x) => x.status === "InProgress");
  const statusLive = data.filter((x) => x.status === "Live");

  return <RoadMapsCards statusPlanned={statusPlanned} statusProgress={statusProgress} statusLive={statusLive} />;
}
