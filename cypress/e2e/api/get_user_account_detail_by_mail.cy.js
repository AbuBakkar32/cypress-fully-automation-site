describe('API Test: GET User Account Detail by Email', () => {
    it('should return user account details', () => {
        // Define the email parameter
        const email = 'preaus@gmail.com';

        // Send a GET request with the email parameter
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/getUserDetailByEmail',
            qs: {
                email: email
            }
        }).then((response) => {
            const data = JSON.parse(response.body);
            // Assert the response status code
            expect(response.status).to.eq(200);

            // Assert the response body structure
            expect(data).to.have.property('user').that.is.an('object');
            // You can add more assertions here based on the structure of the response JSON

            // Log the response body for inspection (optional)
            cy.log(JSON.stringify(response.body));
        });
    });
});
