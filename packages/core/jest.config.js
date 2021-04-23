module.exports = {
    roots: ["src"],
    forceExit: true,
    verbose: true,
    testMatch: [
        '**/*.test.(ts|tsx|js|jsx)',
        '**/*.spec.(ts|tsx|js|jsx)',
        '**/*.it.(ts|tsx|js|jsx)',
        '**/*.e2e.(ts|tsx|js|jsx)',
    ],
    setupFilesAfterEnv: ['jest-extended',"./jest.setup.ts"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    testPathIgnorePatterns: ["node_modules/"],
    moduleDirectories: ["node_modules", "src"],
    preset: 'ts-jest',
    testEnvironment: "node",
    transform: {
        "^.+\\.(js|ts|tsx)$": "ts-jest"
    },

    /*moduleNameMapper: {
        // Mocks out all these file formats when tests are run.
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "identity-obj-proxy",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },*/

};
