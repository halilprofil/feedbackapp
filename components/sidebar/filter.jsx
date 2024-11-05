"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Filter({ data }) {
  const router = useRouter();

  function handleAllBtn() {
    router.push("/");
  }

  return (
    <div className="filterBox">
      <button onClick={handleAllBtn}>All</button>
      <Link href={"/filtered/UI"}><button>UI</button></Link> 
      <Link href={"/filtered/UX"}><button>UX</button></Link>
      <Link href={"/filtered/Enhancement"}><button>Enhancement</button></Link>
      <Link href={"/filtered/Bug"}><button>Bug</button></Link>
      <Link href={"/filtered/Feature"}><button>Feature</button></Link>
    </div>
  );
}
