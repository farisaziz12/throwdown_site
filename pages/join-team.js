import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Metadata from "../components/Metadata";
import TeamCard from "../components/TeamCard";
import { useAuth } from "../hooks/useAuth"

export default function joinTeam() {
    const auth = useAuth()
    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState(undefined)

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

   useEffect(() => {
    if (auth.user){
      fetch(`https://wod-with-faris-backend.herokuapp.com/user/getuser?email=${auth.user.email}`)
      .then(resp => resp.json()).then(data => {
        setCurrentUser(data)
      })
    }
  }, [auth])

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
            <div className="card-deck">
                {teams.map(team => (
                    <TeamCard user={currentUser} key={team.id} {...team}/>
                ))}
            </div>
        :
        <h1>No Teams</h1>
        }
      </main>
      <Footer />
    </div>
  );
}