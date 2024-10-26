import Image from "next/image";
import Cards from "../cards/Cards";
import AddComment from "./AddComment";
import "./details.css";
import Edit from "./Edit";
import Goback from "./Goback";

export default function Details() {
  return (
    <>
      <div className="detailPage">
        <div className="headerDetail">
          <Goback />
          <Edit />
        </div>
        <Cards />
        <div className="commentBoxes">
          <p className="commentsCount">4 Comments</p>
          <div className="commentInfo">
            <Image width={40} height={40} src="/assets/profileimg.svg" alt="commentIcon" />
            <div className="commentContent">
              <div className="userInfo">
                <div className="userInfoColumn">
                  <p className="name">Elijah Moss</p>
                  <p className="username">@hexagon.bestagon</p>
                </div>
                <button className="replyBtn">Reply</button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <AddComment />
      </div>
    </>
  );
}
