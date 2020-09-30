import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Homepage from "../components/Homepage";
import Footer from "../components/Footer";
import Metadata from "../components/Metadata";

export default function Home() {
  return (
    <div className={styles.container}>
      <Metadata title={"Xmas Throwdown"} />
      <NavBar />
      <main className={styles.main}>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}
