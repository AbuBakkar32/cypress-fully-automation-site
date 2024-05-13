describe('API Test: POST To All Products List', () => {
    it('should return method not supported message', () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/productsList',
            failOnStatusCode: false // Prevent Cypress from failing the test due to non-2xx response
        }).then((response) => {
            // Convert response.body to object
            const data = JSON.parse(response.body);

            // Assert the response status code
            expect(response.status).to.eq(200);

            // Assert the response body message
            expect(data).to.have.property('message', 'This request method is not supported.');

            // Log the response body for inspection (optional)
            cy.log(JSON.stringify(response.body));
        });
    });
});
