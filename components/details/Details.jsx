import Image from "next/image";
import Cards from "../cards/Cards";
import AddComment from "./AddComment";
import "./details.css";
import Edit from "./Edit";
import Goback from "./Goback";
import Comments from "./Comments";
import { AdvancedFetch } from "@/utils/advancedfetch";
import Likes from "../cards/likes";

<<<<<<< HEAD
export default function Details() {
=======
export  default async function Details({id}) {
  
   const {response} = await AdvancedFetch(`https://feedback.nazlisunay.com.tr/api/Opinions/${id}`);  
   const data = response;

  
>>>>>>> 3ba77fb1a4ad5edb0d0c516a47e64e5573725b9c
  return (
    <>
      <div className="detailPage">
        <div className="headerDetail">
          <Goback />
          <Edit />
        </div>
        <div key={data.id} className="cardsContainer">
          <div className="leftcontentCard">
            <Likes voteCount={data.voteCount} />
            <div className="content">
              <p className="title">{data.title}</p>
              <p className="text">{data.description}</p>
              <p className="categories">{data.category}</p>
            </div>
          </div>
          <div className="commentBox">
            <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
            <p className="commentCount">{data.comments}</p>
          </div>
        </div>
        <Comments />
        <AddComment />
      </div>
    </>
  );
}
