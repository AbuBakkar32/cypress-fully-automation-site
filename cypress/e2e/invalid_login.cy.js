describe('Login User', () => {
    it('should fail to login with incorrect email and password', () => {
        cy.visit('http://automationexercise.com')

        cy.contains('Signup / Login').click()
        cy.contains('Login to your account')

        // Replace '#email' and '#password' with the actual selectors for each input field
        cy.get('[data-qa="login-email"]').type('incorrect@example.com')
        cy.get('[data-qa="login-password"]').type('incorrectpassword')
        cy.get('[data-qa="login-button"]').click()

        cy.contains('Your email or password is incorrect!').should('be.visible')
    })
})
