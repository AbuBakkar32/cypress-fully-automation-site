describe('Test Case 12: Add Products in Cart', () => {
    it('Add Products in Cart', () => {
        // Step 1: Launch browser
        // Cypress automatically launches the browser

        // Step 2: Navigate to url 'http://automationexercise.com'
        cy.visit('http://automationexercise.com');

        // Step 3: Verify that home page is visible successfully
        cy.url().should('include', 'automationexercise');

        // Step 4: Click 'Products' button
        cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(2) > a').click();

        // Step 5: Hover over first product and click 'Add to cart'
        cy.xpath('/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]').trigger('mouseover')
            .xpath('/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[1]/a').click();

        // Step 6: Click 'Continue Shopping' button
        cy.get('#cartModal > div > div > div.modal-footer > button').click();

        // Step 7: Hover over second product and click 'Add to cart'
        cy.xpath('/html/body/section[2]/div/div/div[2]/div/div[3]/div/div[1]').trigger('mouseover')
            .xpath('/html/body/section[2]/div/div/div[2]/div/div[3]/div/div[1]/div[1]/a').click();
        cy.get('#cartModal > div > div > div.modal-footer > button').click();

        // Step 8: Click 'View Cart' button
        cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(3) > a').click();

        // Step 9: Verify both products are added to Cart
        cy.get('#cart_info_table > tbody').find('.cart_product').should('have.length', 2);

        // Step 10: Verify their prices, quantity and total price
        // Assuming each product has a 'price' class and the total price has a 'total-price' class
        cy.get('tbody > tr').each(($el) => {
            const price = parseFloat($el.find('.cart_price').text().replace(/[^0-9.-]+/g, "")) * 1000;
            const quantity = parseInt($el.find('.cart_quantity').text());
            const totalPrice = price * quantity;

            // Find total price of each product and match is equal to price * quantity
            const total = parseFloat($el.find('.cart_total_price').text().replace(/[^0-9.-]+/g, "")) * 1000
            expect(total).to.equal(totalPrice);
        });
    });
});
