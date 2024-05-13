describe('Search Products and Verify Cart After Login', () => {
    it('searches products, adds to cart, verifies after login', () => {

        cy.visit('http://automationexercise.com');

        // Step 4: Click on 'Products' button
        cy.contains('Products').click();

        // Step 5: Verify user is navigated to ALL PRODUCTS page successfully
        cy.url().should('include', 'products');

        // Step 6: Enter product name in search input and click search button
        const productName = 'dress';
        cy.get('#search_product').type(productName);
        cy.get('#submit_search').click();

        // Step 7: Verify 'SEARCHED PRODUCTS' is visible
        cy.contains('Searched Products').should('be.visible');

        cy.get('.features_items .col-sm-4').each(($product) => {
            if ($product.text().toLowerCase().includes(productName)) {

                // Find the 'add to cart' button within the current product
                cy.wrap($product).find('.productinfo .add-to-cart').click();

                // Find the 'Continue Shopping' button within the current product context (assuming it's displayed after adding to cart)
                cy.get('#cartModal > div > div > div.modal-footer > button').click();
            }
        });

        //click on Cart Menu
        cy.get('.nav a[href="/view_cart"]').click();

        // Step 9: Verify both products are added to Cart
        cy.get('#cart_info_table > tbody > tr').should('have.visible')

        // Click on 'Signup / Login' button
        cy.contains('Signup / Login').click()

        // Verify user is navigated to login page
        cy.contains('Login to your account')

        // Replace '#email' and '#password' with the actual selectors for each input field
        cy.get('[data-qa="login-email"]').type('preaus@gmail.com')
        cy.get('[data-qa="login-password"]').type('123456')
        cy.get('[data-qa="login-button"]').click()

        cy.contains('Logged in as Preaus Sarkar').should('be.visible')

        //click on Cart Menu
        cy.get('.nav a[href="/view_cart"]').click();

        //Verify both products are added to Cart are equal to 7
        cy.get('#cart_info_table > tbody > tr').should('have.visible');

    });
});