describe('Contact Us Form', () => {
    it('Contact Us Form validation checking....', () => {
        // Step 1: Launch browser
        // Cypress automatically launches the browser

        // Step 2: Navigate to url 'http://automationexercise.com'
        cy.visit('http://automationexercise.com');

        // Step 3: Verify that home page is visible successfully
        cy.url().should('include', 'automationexercise');

        // Step 4: Click on 'Contact Us' button
        cy.contains('Contact us').click();

        // Step 5: Verify 'GET IN TOUCH' is visible
        cy.get('#contact-page > div.row > div.col-sm-8 > div > h2').should('contain', 'Get In Touch');

        // Step 6: Enter name, email, subject and message
        cy.get('[data-qa="name"]').type('Test User');
        cy.get('[data-qa="email"]').type('testuser@example.com');
        cy.get('[data-qa="subject"]').type('Test Subject');
        cy.get('[data-qa="message"]').type('Test Message');

        // Step 7: Upload file
        const fileName = './reports/unittest.pdf';
        cy.get('input[type=file]').selectFile(fileName);

        // Step 8: Click 'Submit' button
        cy.get('[data-qa="submit-button"]').click();

        // Step 9: Click OK button
        cy.on('window:confirm', () => true);

        // Step 10: Verify success message 'Success! Your details have been submitted successfully.' is visible
        cy.get('.status ').should('contain', 'Success! Your details have been submitted successfully.');

        // Step 11: Click 'Home' button and verify that landed to home page successfully
        cy.get('#form-section > a > span > i').click();
        cy.url().should('include', 'automationexercise');
    });
});
