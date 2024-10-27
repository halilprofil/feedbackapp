import Image from "next/image";
import Likes from "../cards/likes";
import RoadMapHeader from "./header";

export default function RoadMapsCards() {
    return (
        <>
            <RoadMapHeader />
            <div className="roadmap-container">

                <div className="card-colon">

                    <div className="title">
                        <p>Planned (2)</p>
                        <span>Ideas prioritized for research</span>
                    </div>

                    <div className="cards">
                        <p><Image src="/assets/OrangeDot" width={10} height={10}></Image>  Ideas prioritized for research</p>

                        <h4>More comprehensive reports</h4>
                        <p>It would be great to see a more detailed breakdown of solutions.</p>
                        <p>Feature</p>
                        <Likes />
                        <p>comment</p>
                    </div>



                </div>


                <div className="card-colon">

                    <div className="title">
                        <p>In-Progress (3)</p>
                        <span>Ideas prioritized for research</span>
                    </div>

                    <div className="cards">
                        <p><Image src="/assets/OrangeDot" width={10} height={10}></Image>  Ideas prioritized for research</p>

                        <h4>More comprehensive reports</h4>
                        <p>It would be great to see a more detailed breakdown of solutions.</p>
                        <p>Feature</p>
                        <Likes />
                        <p>comment</p>
                    </div>

                </div>

                <div className="card-colon">

                    <div className="title">
                        <p>Live (1)</p>
                        <span>Ideas prioritized for research</span>
                    </div>

                    <div className="cards">
                        <p><Image src="/assets/OrangeDot" width={10} height={10}></Image>  Ideas prioritized for research</p>
                        <h4>More comprehensive reports</h4>
                        <p>It would be great to see a more detailed breakdown of solutions.</p>
                        <p>Feature</p>
                        <Likes />
                        <p>comment</p>
                    </div>


                </div>


            </div>
        </>

    )
}