import Image from "next/image";
import Header from "../header/header";
import AddFeedBackBtn from "../header/button";
import "./empty.css"


export default function Empty(){
    return(
        <>
       <div className="empty-container">
        <div className="empty-context">
            <Image src="/assets/dedective.png" width={130} height={130}></Image>
            <div>
                <h3>There is no feedback yet.</h3>
                <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            </div>

            <AddFeedBackBtn/>


        </div>

       </div>

        </>
    )
}