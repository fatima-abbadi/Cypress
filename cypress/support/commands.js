// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.js
Cypress.Commands.add('selectProduct', (productName) => {
    // Assuming the products are listed with a visible name on the page, adjust the selector as needed
    cy.get('h4.card-title') // Assuming the product name is in an h4 element with a class of "card-title"
      .each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
          // Click on the "Add to Cart" button for the corresponding product
          cy.get('button.btn.btn-info').eq(index).click();
        }
      });
  });
