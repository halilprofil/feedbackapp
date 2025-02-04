"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Filter from "./filter";
import Roadmap from "./Roadmap";
import Image from "next/image";

export default function MiniSidebar({ statusPlanned, statusProgress, statusLive }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleLinkClick() {
    setIsOpen(false);
  }
  return (
    <>
      {/* Açma Butonu */}
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className={styles.toggleButton}>
          <Image width={18} height={18} src="/assets/hamburger.svg" alt="hamburger"/>
        </button>
      )}

      {/* Sidebar */}
      <div className={`${styles.miniSidebar} ${isOpen ? styles.open : ""}`}>
        {/* Kapatma Butonu */}
        <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
          X
        </button>
        {/* İçerik */}
        <div className={styles.miniSidebarInner}>
          <Filter handleLinkClick={handleLinkClick} usage="sidebar" />
          <Roadmap usage="sidebar" statusPlanned={statusPlanned} statusProgress={statusProgress} statusLive={statusLive} />
        </div>
      </div>
    </>
  );
}
