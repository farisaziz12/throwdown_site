import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Metadata from "../components/Metadata";

export default function createTeam() {
    const [teamName, setTeamName] = useState("")
    const router = useRouter()

    const submitTeamName = (e) => {
      e.preventDefault()
      fetch(`https://wod-with-faris-backend.herokuapp.com/team/create_team`, {
        method: "POST",
        headers: { 
          "Content-type": "application/json"
        },
        body: JSON.stringify({ 
          name: teamName
      })
      })
      .then(resp => resp.json())
      .then(resp => console.log(resp))
      .then(() => router.push("/join-team"))
      .catch(err => {
          console.log(err)
       })
    }

    const handleTeamNameChange = (e) => {
        // Capitalizes beginning of each word
        const name = e.target.value.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
        setTeamName(name)
    }

  return (
    <div className={styles.container}>
      <Metadata title={"Xmas Throwdown Team"} />
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.fontandcenter}>Create Team</h1>
        <form onSubmit={submitTeamName}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Team Name</label>
                <input type="text" value={teamName} onChange={handleTeamNameChange} className={"form-control"} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <button disabled={!teamName} type="submit" className="btn btn-primary">Submit</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
