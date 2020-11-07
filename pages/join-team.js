import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Metadata from "../components/Metadata";
import TeamCard from "../components/TeamCard";
import { useAuth } from "../hooks/useAuth"
import { getAllTeams, getUser } from "../api"

export default function joinTeam() {
    const auth = useAuth()
    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => {
        try {
            (async () => {
                const teams = await getAllTeams()
                setLoading(false)
                setTeams(teams)
            })()
        } catch (error) {
            setLoading(false)
            console.error(error)
        }
    }, [])

    useEffect(() => {
        if (auth.user){
            (async () => {
                const user = await getUser(auth.user.email)
                setCurrentUser(user)
            })()
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
                <div className="row">
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