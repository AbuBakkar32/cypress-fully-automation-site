describe('Login User', () => {
    before('Registration before login to the system', () => {
        cy.visit('http://automationexercise.com');

        // Verify home page is visible
        cy.get('.logo a>img').should('be.visible');

        //click signup/login button
        cy.contains('Signup / Login').click();

        // Fill all details in Signup and create account
        cy.contains('New User Signup!').should('be.visible');

        cy.get('[data-qa="signup-name"]').type('Amir Hossain')
        cy.get('[data-qa="signup-email"]').type('amir.swe@gmail.com')
        cy.get('[data-qa="signup-button"]').click()

        // Fill in account details
        // Replace '#input' with the actual selectors for each input field
        cy.get('#id_gender1').type('Mr.')
        cy.get('[data-qa="password"]').type('abubakkar90')
        cy.get('[data-qa="days"]').select('1')
        cy.get('[data-qa="months"]').select('January')
        cy.get('[data-qa="years"]').select('1998')

        cy.get('#newsletter').check()
        cy.get('#optin').check()

        cy.get('[data-qa="first_name"]').type('Amir')
        cy.get('[data-qa="last_name"]').type('Hossain')
        cy.get('[data-qa="company"]').type('Test Company')
        cy.get('[data-qa="address"]').type('123 Test St')
        cy.get('[data-qa="address2"]').type('Apt 4B')
        cy.get('#country').select('Canada')
        cy.get('[data-qa="state"]').type('NY')
        cy.get('[data-qa="city"]').type('New York')
        cy.get('[data-qa="zipcode"]').type('10001')
        cy.get('[data-qa="mobile_number"]').type('1234567890')

        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="account-created"]').contains('Account Created!')
        cy.get('[data-qa="continue-button"]').click()

        // Verify ' Logged in as username' at top
        cy.contains('Logged in as Amir Hossain').should('be.visible');
    });

    it('should login and delete a user', () => {
        cy.visit('http://automationexercise.com')

        cy.contains('Logout').click()
        cy.contains('Login to your account').should('be.visible')

        // Replace '#email' and '#password' with the actual selectors for each input field
        cy.get('[data-qa="login-email"]').type('amir.swe@gmail.com')
        cy.get('[data-qa="login-password"]').type('abubakkar90')
        cy.get('[data-qa="login-button"]').click()

        cy.contains('Logged in as Amir Hossain').should('be.visible')

        cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a').click()
        cy.get('[data-qa="account-deleted"]').contains('Account Deleted!')
    })
})
