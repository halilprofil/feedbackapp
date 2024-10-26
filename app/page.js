import Image from "next/image";
import styles from "./page.module.css";
import Cards from "@/components/cards/cards";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Cards />
    </>
  );
}
