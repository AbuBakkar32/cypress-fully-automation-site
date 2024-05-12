describe('Test Case 10: Verify Subscription in home page', () => {
    it('Verify Subscription in home page', () => {
        // Step 1: Launch browser
        // Cypress automatically launches the browser

        // Step 2: Navigate to url 'http://automationexercise.com'
        cy.visit('http://automationexercise.com');

        // Step 3: Verify that home page is visible successfully
        cy.url().should('include', 'automationexercise');

        // Step 4: Scroll down to footer
        cy.get('footer').scrollIntoView();

        // Step 5: Verify text 'SUBSCRIPTION'
        cy.get('footer').should('contain', 'Subscription');

        // Step 6: Enter email address in input and click arrow button
        cy.get('#susbscribe_email').type('testuser@example.com');
        cy.get('button[type=submit]').click();

        // Step 7: Verify success message 'You have been successfully subscribed!' is visible
        cy.get('.alert-success').should('contain', 'You have been successfully subscribed!');
    });
});
