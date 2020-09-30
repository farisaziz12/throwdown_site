import React from "react";
import styles from "../../styles/Home.module.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Metadata from "../../components/Metadata";

export default function event2() {
  return (
    <div className={styles.container}>
      <Metadata title={"Xmas Throwdown Event 2"} />
      <NavBar />
      <main className={styles.main}>
        <h1>Event 2</h1>
      </main>
      <Footer />
    </div>
  );
}
