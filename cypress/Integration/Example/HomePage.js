class HomePage {
    // Method to get the first input field
    getNameInputField() {
      return cy.get('.form-control').first();
    }
  
    // Method to get the select dropdown
    getGenderSelectDropdown() {
      return cy.get('select');
    }
  
    getShopButton() {
      cy.get('a.nav-link[href="/angularpractice/shop"]', { timeout: 10000 }).should('exist').click();
    }
  
   
  }
  
  export default HomePage; // This class will be available for import in other test files
  