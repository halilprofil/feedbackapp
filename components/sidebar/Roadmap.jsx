"use client";
import Image from "next/image";
import Link from "next/link";

export default function Roadmap({ statusPlanned, statusProgress, statusLive }) {
  console.log("Roadmap", statusPlanned, statusProgress);
  return (
    <div className="roadmap">
      <div className="roadmapHeader">
        <h1>Roadmap</h1>
        <Link href={"/roadmap"}>
          <button>view</button>
        </Link>
      </div>
      <div className="roadmapCategoriesBox">
        <div className="flexbox">
          <div className="miniflex">
            <Image width={8} height={8} src="/assets/OrangeDot.svg" alt="" />
            <p className="roadmapCategory">Planned</p>
          </div>
          <p className="roadmapNumber">{statusPlanned.length}</p>
        </div>
        <div className="flexbox">
          <div className="miniflex">
            <Image width={8} height={8} src="/assets/PurpleDot.svg" alt="" />
            <p className="roadmapCategory">In-Progress</p>
          </div>
          <p className="roadmapNumber">{statusProgress.length}</p>
        </div>
        <div className="flexbox">
          <div className="miniflex">
            <Image width={8} height={8} src="/assets/BlueDot.svg" alt="" />
            <p className="roadmapCategory">Live</p>
          </div>
          <p className="roadmapNumber">{statusLive.length}</p>
        </div>
      </div>
    </div>
  );
}
