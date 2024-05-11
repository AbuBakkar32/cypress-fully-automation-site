describe('Login User', () => {
    it('should login and delete a user', () => {
        cy.visit('http://automationexercise.com')

        cy.contains('Signup / Login').click()
        cy.contains('Login to your account')

        // Replace '#email' and '#password' with the actual selectors for each input field
        cy.get('#email').type('testuser@example.com')
        cy.get('#password').type('password')
        cy.get('#login').click()

        cy.contains('Logged in as Test User')

        cy.get('#deleteAccount').click()
        cy.contains('ACCOUNT DELETED!')
    })
})
