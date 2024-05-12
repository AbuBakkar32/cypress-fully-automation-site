describe('Test Case 13: Verify Product quantity in Cart', () => {
    it('increases quantity and verifies it in cart', () => {
        cy.visit('http://automationexercise.com');

        // Verify home page is visible
        cy.get('.logo a>img').should('be.visible');

        // Click 'View Product' for any product
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

        // Verify product is displayed with quantity 4
        cy.get('#product-1')
            .should('contain', 'Blue Top') // Replace with actual product name selector
            .find('.cart_quantity')
            .should('contain', '4');
    });
});