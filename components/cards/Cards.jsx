import Image from "next/image";
import "./Cards.css";
import Likes from "./likes";

export default function Cards() {
  return (
    <>
      <div className="cardsContainer">
        <div className="likesnContentBox">
          <Likes />
          <div className="content">
            <p className="title">Add tags for solutions</p>
            <p className="text">Easier to search for solutions based on a specific stack.saasdasd</p>
            <p className="categories">Enhancement</p>
          </div>
        </div>
        <div className="commentBox">
          <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
          <p className="commentCount">2</p>
        </div>
      </div>
    </>
  );
}
