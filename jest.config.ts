/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",

  // Automatically reset mock state before every test
  resetMocks: true,

  // Automatically restore mock state and implementation before every test
  restoreMocks: true,

  // The test environment that will be used for testing
  testEnvironment: "jsdom",
};
