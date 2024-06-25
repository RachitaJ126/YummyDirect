import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
require("cypress-xpath");
Cypress.on("uncaught:exception", (err, runnable) => false);

When("user clicks the button", () => {});
Then("user is on the login page", () => {});
Given("user browse the application", () => {
  cy.visit("https://www.google.com");
});
