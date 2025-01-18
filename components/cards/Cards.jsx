import Image from "next/image";
import "./Cards.css";
import Likes from "./likes";
import { getFeedback } from "@/utils/fetch";
import Link from "next/link";
import Empty from "../empty/empty";

export default async function Cards() {
  const { response } = await getFeedback();
  const data = response || [];

  return (
    <div className="containerC">
      {data.length > 0 ? (
        data.map((x) => (
          <Link key={x.id} href={`detail/${x.id}`}>
            <div className="cardsContainer">
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
              </div>
            </div>
          </Link>
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
}
