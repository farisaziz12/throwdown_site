import React from "react";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Metadata from "../components/Metadata";
import Timeline from "../components/Timeline";

export default function schedule() {
    return (
        <div className={styles.container}>
            <Metadata title={"Xmas Throwdown Schedule"} />
            <div style={{ zIndex: "1", width: "100vw" }}>
                <NavBar />
            </div>
            <main className={styles.main}>
                <h1 className={styles.fontandcenter}>Schedule</h1>

                <a
                    href="webcal://p27-caldav.icloud.com/published/2/MTA3MjYwMjc5ODEwNzI2MA9IJFarAqnTo7xa5pBvkRvGndO0stiLebpRdRahEJdG_TUdlADHB45OxCuXqdvIw7fmnIQnw_08rf_lrLBBDog"
                    target="_blank"
                >
                    <button type="button" className="btn btn-dark topspace">
                        Subscribe to the Event Calendar
                    </button>
                </a>
                <Timeline />
            </main>
            <Footer />
        </div>
    );
}
