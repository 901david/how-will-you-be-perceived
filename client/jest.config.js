module.export = {
  roots: ["<rootDir>/src"],
  transform: {
    "\\.(ts|tsx)?$": "babel-jest"
  },
  testMatch: ["<rootDir>/src/**/>(*.)test.{ts, tsx}"], // finds test
  moduleFileExtensions: ["json", "ts", "tsx"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "@testing-library/react/cleanup-after-each",
    "<rootDir>/src/setupTests.js"
  ] // setupFiles before the tests are ran
};
