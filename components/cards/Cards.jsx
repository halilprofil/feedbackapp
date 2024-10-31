import Image from "next/image";
import "./Cards.css";
import Likes from "./likes";
import { getFeedback } from "@/utils/fetch";

export default async function Cards() {
  const { response } = await getFeedback();
  const data = response || []; // Eğer response null veya undefined ise boş bir dizi ile başla

  return (
    <div className="containerC">
      {data.map((x) => (
        <div key={x.id} className="cardsContainer">
          <div className="leftcontentCard">
            <Likes voteCount={x.voteCount} />
            <div className="content">
              <p className="title">{x.title}</p>
              <p className="text">{x.description}</p>
              <p className="categories">{x.category}</p>
            </div>
          </div>
          <div className="commentBox">
            <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
            <p className="commentCount">{x.comments}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
