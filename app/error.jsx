"use client";

export default function Error({ error }) {
  return <div>{error?.message || "Bİr hata oluştu"}</div>;
}
