import React from "react";
import styles from "../../styles/Home.module.css";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Metadata from "../../components/Metadata";

export default function event3() {
  return (
    <div className={styles.container}>
      <Metadata title={"Xmas Throwdown Event 3"} />
      <NavBar />
      <main className={styles.main}>
        <h1>Event 3</h1>
      </main>
      <Footer />
    </div>
  );
}
