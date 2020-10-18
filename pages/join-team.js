import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Metadata from "../components/Metadata";

export default function joinTeam() {
    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       fetch(`https://wod-with-faris-backend.herokuapp.com/team/all_teams`)
      .then(resp => resp.json())
      .then(teams => {
          setLoading(false)
          setTeams(teams)
       })
      .catch(err => {
           setLoading(false)
          console.log(err)
       })
   }, [])

  return (
    <div className={styles.container}>
      <Metadata title={"Xmas Throwdown Team"} />
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.fontandcenter}>Join Team</h1>
        {loading?
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        :
        teams[0]?
        teams.map(team => (
            <button key={team.id} type="button" className="btn btn-primary">{team.name}</button>
        ))
        :
        <h1>No Teams</h1>
        }
      </main>
      <Footer />
    </div>
  );
}