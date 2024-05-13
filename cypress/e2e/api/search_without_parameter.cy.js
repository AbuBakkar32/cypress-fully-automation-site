describe('API Test: POST To Search Product without search_product parameter', () => {
    it('should return a 400 Bad Request error with appropriate message', () => {
        // Send a POST request without the search_product parameter
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
            failOnStatusCode: false // Prevent Cypress from failing the test due to non-2xx response
        }).then((response) => {
            const data = JSON.parse(response.body);
            // Assert the response status code
            expect(response.status).to.eq(200);

            // Assert the response body message
            expect(data).to.have.property('message', 'Bad request, search_product parameter is missing in POST request.');
        });
    });
});
