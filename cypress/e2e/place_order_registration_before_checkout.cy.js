describe('Place Order: Register Before Checkout', () => {
    it('Register before cart adds products into the cart, and process shippment', () => {
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

        // add product
        cy.get('.product-image-wrapper .choose > ul >li >a').first().click();

        // Verify product detail is opened
        cy.get('.product-information').should('be.visible');

        // Increase quantity to 4
        cy.get('#quantity').clear().type('4');

        // Click 'Add to cart' button
        cy.get('.cart').click();

        // confirm the product
        cy.get('#cartModal > div > div > div.modal-footer > button').click();

        // Click 'View Cart' button
        cy.get('li [href="/view_cart"]').click();

        // Verify cart page is displayed
        cy.get('.cart_info').should('be.visible');

        // Click 'Proceed To Checkout' button again
        cy.contains('Proceed To Checkout').click();

        // Enter description in comment text area and click 'Place Order'
        cy.get('#ordermsg').type('Test order with registration');
        cy.contains('Place Order').click();

        // Click 'Pay and Confirm Order' button
        cy.get('[data-qa="name-on-card"]').type('Amir Hossain')
        cy.get('[data-qa="card-number"]').type('5655-1814-0058-1255')
        cy.get('[data-qa="cvc"]').type('588')
        cy.get('[data-qa="expiry-month"]').type('08/33')
        cy.get('[data-qa="expiry-year"]').type('2033')
        cy.get('[data-qa = "pay-button"]').click();

        // Verify success message 'Your order has been placed successfully!'
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

        // Click 'Delete Account' button
        cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a').click()

        // Verify 'ACCOUNT DELETED!' and click 'Continue' button
        cy.get('[data-qa="account-deleted"]').contains('Account Deleted!')
        cy.get('[data-qa="continue-button"]').click()


    });
});