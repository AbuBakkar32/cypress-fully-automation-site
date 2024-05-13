describe('API Test: POST To Search Product', () => {
    it('should return a list of searched products', () => {
        // Send a POST request with the search parameter
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/searchProduct",
            body: {
                search_product: "dress"
            }
        }).then((response) => {

            //const data = JSON.parse(response.body);
            console.log(response.body)
            // Assert the response status code
            expect(response.status).to.eq(200);

            // Assert the structure of the response JSON
            expect(response.body).to.have.property('message', 'Bad request, search_product parameter is missing in POST request.')

        });
    });
});
