import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Metadata from "../components/Metadata";
import { app } from "../config/firebase";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";

export default function profile({user}) {
    // const [currentUser, setCurrentUser] = useState(undefined);
  const auth = useAuth();
  const router = useRouter();

  profile.getInitialProps = async () => {
    return { user: auth.user };
  };

  // useEffect(() => {
  //   setCurrentUser(user)
  // }, [user]);

  // console.log(currentUser)

  if (user) {
    return (
      <div className={styles.container}>
        <Metadata title={"Xmas Throwdown Profile"} />
        <NavBar />
        <main className={styles.main}>
          <h1 className={styles.fontandcenter}>Profile</h1>
        </main>
        <Footer />
      </div>
    );
  } else {
    if (typeof window !== "undefined" && !user) {
      router.push("/login");
    }
    return (
      <div className={styles.container}>
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}
