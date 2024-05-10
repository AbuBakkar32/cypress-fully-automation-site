describe('Register User', () => {
  it('should register and delete a new user', () => {
    cy.visit('http://automationexercise.com')

    cy.contains('Signup / Login').click()
    cy.contains('New User Signup!')

    cy.get('[data-qa="signup-name"]').type('Abu Preaus')
    cy.get('[data-qa="signup-email"]').type('abu.swe@gmail.com')
    cy.get('[data-qa="signup-button"]').click()

    //cy.contains('ENTER ACCOUNT INFORMATION')


    // Fill in account details
    // Replace '#input' with the actual selectors for each input field
    cy.get('#id_gender1').type('Mr.')
    cy.get('[data-qa="password"]').type('abubakkar90')
    cy.get('[data-qa="days"]').select('1')
    cy.get('[data-qa="months"]').select('January')
    cy.get('[data-qa="years"]').select('1998')

    cy.get('#newsletter').check()
    cy.get('#optin').check()

    cy.get('[data-qa="first_name"]').type('Abu Bakkar')
    cy.get('[data-qa="last_name"]').type('Siddikk')
    cy.get('[data-qa="company"]').type('Test Company')
    cy.get('[data-qa="address"]').type('123 Test St')
    cy.get('[data-qa="address2"]').type('Apt 4B')
    cy.get('#country').select('Canada')
    cy.get('[data-qa="state"]').type('NY')
    cy.get('[data-qa="city"]').type('New York')
    cy.get('[data-qa="zipcode"]').type('10001')
    cy.get('[data-qa="mobile_number"]').type('1234567890')

    cy.get('[data-qa="create-account"]').click()
    //
    cy.get('[data-qa="account-created"]').contains( 'Account Created!')

    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Logged in as')

    cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a').click()
    cy.get('[data-qa="account-deleted"]').contains('Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()
  })
})
