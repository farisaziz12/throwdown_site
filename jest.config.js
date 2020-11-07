// Ignores node_modules and .next directories when testing
module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    transform: {
        "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    },
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
    },
    verbose: true,
};
