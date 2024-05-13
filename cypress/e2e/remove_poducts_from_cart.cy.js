describe('Remove Products From Cart', () => {

    it('Check cart product successfully delete or not', () => {
        cy.visit('http://automationexercise.com');

        // Verify home page is visible
        cy.get('.logo a>img').should('be.visible');

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

        // Click 'Remove' button for remove product
        cy.get('.cart_quantity_delete').click();

        // Verify product is removed from cart
        cy.contains('Cart is empty!').should('be.visible');
    });
});