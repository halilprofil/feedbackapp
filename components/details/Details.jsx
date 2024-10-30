import Image from "next/image";
import Cards from "../cards/Cards";
import AddComment from "./AddComment";
import "./details.css";
import Edit from "./Edit";
import Goback from "./Goback";
import Comments from "./Comments";

export default function Details() {
  constR
  return (
    <>
      <div className="detailPage">
        <div className="headerDetail">
          <Goback />
          <Edit />
        </div>
        <Cards />
        <Comments />
        <AddComment />
      </div>
    </>
  );
}
