describe('Verify Test Cases Page', () => {
    it('Verify Test Cases Page', () => {
        // Step 1: Launch browser
        // Cypress automatically launches the browser

        // Step 2: Navigate to url 'http://automationexercise.com'
        cy.visit('http://automationexercise.com');

        // Step 3: Verify that home page is visible successfully
        cy.url().should('include', 'automationexercise');

        // Step 4: Click on 'Test Cases' button
        cy.contains('Test Cases').click();

        cy.get('#form > div > div.row > div > h2').should('contain', 'Test Cases');

        // Step 5: Verify user is navigated to test cases page successfully
        cy.url().should('include', 'test_cases');
    });
});
