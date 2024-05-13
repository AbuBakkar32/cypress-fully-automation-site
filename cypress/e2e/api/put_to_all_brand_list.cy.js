describe('API Test: PUT To All Brands List', () => {
    it('should return method not supported message', () => {
        cy.request({
            method: 'PUT',
            url: 'https://automationexercise.com/api/brandsList',
            failOnStatusCode: false // Prevent Cypress from failing the test due to non-2xx response
        }).then((response) => {
            const data = JSON.parse(response.body);

            // Assert the response status code
            expect(data.responseCode).to.eq(405);
            // Assert the response body message
            expect(data).to.have.property('message', 'This request method is not supported.');
        });
    });
});
