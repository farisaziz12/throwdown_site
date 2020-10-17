import React from "react";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Metadata from "../components/Metadata";

export default function about() {
  return (
    <div className={styles.container}>
      <Metadata title={"Xmas Throwdown About"} />
      <NavBar />
      <main className={styles.main}>
        <h1>About</h1>
      </main>
      <Footer />
    </div>
  );
}
