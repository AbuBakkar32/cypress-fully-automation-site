describe('API Test: POST To Verify Login with valid details', () => {
    it('should return user exists message', () => {
        // Define valid login credentials
        const email = 'preaus@gmail.com';
        const password = '123456';

        // Send a POST request with valid credentials
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            body: {
                email: email,
                password: password
            }
        }).then((response) => {
            // Assert the response status code
            expect(response.status).to.eq(200);

            // Assert the response body message
            expect(response.body).to.have.property('message', 'User exists!');
        });
    });
});
