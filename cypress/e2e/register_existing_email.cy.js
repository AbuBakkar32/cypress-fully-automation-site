describe('Register User with existing email', () => {
    it('Register User with existing email', () => {
        // Step 1: Launch browser
        // Cypress automatically launches the browser

        // Step 2: Navigate to url 'http://automationexercise.com'
        cy.visit('http://automationexercise.com');

        // Step 3: Verify that home page is visible successfully
        cy.url().should('include', 'automationexercise');

        // Step 4: Click on 'Signup / Login' button
        cy.contains('Signup / Login').click()

        // Step 5: Verify 'New User Signup!' is visible
        cy.get('#form > div > div > div:nth-child(3) > div > h2').should('contain', 'New User Signup!');

        // Step 6: Enter name and already registered email address
        cy.get('[data-qa="signup-name"]').type('abubakkar')
        cy.get('[data-qa="signup-email"]').type('abu@gmail.com')

        // Step 7: Click 'Signup' button
        cy.get('[data-qa="signup-button"]').click()

        // Step 8: Verify error 'Email Address already exist!' is visible
        cy.get('#form > div > div > div:nth-child(3) > div > form > p').should('contain', 'Email Address already exist!')
    });
});
