import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Empty from "@/components/empty/empty";
import CreateFeedback from "@/components/create/create";
import EditFeedback from "@/components/edit/edit";

export default function Home() {
  return (
    <>
    <Header></Header>
    <Empty/>
    <CreateFeedback/>
    <EditFeedback/>
    </>
  )
}
