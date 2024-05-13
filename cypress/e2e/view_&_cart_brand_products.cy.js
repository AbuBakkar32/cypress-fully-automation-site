describe('View & Cart Brand Products', () => {
    it('Check brand products are visible or not', () => {
        cy.visit('http://automationexercise.com');

        // Verify home page is visible
        cy.get('.logo a>img').should('be.visible');

        //click Products menu
        cy.contains('Products').click();

        // Verify product Brand page is displayed
        cy.contains('Brands').should('be.visible');

        // Click on 'Brand' category
        cy.get('a[href="/brand_products/Polo"]').click();

        //Verify Brand title is visible
        cy.contains('Brand - Polo Products').should('be.visible');

        //Click on Dress
        cy.get('a[href="/brand_products/Mast & Harbour"]').click();

        //Verify that Brand page is displayed and confirm
        cy.contains('Brand - Mast & Harbour Products').should('be.visible');
    });
});