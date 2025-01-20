import Image from "next/image";
import Cards from "../cards/Card";
import AddComment from "./AddComment";
import "./details.css";
import Edit from "./Edit";
import Goback from "./Goback";
import Comments from "./Comments";
import { AdvancedFetch } from "@/utils/advancedfetch";
import Likes from "../cards/likes";

export default async function Details({ id }) {
  const { response } = await AdvancedFetch(`https://feedback.nazlisunay.com.tr/api/Opinions/${id}`);
  const data = response;
  const user = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/User/me");
  let userId;
  let realUserData;
  if(user.status !== 404){
    userId = await user.response.id
    const userData = await AdvancedFetch(`https://feedback.nazlisunay.com.tr/api/User/${userId}`);
    realUserData = userData.response
  }

  const allUserData = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/User/all")
  const realAllUserData =  allUserData ;
  console.log(realAllUserData)
 
  return (
    <>
      <div className="detailPage">
        <div className="headerDetail">
          <Goback />
          <Edit id={id} data={data} userId={userId}/>
        </div>
        <div key={data?.id} className="cardsContainer">
          <div className="leftcontentCard">
            <Likes voteCount={data?.voteCount} />
            <div className="content">
              <p className="title">{data?.title}</p>
              <p className="text">{data?.description}</p>
              <p className="categories">{data?.category}</p>
            </div>
          </div>
          <div className="commentBox">
            <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
            <p className="commentCount">{data?.comments.length}</p>
          </div>
        </div>
        <Comments realAllUserData={realAllUserData} data={data} userId={userId}/>
        <AddComment userId={userId} id={id}  />
      </div>
    </>
  );
}
