describe('Verify Subscription in card page', () => {
    it('Verify Subscription in card page', () => {
        // Step 1: Launch browser
        // Cypress automatically launches the browser

        // Step 2: Navigate to url 'http://automationexercise.com'
        cy.visit('http://automationexercise.com');

        // Step 3: Verify that home page is visible successfully
        cy.url().should('include', 'automationexercise');

        // Step 4: Click on 'Cart' button
        cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(3) > a').click();

        // Step 5: Scroll down to footer
        cy.get('footer').scrollIntoView();

        // Step 6: Verify text 'SUBSCRIPTION'
        cy.get('footer').should('contain', 'Subscription');

        // Step 7: Enter email address in input and click arrow button
        cy.get('#susbscribe_email').type('testuser@example.com');
        cy.get('button[type=submit]').click();

        // Step 8: Verify success message 'You have been successfully subscribed!' is visible
        cy.get('.alert-success').should('contain', 'You have been successfully subscribed!');
    });
});
