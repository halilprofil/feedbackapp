import Image from "next/image";
import AddFeedBackBtn from "./button";
import Filter from "./filter";
import "./header.css";
import { getFeedback } from "@/utils/fetch";

export default async function Header() {
  const { response } = await getFeedback();
  const data = response;
  

  return (
    <>
      <div className="header-container">
        <div className="hc-right-content">
          <div>
            <Image src="/assets/figure.svg" alt="Figure illustration" width={23} height={24} />
            <p>{data?.length} Suggestion</p>
          </div>
          <Filter />
        </div>
        <AddFeedBackBtn />
      </div>
    </>
  );
}
