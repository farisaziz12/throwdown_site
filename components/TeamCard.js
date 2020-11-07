import React, { useState, useEffect } from "react";
import PopPop from "react-poppop";
import { capitalize } from "../functions";
import { getTeamAthletes, joinTeam, exitTeam } from "../api";
import Avatar from "@material-ui/core/Avatar";

export default function TeamCard(props) {
    const { id, name, category, user } = props;
    const [team, setTeam] = useState([]);
    const [myTeam, setMyTeam] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        try {
            (async () => {
                const teamAthletes = await getTeamAthletes(id);
                setTeam(teamAthletes ? teamAthletes : []);
            })();
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        if (team[0] && user) {
            const isMyTeam = team.filter((athlete) => athlete.id === user.id);
            setMyTeam(!!isMyTeam);
        } else {
            setMyTeam(false);
        }
    }, [team, user]);

    const toggleShow = (show) => {
        setShowModal(show);
    };

    const handleJoinTeam = async () => {
        try {
            const joinedUser = await joinTeam(user.email, id);
            setTeam([...team, joinedUser]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleExitTeam = async () => {
        try {
            const updatedTeam = await exitTeam(user, team, id);
            if (updatedTeam) {
                setTeam(updatedTeam);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div
                className="card text-white bg-dark mb-3"
                style={{ minWidth: "18rem" }}
            >
                <div className="card-header" style={{ opacity: "0.8" }}>
                    Category: {capitalize(category)}
                </div>
                <div className="card-body">
                    <h5 className="card-title default-font">"{name}"</h5>
                    <div>
                        {team ? (
                            <div
                                style={{
                                    display: "inline-flex",
                                    justifyContent: "center",
                                }}
                            >
                                {team.map((athlete) => (
                                    <Avatar
                                        key={athlete.id}
                                        style={{ marginLeft: "3%" }}
                                        alt="Athlete"
                                        src={
                                            athlete.image
                                                ? athlete.image
                                                : "/images/profile_pic.jpeg"
                                        }
                                    />
                                ))}
                            </div>
                        ) : (
                            <h5 className="text-align">No Athletes</h5>
                        )}
                    </div>
                    <button
                        type="button"
                        style={{
                            display: "block",
                            marginRight: "auto",
                            marginLeft: "auto",
                        }}
                        onClick={() => toggleShow(true)}
                        className="btn btn-success"
                    >
                        Join
                    </button>
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
                        {team ? (
                            <>
                                <h3 className="text-align default-font">
                                    Athletes:
                                </h3>
                                <div>
                                    {team.map((athlete) => (
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                marginBottom: "2%",
                                            }}
                                        >
                                            <Avatar
                                                key={athlete.id}
                                                style={{ marginRight: "3%" }}
                                                alt="Athlete"
                                                src={
                                                    athlete.image
                                                        ? athlete.image
                                                        : "/images/profile_pic.jpeg"
                                                }
                                            />
                                            <p
                                                style={{ marginTop: "2%" }}
                                                className="default-font"
                                            >
                                                {athlete.first_name +
                                                    " " +
                                                    athlete.last_name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <h5 className="text-align">No Athletes</h5>
                        )}
                        {myTeam ? (
                            <button
                                type="button"
                                style={{
                                    display: "block",
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                }}
                                onClick={handleExitTeam}
                                className="btn btn-success topspace"
                            >
                                Exit Team
                            </button>
                        ) : (
                            <button
                                type="button"
                                style={{
                                    display: "block",
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                }}
                                onClick={handleJoinTeam}
                                disabled={team.length === 4}
                                className="btn btn-success topspace"
                            >
                                {team.length === 4 ? "Team Full" : "Join Team"}
                            </button>
                        )}
                    </div>
                </div>
            </PopPop>
        </>
    );
}
