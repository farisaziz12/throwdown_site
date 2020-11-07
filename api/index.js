const fetch = require("node-fetch");

const getUser = (email) => {
    return fetch(
        `https://wod-with-faris-backend.herokuapp.com/user/getuser?email=${email}`
    ).then((resp) => resp.json());
};

const getMyTeam = (email) => {
    return fetch(
        `https://wod-with-faris-backend.herokuapp.com/team/my_team?email=${email}`
    ).then((resp) => resp.json());
};

const getTeamAthletes = async (id) => {
    const response = await fetch(
        `https://wod-with-faris-backend.herokuapp.com/team/get_team_athletes?id=${id}`
    ).then((resp) => resp.json());
    if (response.team) {
        return response.team;
    } else {
        throw new Error(response.message);
    }
};

const joinTeam = async (userEmail, teamID) => {
    const response = await fetch(
        "https://wod-with-faris-backend.herokuapp.com/team/join_team",
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email: userEmail,
                team_id: teamID,
            }),
        }
    ).then((resp) => resp.json());
    if (response.email) {
        return response;
    } else {
        throw new Error(response.message);
    }
};

const exitTeam = async (user, team, teamID) => {
    const response = await fetch(
        "https://wod-with-faris-backend.herokuapp.com/team/exit_team",
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email: user.email,
                team_id: teamID,
            }),
        }
    ).then((resp) => resp.json());
    if (response.message === "Delete Success")
        return team.filter((athlete) => athlete.id !== user.id);
    else {
        throw new Error(response.message);
    }
};

const signUpUser = async (userEmail, firstName, lastName) => {
    const response = await fetch(
        "https://wod-with-faris-backend.herokuapp.com/user/create",
        {
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
        }
    ).then((resp) => resp.json());
    if (response.email) {
        return response;
    } else {
        throw new Error(response.message);
    }
};

const createNewTeam = async (teamName, teamCategory) => {
    const response = await fetch(
        `https://wod-with-faris-backend.herokuapp.com/team/create_team`,
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name: teamName,
                category: teamCategory,
            }),
        }
    ).then((resp) => resp.json());
    if (response) {
        return response;
    } else {
        throw new Error(response.message);
    }
};

const getAllTeams = () => {
    return fetch(
        `https://wod-with-faris-backend.herokuapp.com/team/all_teams`
    ).then((resp) => resp.json());
};

const deleteTeam = async (id) => {
    const deletedTeam = await fetch(
        "https://wod-with-faris-backend.herokuapp.com/team/delete_team/" + id,
        {
            method: "DELETE",
        }
    ).then((resp) => resp.json());

    if (deletedTeam) {
        return deletedTeam;
    } else {
        throw new Error("Delete Failed");
    }
};

const deleteUser = async (id) => {
    const deletedUser = await fetch(
        "https://wod-with-faris-backend.herokuapp.com/user/delete/" + id,
        {
            method: "DELETE",
        }
    ).then((resp) => resp.json());

    if (deletedUser) {
        return deletedUser;
    } else {
        throw new Error("Delete Failed");
    }
};

const pushNotification = async (title, message) => {
    const response = await fetch("https://api.pushover.net/1/messages.json", {
        method: "POST",
        redirect: "follow",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token: process.env.NEXT_PUBLIC_PUSHOVER_PROJECT_KEY,
            user: process.env.NEXT_PUBLIC_PUSHOVER_USER_KEY,
            title: title,
            message: message,
        }),
    });
    if (response.status === 200) {
        return true;
    } else {
        return false;
    }
};

module.exports = {
    getUser,
    getMyTeam,
    getTeamAthletes,
    joinTeam,
    exitTeam,
    signUpUser,
    createNewTeam,
    getAllTeams,
    deleteTeam,
    deleteUser,
    pushNotification,
};
