/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    defaultCommandTimeout: 15000,
    specPattern: "**/*.feature",
    experimentalWebKitSupport: true,
    experimentalRunAllSpecs: true,
    experimentalMemoryManagement: true,
    experimentalInteractiveRunEvents: true,
    numTestsKeptInMemory: 8,
  },

  // videoCompression: 15,
  // videoCompression: false,
  video: false,

  viewportWidth: 1280,
  viewportHeight: 780,
});
