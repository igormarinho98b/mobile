/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],


};
