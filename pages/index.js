import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Xmas Throwdown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Xmas Throwdown</h1>
        <h3>Coming Soon...</h3>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://antidote-gym.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Antidote
        </a>
      </footer>
    </div>
  );
}
