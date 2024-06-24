import { defineConfig } from "cypress";
// Remove this import since it is not used directly in the file
// import cucumber from 'cypress-cucumber-preprocessor';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "**/*.feature",
    supportFile: "cypress/support/e2e.ts",
  },
});
