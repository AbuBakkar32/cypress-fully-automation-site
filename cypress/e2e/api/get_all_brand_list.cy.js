describe('API Test: Get All Brands List', () => {
    it('should return a list of brands', () => {
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/brandsList'
        }).then((response) => {
            // Assert the response status code
            expect(response.status).to.eq(200);
            const data = JSON.parse(response.body);

            // Assert the structure of the response JSON
            expect(data).to.have.property('brands').that.is.an('array');
        });
    });
});
