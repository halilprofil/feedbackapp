import Image from "next/image";
import "./Cards.css";
import Likes from "./likes";
import { getFeedback } from "@/utils/fetch";

export default async function Cards() {
  const { response } = await getFeedback();
  const data = response;
  console.log(data.map(x => x.title) + "11111111111111111");
  console.log(data)

  return (
    <>
      <div className="cardsContainer">
        {data.map(x => (
          <div key={x.id} className="likesnContentBox">
            <Likes />
            <div className="content">
              <p className="title">{x.title}</p>
              <p className="text">{x.description}</p>
              <p className="categories">{x.status}</p>
            </div>
            <div className="commentBox">
              <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
              <p className="commentCount">{x.comments}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
