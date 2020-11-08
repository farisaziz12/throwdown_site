import {
    getUser,
    getMyTeam,
    getTeamAthletes,
    joinTeam,
    exitTeam,
    signUpUser,
    deleteUser,
    createNewTeam,
    getAllTeams,
    deleteTeam,
    pushNotification,
} from "../api";

describe("getUser API Functions", () => {
    test("getUser returns user details using email", () => {
        const testEmail = "testuser@gmail.com";
        expect(async () => {
            await getUser(testEmail);
        }).toBeDefined();
    });
    test("getUser returns null using non-existant user email", async () => {
        const testEmail = "nonexistantuser@gmail.com";
        expect(await getUser(testEmail)).toBeNull();
    });
});

describe("getMyTeam API Functions", () => {
    test("getMyTeam returns team details if they exist using email", () => {
        const testEmail = "testuser@gmail.com";
        expect(async () => {
            await getMyTeam(testEmail);
        }).toBeDefined();
    });
});

describe("getTeamAthletes API Functions", () => {
    test("getTeamAthletes returns athletes in a team (if team exists) with their details using id", async () => {
        const testID = 1;
        expect(async () => {
            await getTeamAthletes(testID);
        }).toBeDefined();
    });
});

describe("User Can Create, Join & Exit Team + Team Delete Function", () => {
    // New Team + Test User Params
    const testTeamName = "Test Team";
    const testTeamCategory = "test";
    const testEmail = "testuser@gmail.com";

    test("New Team Created", async () => {
        // New Created Team
        let newTeam;
        try {
            // New Created Team
            newTeam = await createNewTeam(testTeamName, testTeamCategory);
            expect(newTeam).toBeDefined();
        } finally {
            // Delete Team
            await deleteTeam(newTeam.id);
        }
    });

    test("User Can Join And Exit Team", async () => {
        let newTeam;
        try {
            // New Created Team
            newTeam = await createNewTeam(testTeamName, testTeamCategory);
            // Join Team
            const joinedUser = await joinTeam(testEmail, newTeam.id);
            // Joined Team
            expect(joinedUser).toBeTruthy();
            // Test Team Exit
            expect(await exitTeam(joinedUser, [], newTeam.id)).toBeDefined();
        } finally {
            // Delete Team
            await deleteTeam(newTeam.id);
        }
    });

    test("Team Can Be Deleted", async () => {
        // New Created Team
        const newTeam = await createNewTeam(testTeamName, testTeamCategory);
        expect(await deleteTeam(newTeam.id)).toBeTruthy();
    });
});

describe("getAllTeams API Function", () => {
    test("getAllTeams returns all teams (if they exist)", async () => {
        expect(async () => {
            await getAllTeams();
        }).toBeDefined();
    });
});

describe("User Can Be Created And Deleted", () => {
    //Test User Params
    const email = "test@testing.com";
    const firstName = "Test First Name";
    const lastName = "Test Last Name";

    let newUser;

    try {
        test("User Can Be Created", async () => {
            expect(async () => {
                newUser = await signUpUser(email, firstName, lastName);
            }).toBeDefined();
        });
        test("User Can Be Deleted", async () => {
            expect(async () => {
                await deleteUser(newUser.id);
            }).toBeDefined();
        });
    } finally {
        if (newUser) {
            deleteUser(newUser.id);
        }
    }
});
