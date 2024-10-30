"use client";

import Image from "next/image";

export default function Roadmap() {
  return (
    <div className="roadmap">
      <div className="roadmapHeader">
        <h1>Roadmap</h1>
        <button>View</button>
      </div>
      <div className="roadmapCategoriesBox">
        <div className="flexbox">
          <div className="miniflex">
            <Image width={8} height={8} src="/assets/OrangeDot.svg" alt="" />
            <p className="roadmapCategory">Planned</p>
          </div>
          <p className="roadmapNumber">2</p>
        </div>
        <div className="flexbox">
          <div className="miniflex">
            <Image width={8} height={8} src="/assets/PurpleDot.svg" alt="" />
            <p className="roadmapCategory">In-Progress</p>
          </div>
          <p className="roadmapNumber">3</p>
        </div>
        <div className="flexbox">
          <div className="miniflex">
            <Image width={8} height={8} src="/assets/BlueDot.svg" alt="" />
            <p className="roadmapCategory">Live</p>
          </div>
          <p className="roadmapNumber">1</p>
        </div>
      </div>
    </div>
  );
}
