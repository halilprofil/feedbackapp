"use client";

import Image from "next/image";
import { useState } from "react";

export default function Filter() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="filter">
        <button onClick={() => setShowModal(true)}>
          <p>Sort by : Most Upvotes</p>
          <Image src="/assets/buttonfilter.svg" alt="Figure illustration" width={10} height={10} />
        </button>
      </div>

      <dialog className="filtersortby" open={false}>
        <ul>
          <li onClick={() => setShowModal(false)}>Most Upvotes</li>
          <li onClick={() => setShowModal(false)}>Least Upvotes</li>
          <li onClick={() => setShowModal(false)}>Most Comments</li>
          <li onClick={() => setShowModal(false)}>Least Comments</li>
        </ul>
      </dialog>
    </>
  );
}
