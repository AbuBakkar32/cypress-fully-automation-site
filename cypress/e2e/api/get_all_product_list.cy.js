describe('API Test: Get All Products List', () => {
    it('should return a list of products', () => {
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList'
        }).then((response) => {
            // Assert the response status code
            expect(response.status).to.eq(200);
            const data = JSON.parse(response.body);

            // Check property have or not
            expect(data).to.have.property('products')

            // Log the response body for inspection (optional)
            cy.log(JSON.stringify(response.body));
        });
    });
});