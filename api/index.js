const fetch = require("node-fetch")

const getUser = (email) => {
    return fetch(`https://wod-with-faris-backend.herokuapp.com/user/getuser?email=${email}`)
                        .then(resp => resp.json())
}

const getMyTeam = (email) => {
    return fetch(`https://wod-with-faris-backend.herokuapp.com/team/my_team?email=${email}`)
    .then(resp => resp.json())
}

const getTeamAthletes = (id) => {
    const data =  fetch(`https://wod-with-faris-backend.herokuapp.com/team/get_team_athletes?id=${id}`)
            .then(resp => resp.json())
    return data.team
}

const joinTeam  = async (userEmail, teamID) => {
    const response = await fetch("https://wod-with-faris-backend.herokuapp.com/team/join_team", {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify({
                            email: userEmail,
                            team_id: teamID
                        })
                    }).then(resp => resp.json())
    if  (response.email){
        return response
    } else {
        throw new Error(response.message)
    }
}

const exitTeam = async (user, team, teamID) => {
    const response  = await fetch("https://wod-with-faris-backend.herokuapp.com/team/exit_team", {
                                method: "POST",
                                headers: {
                                    "Content-type": "application/json"
                                },
                                body: JSON.stringify({
                                    email: user.email,
                                    team_id: teamID
                                })
                            }).then(resp => resp.json())
    if (response.message === "Delete Success")
        return team.filter(athlete => athlete.id !== user.id)
    else {
        throw new Error(response.message)
    }
}

const signUpUser = async (userEmail, firstName, lastName) => {
    const response = await fetch("https://wod-with-faris-backend.herokuapp.com/user/create", {
                                method: "POST",
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    email: userEmail,
                                    first_name: firstName,
                                    last_name: lastName,
                                    tokens: 0,
                                    coach: false,
                                }),
                            })
                            .then((resp) => resp.json())
    if (response.email) {
        return response
    } else {
        throw new Error(response.message)
    }
}

const createNewTeam = async (teamName, teamCategory) => {
    const response = await fetch(`https://wod-with-faris-backend.herokuapp.com/team/create_team`, {
                                method: "POST",
                                headers: {
                                    "Content-type": "application/json"
                                },
                                body: JSON.stringify({
                                    name: teamName,
                                    category: teamCategory
                            })
                            })
                            .then(resp => resp.json())
    if (response){
        return true
    } else {
        throw new Error(response.message)
    }
}

const getAllTeams = () => {
    return fetch(`https://wod-with-faris-backend.herokuapp.com/team/all_teams`)
            .then(resp => resp.json())
}

const pushNotification = (title, message) => {
    fetch("https://api.pushover.net/1/messages.json", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token: process.env.NEXT_PUBLIC_PUSHOVER_PROJECT_KEY,
                        user: process.env.NEXT_PUBLIC_PUSHOVER_USER_KEY,
                        title: title,
                        message: message
                    })
    })
}

module.exports = {
    getUser,
    getMyTeam,
    getTeamAthletes,
    joinTeam,
    exitTeam,
    signUpUser,
    createNewTeam,
    getAllTeams,
    pushNotification
}