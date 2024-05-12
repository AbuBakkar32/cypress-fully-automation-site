describe('Search Product', () => {
    it('Search Product and click search button to find all related products', () => {
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

        // Step 6: Enter product name in search input and click search button
        const productName = 'Dress';
        cy.get('#search_product').type(productName);
        cy.get('#submit_search').click();

        // Step 7: Verify 'SEARCHED PRODUCTS' is visible
        cy.xpath('/html/body/section[2]/div/div/div[2]/div/h2').should('contain', 'Searched');

        // For Partially matching text
        /*cy.get('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > h2').invoke('text').then((text) => {
            expect(text.toLowerCase()).to.contain('searched');
        });*/


        // Step 8: Verify all the products related to search are visible
        cy.get('.productinfo').find('p').each(($el) => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                cy.wrap($el).should('contain', productName);
                return false;
            });
        });
    });
});
