import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import { capitalize } from '../functions';
import { createNewTeam } from "../api"
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Metadata from "../components/Metadata";


export default function createTeam() {
    const [teamName, setTeamName] = useState("")
    const [teamCategory, setTeamCategory] = useState("")
    const router = useRouter()

    const submitTeam = (e) => {
        e.preventDefault()

        const teamCreated = createNewTeam(teamName, teamCategory)

        if (teamCreated){
        router.push("/join-team")
        }
    }

    const handleTeamNameChange = (e) => {
        // Capitalizes beginning of each word
        const name = capitalize(e.target.value)
        setTeamName(name)
    }

    const handleSelectCategory = (e) => {
        setTeamCategory(e.target.value)
    }

    return (
    <div className={styles.container}>
        <Metadata title={"Xmas Throwdown Team"} />
        <NavBar />
        <main className={styles.main}>
        <h1 className={styles.fontandcenter}>Create Team</h1>
        <form onSubmit={submitTeam}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Team Name</label>
                <input type="text" value={teamName} onChange={handleTeamNameChange} className={"form-control"} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div  className="input-group mb-3 topspace">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
                    </div>
                    <select value={teamCategory} onChange={handleSelectCategory} className="custom-select" id="inputGroupSelect01">
                        <option value="">Choose...</option>
                        <option value="ludicrous">Ludicrous</option>
                        <option value="spicy">Spicy</option>
                        <option value="fun">Fun</option>
                    </select>
                </div>
            </div>
            <button disabled={!teamName || !teamCategory} type="submit" className="btn btn-primary">Submit</button>
        </form>
        </main>
        <Footer />
    </div>
    );
}
