"use client"

import Image from "next/image"

export default function Filter() {

    return (
    <>
       <div className="filter">
         <p>Sort by : Most Upvotes</p>
         <button><Image src="/assets/buttonfilter.svg" alt="Figure illustration" width={10} height={10} /></button>
       </div>
    </>)

}