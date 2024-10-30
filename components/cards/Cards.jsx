import Image from "next/image";
import "./Cards.css";
import Likes from "./likes";
import { getFeedback } from "@/utils/fetch";

export default async function Cards() {
  const { response } = await getFeedback();
  const data = response || []; // Eğer response null veya undefined ise boş bir dizi ile başla
  
  return (
    <div className="cardsContainer">
      <div className="likesnContentBox">
        {data.map((x) => (
          <div key={x.id} className="contentBox"> {/* Anahtar burada div için kullanılmalı */}
            <Likes voteCount={x.voteCount} />
            <div className="content">
              <p className="title">{x.title}</p>
              <p className="text">{x.description}</p>
              <p className="categories">{x.status}</p>
            </div>
            <div className="commentBox">
              <Image
                width={18}
                height={18}
                src="/assets/comment-icon.svg"
                alt="commentIcon"
              />
              <p className="commentCount">{x.comments}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
