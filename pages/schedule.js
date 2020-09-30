import React from "react";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Metadata from "../components/Metadata";

export default function schedule() {
  return (
    <div className={styles.container}>
      <Metadata title={"Xmas Throwdown Schedule"} />
      <NavBar />
      <main className={styles.main}>
        <h1>Schedule</h1>
      </main>
      <Footer />
    </div>
  );
}
