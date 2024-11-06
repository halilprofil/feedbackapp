"use client";

import { useRouter } from "next/navigation";

export default function Goback() {
  const router = useRouter();

  function handleGoBackBtn(){
    router.push("/");

  }
  return (
    <button onClick={handleGoBackBtn} className="goback">
      <p>{"<"}</p>
      <h6>Go Back</h6>
    </button>
  );
}
