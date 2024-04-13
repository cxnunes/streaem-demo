module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.spec.ts"],
    verbose: true,
    restoreMocks: true,
    transform: {
        "^.+\\.spec.ts$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.test.json"
            }
        ]
    }
};
