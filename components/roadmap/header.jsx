import Goback from "../details/Goback";
import AddFeedBackBtn from "../header/button";
import "./roadmap.css"

export default function RoadMapHeader(){
    return(
        
        <>
            <div className="header-container">
                <div className="right-content">
                 <Goback/>
                 <h3>Roadmap</h3>
                </div>
                <AddFeedBackBtn/>
            </div>
        </>

    )
}