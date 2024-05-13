describe('Add review on product', () => {
    before('Login into the system', () => {
        cy.visit('http://automationexercise.com')

        cy.contains('Signup / Login').click()
        cy.contains('Login to your account')

        // Replace '#email' and '#password' with the actual selectors for each input field
        cy.get('[data-qa="login-email"]').type('preaus@gmail.com')
        cy.get('[data-qa="login-password"]').type('123456')
        cy.get('[data-qa="login-button"]').click()

        cy.contains('Logged in as Preaus Sarkar').should('be.visible')
    })

    it('adds a review and verifies success message', () => {
        cy.visit('http://automationexercise.com');

        // Click on 'Products' button
        cy.get('a[href="/products"]').click();

        // Verify user is navigated to ALL PRODUCTS page
        cy.contains('All Products').should('be.visible');

        // Select a product (replace with logic to choose a product)
        // ... your logic to select a product ...

        // Click on 'View Product' button
        cy.get('a[href="/product_details/1"]').click(); // Assuming the first product

        // Verify 'Write Your Review' is visible
        cy.contains('Write Your Review').should('be.visible');

        // Enter name, email and review
        const reviewerName = 'Test User';
        const reviewerEmail = 'test.user@example.com';
        const reviewText = 'This is a great product!';

        cy.get('#name').type(reviewerName);
        cy.get('#email').type(reviewerEmail);
        cy.get('#button-review').type(reviewText);

        // Verify success message 'Thank you for your review.'
        cy.get('#review-section div > span').should('contain', 'Thank you for your review.');
    });
});
