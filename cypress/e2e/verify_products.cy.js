describe('Test Case 8: Verify All Products and product detail page', () => {
    it('Verify All Products and product detail page', () => {
        // Step 1: Launch browser
        // Cypress automatically launches the browser

        // Step 2: Navigate to url 'http://automationexercise.com'
        cy.visit('http://automationexercise.com');

        // Step 3: Verify that home page is visible successfully
        cy.url().should('include', 'automationexercise');

        // Step 4: Click on 'Products' button
        cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(2) > a').click();

        // Step 5: Verify user is navigated to ALL PRODUCTS page successfully
        cy.url().should('include', 'products');

        // Step 6: The products list is visible
        cy.contains('All Products').should('be.visible');

        // Step 7: Click on 'View Product' of first product
        cy.get('.product-image-wrapper .choose > ul >li >a').first().click();

        // Step 8: User is landed to product detail page
        cy.url().should('include', 'product_details');

        // Step 9: Verify that detail detail is visible: product name, category, price, availability, condition, brand
        cy.get('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > h2').contains('Blue Top').should('be.visible');
        cy.get('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(3)').contains('Category: Women > Tops').should('be.visible');
        cy.get('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > span > span').contains("Rs. 500").should('be.visible');
        cy.get('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(6)').contains('In Stock').should('be.visible');
        cy.get('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(7)').contains('New').should('be.visible');
        cy.get('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(8)').contains('Polo').should('be.visible');
    });
});
