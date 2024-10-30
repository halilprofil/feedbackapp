import Image from "next/image";
import AddFeedBackBtn from "./button";
import Filter from "./filter";
import "./header.css";
import { getFeedback } from "@/utils/fetch";

export default async function Header() {
    const { response } = await getFeedback();
    const data = response;
    console.log(data.length)
    

  return (
    <>
      <div className="header-container">
<<<<<<< HEAD
        <div className="hc-right-content">
=======
        <div className="right-contents">
>>>>>>> origin/halil
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
