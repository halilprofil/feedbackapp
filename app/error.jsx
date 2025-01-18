"use client";

export default function Error({ error }) {
  return <div>{error?.message || "Bir hata oluştu"}</div>;
}
