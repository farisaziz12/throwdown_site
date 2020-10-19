import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Avatar from '@material-ui/core/Avatar';

const centerStyle = {display: "block", marginLeft: "auto", marginRight: "auto"}

export default function Team(props) {
    const {user} = props
    const [team, setTeam] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
         fetch(`https://wod-with-faris-backend.herokuapp.com/team/my_team?email=${user.email}`)
       .then(resp => resp.json())
       .then(team => {
           setLoading(false)
           setTeam(team)
        })
       .catch(err => {
            setLoading(false)
           console.log(err)
        })
    }, [])

    return (
        <div >
            {loading?
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                :
                !team[0]?
                <>
                    <Link href="/create-team">
                        <button type="button" style={centerStyle} className="btn btn-primary">Create Team</button> 
                    </Link>
                    <h3 className={styles.fontandcenter}>-OR-</h3>
                    <Link href="/join-team">
                        <button type="button" style={centerStyle} className="btn btn-primary">Join Team</button> 
                    </Link>
                </>
                :
                <>
                    <div style={{display: "inline-flex", justifyContent: "center"}}>
                        {team.map(athlete => (
                            <Avatar key={athlete.id} style={{marginLeft: "3%"}} alt="Athlete" src={athlete.image? athlete.image : "/images/profile_pic.jpeg" } />
                        ))}
                    </div>
                </>
            }
        </div>
    )
}
