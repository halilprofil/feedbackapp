import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Empty from "@/components/empty/empty";
import CreateFeedback from "@/components/create/create";
import EditFeedback from "@/components/edit/edit";
import Cards from "@/components/cards/cards";
import Sidebar from "@/components/sidebar/Sidebar";
import RoadMapHeader from "@/components/roadmap/header";
import RoadMapsCards from "@/components/roadmap/roadmapcards";
import { getFeedback, UserMe } from "@/utils/fetch";
import Login from "@/components/login/login";
import { AdvancedFetch } from "@/utils/advancedfetch";

export default async function Home() {
  const {response} = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/Opinions");
  const data = await response;
  console.log(data);


  
  
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="rightContainer">
          <Header />
          <Cards />
        </div>
      </div>
    </>
  );
}
