import React, { useState, useEffect } from 'react'
import PopPop from "react-poppop";
import { capitalize } from "../functions"
import Avatar from '@material-ui/core/Avatar';

export default function TeamCard(props) {
    const { id, name, category, user } = props
    const [team, setTeam] = useState([])
    const [showModal, setShowModal] = useState(false);

    const toggleShow = (show) => {
        setShowModal(show);
    };

    useEffect(() => {
        fetch(`https://wod-with-faris-backend.herokuapp.com/team/get_team_athletes?id=${id}`)
        .then(resp => resp.json())
        .then(data => setTeam(data.team))
        .catch(err => console.log(err))
    }, [])

    const handleJoinTeam = () => {
        fetch(`https://wod-with-faris-backend.herokuapp.com/team/join_team`, {
            method: "POST",
            headers: { 
              "Content-type": "application/json"
            },
            body: JSON.stringify({ 
              email: user.email,
              team_id: id
          })
          }).then(resp => resp.json())
          .then(() => setTeam([...team, user]))
          .catch(err => console.log(err))
    }

    return (
        <>
            <div className="card text-white bg-dark mb-3" style={{minWidth: "18rem"}}>
                <div className="card-header" style={{opacity: "0.8"}}>Category: {capitalize(category)}</div>
                <div className="card-body">
                    <h5 className="card-title default-font">"{name}"</h5>
                    <div>
                        {team?
                        <div style={{display: "inline-flex", justifyContent: "center"}}>
                            {team.map(athlete => (
                                <Avatar key={athlete.id} style={{marginLeft: "3%"}} alt="Athlete" src={athlete.image? athlete.image : "/images/profile_pic.jpeg" } />
                            ))}
                        </div>
                        :
                            <h5 className="text-align">No Athletes</h5>
                        }
                    </div>
                    <button type="button" style={{display: "block", marginRight: "auto", marginLeft: "auto"}} onClick={() => toggleShow(true)} className="btn btn-success">Join</button>
                </div>
            </div>
            <PopPop
            position="centerCenter"
            open={showModal}
            closeBtn={true}
            closeOnEsc={true}
            onClose={() => toggleShow(false)}
            closeOnOverlay={true}
            >
                <div className="more-info-modal">
                <h1 className="text-align default-font">"{name}"</h1>
                <div>
                    {team?
                    <>
                        <h3 className="text-align default-font">Athletes:</h3>
                        <div>
                            {team.map(athlete => (
                                <div style={{display: "flex", justifyContent: "center", marginBottom: "2%"}}>
                                    <Avatar key={athlete.id} style={{marginRight: "3%"}} alt="Athlete" src={athlete.image? athlete.image : "/images/profile_pic.jpeg" } /><p style={{marginTop: "2%"}} className="default-font">{athlete.first_name + " " + athlete.last_name}</p>
                                </div>
                            ))}
                        </div>
                    </>
                    :
                        <h5 className="text-align">No Athletes</h5>
                    }
                    <button type="button" style={{display: "block", marginRight: "auto", marginLeft: "auto"}} onClick={handleJoinTeam} disabled={team.length === 4} className="btn btn-success topspace">{team.length === 4? "Team Full" : "Join Team"}</button>
                </div>
                </div>
            </PopPop>
        </>
    )
}
