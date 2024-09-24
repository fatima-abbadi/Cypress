
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jgq25d",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },specPattern: 'cypress/Integration/Example/Test1.js'
  },

});
