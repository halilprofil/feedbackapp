import Image from "next/image";
import Likes from "../cards/likes";
import RoadMapHeader from "./header";
import Link from "next/link";

export default function RoadMapsCards({ statusPlanned, statusProgress, statusLive }) {
  return (
    <>
      <RoadMapHeader />
      <div className="roadmap-container">
        {/* Planned Column */}
        <div className="card-colon">
          <div className="title">
            <p>Planned ({statusPlanned.length})</p>
            <span>Ideas prioritized for research</span>
          </div>

          {statusPlanned.map((x) => (
            <Link key={x.id} href={`detail/${x.id}`}>
              <div className="cards">
                <p>
                  <Image src="/assets/OrangeDot" width={10} height={10} alt="Orange Dot" /> Ideas prioritized for research
                </p>
                <h4>{x.title}</h4>
                <p>{x.description}</p>
                <p>{x.category}</p>
                <Likes />
                <div className="commentBox">
                  <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
                  <p className="commentCount">{x.comment || 0}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* In-Progress Column */}
        <div className="card-colon">
          <div className="title">
            <p>In-Progress ({statusProgress.length})</p>
            <span>Currently being developed</span>
          </div>

          {statusProgress.map((x) => (
            <Link key={x.id} href={`detail/${x.id}`}>
              <div className="cards">
                <p>
                  <Image src="/assets/PurpleDot" width={10} height={10} alt="Purple Dot" /> Currently being developed
                </p>
                <h4>{x.title}</h4>
                <p>{x.description}</p>
                <p>{x.category}</p>
                <Likes />
                <div className="commentBox">
                  <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
                  <p className="commentCount">{x.comment || 0}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Live Column */}
        <div className="card-colon">
          <div className="title">
            <p>Live ({statusLive.length})</p>
            <span>Released features</span>
          </div>

          {statusLive.map((x) => (
            <Link key={x.id} href={`detail/${x.id}`}>
              <div className="cards">
                <p>
                  <Image src="/assets/BlueDot" width={10} height={10} alt="Blue Dot" /> Released features
                </p>
                <h4>{x.title}</h4>
                <p>{x.description}</p>
                <p>{x.category}</p>
                <Likes />
                <div className="commentBox">
                  <Image width={18} height={18} src="/assets/comment-icon.svg" alt="commentIcon" />
                  <p className="commentCount">{x.comment || 0}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
