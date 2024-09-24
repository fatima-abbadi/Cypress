/// <reference types="cypress" />
import HomePage from "./HomePage";

describe('My test', function() {
  before(function() {
    // Runs once before all tests in the block
    cy.fixture('Fatimadata').then((data) => {
      this.data = data; // Save fixture data to `this`
    });
  });

  it('My First test case', function() {
    const homePage = new HomePage();

    // Visit the website
    cy.visit('https://rahulshettyacademy.com/angularpractice/');

    // Fill out the form using the fixture data
    homePage.getNameInputField().type(this.data.name); // Use getNameInputField() correctly
    homePage.getGenderSelectDropdown().select(this.data.gender); // Use getGenderSelectDropdown() correctly

    // Clicking on the shop button
    homePage.getShopButton();

    // Selecting products from the fixture data
    if (Array.isArray(this.data.productName)) {
      this.data.productName.forEach((element) => {
        cy.selectProduct(element); // Custom function to select a product
      });
    } else {
      cy.log('No products found in productName array');
    }
  });
});

