import Image from "next/image";
import AddFeedBackBtn from "./button";
import Filter from "./filter";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="right-content">
          <div>
            <Image src="/assets/figure.svg" alt="Figure illustration" width={23} height={24} />
            <Image src="/assets/figure1.svg" alt="Figure illustration" width={117} height={26} />
          </div>
          <Filter />
        </div>

        <AddFeedBackBtn />
      </div>
    </>
  );
}
