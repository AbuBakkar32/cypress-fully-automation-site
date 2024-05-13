describe('View Category Products', () => {
    it('Check category products are visible or not', () => {
        cy.visit('http://automationexercise.com');

        // Verify home page is visible
        cy.get('.logo a>img').should('be.visible');

        // Verify product category page is displayed
        cy.contains('Category').should('be.visible');

        // Click on 'Women' category
        cy.get('a[href="#Women"]').click();

        //Click on Dress
        cy.get('a[href="/category_products/1"]').click();

        //Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
        cy.contains('Women - Dress Products').should('be.visible');

        // Click on 'Man' category
        cy.get('a[href="#Men"]').click();

        //Click on Dress
        cy.get('a[href="/category_products/3"]').click();

        //Verify that category page is displayed and confirm
        cy.contains('Men - Tshirts Products').should('be.visible');
    });
});