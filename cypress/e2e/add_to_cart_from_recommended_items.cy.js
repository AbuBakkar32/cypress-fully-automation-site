describe('Add to cart from Recommended items', () => {
    it('adds a recommended product to cart and verifies', () => {
        cy.visit('http://automationexercise.com');

        // Scroll to bottom of page
        cy.scrollTo('bottom');

        // Verify 'RECOMMENDED ITEMS' are visible
        cy.contains('recommended items').should('be.visible');

        // Click on 'Add To Cart' on the first Recommended product (adjust selector if needed)
        cy.get('#recommended-item-carousel div > a').first().click({force: true}); // Assuming "Add To Cart" is next to product title

        cy.wait(2000);
        // Click on 'Continue Shopping' button
        cy.get('#cartModal > div > div > div.modal-footer > button').click({force: true});

        cy.wait(1000);
        // Click on 'View Cart' button
        cy.get('.nav a[href="/view_cart"]').click();

        // Verify that product is displayed in cart page and display none
        cy.get('#cart_info_table').should('be.visible').and('not.have.css', 'display', 'none');
    });
});
