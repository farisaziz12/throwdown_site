import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Metadata from "../components/Metadata";
import InfoCard from "../components/InfoCard";
import countdown from "countdown";
import FAQ from "../components/FAQ";
import { content } from "../content/categories";
import { categories } from "../content/FAQs";

export default function Home() {
  const { ludicrous, spicy, fun } = content;
  const [countdownTimer, setCountdownTimer] = useState(
    countdown(new Date(2020, 12, 5)).toString()
  );

  useEffect(() => {
    setInterval(() => {
      const timer = countdown(new Date(2020, 12, 5)).toString();
      setCountdownTimer(timer);
    }, 1000);
  }, []);

  return (
    <div className={styles.container}>
      <Metadata title={"Xmas Throwdown"} />
      <NavBar />
      <main className={styles.main}>
        <div>
          <img
            alt="antidote-logo"
            className="big-logo center-item"
            src="/images/antidote_logo.png"
          />
          <h1 className={styles.title}>Xmas Throwdown</h1>
          <p className={styles.header}>
            <strong>
              A fun mixed team competition to celebrate fitness and christmas
            </strong>
          </p>

          <div className={styles.fontandcenter}>
            <h2>Countdown till 05.12.2020</h2>
            <h3>{countdownTimer}</h3>
          </div>

          <div className="topspace">
            <h2 className={styles.fontandcenter}>Categories</h2>
            <div className="card-deck">
              <InfoCard content={ludicrous} />
              <InfoCard content={spicy} />
              <InfoCard content={fun} />
            </div>
          </div>
          <div className="topspace">
            <h2 className={styles.fontandcenter}>FAQ</h2>
            <FAQ FAQs={categories} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
