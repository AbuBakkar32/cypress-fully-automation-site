// cypress/e2e/jsonplaceholder_user_management.spec.js

describe('JSONPlaceholder User Management API Tests', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    let userId;

    it('should create a new user (Mocked Response)', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/users`,
            body: {
                name: 'Test User',
                username: 'testuser',
                email: 'testuser@example.com',
                address: {
                    street: 'Test St',
                    suite: 'Apt. 123',
                    city: 'Test City',
                    zipcode: '12345',
                    geo: {
                        lat: '0.0',
                        lng: '0.0'
                    }
                },
                phone: '1-555-555-5555',
                website: 'testuser.com',
                company: {
                    name: 'Test Company',
                    catchPhrase: 'Testing is fun',
                    bs: 'test everything'
                }
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
            userId = response.body.id;
        });
    });

    it('should get the created user by ID', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/users/${10}`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('username', 'Moriah.Stanton');
            expect(response.body).to.have.property('email', 'Rey.Padberg@karina.biz');
        });
    });

    it('should update the user by ID', () => {
        cy.request({
            method: 'PUT',
            url: `${baseUrl}/users/10`,
            body: {
                "name": "Clementina DuBuque",
                "username": "Moriah.Stanton",
                "email": "Rey.Padberg@karina.biz",
                "address": {
                    "street": "Kattie Turnpike",
                    "suite": "Suite 198",
                    "city": "Lebsackbury",
                    "zipcode": "31428-2261",
                    "geo": {
                        "lat": "-38.2386",
                        "lng": "57.2232"
                    }
                },
                "phone": "024-648-3804",
                "website": "ambrose.net",
                "company": {
                    "name": "Hoeger LLC",
                    "catchPhrase": "Centralized empowering task-force",
                    "bs": "target end-to-end models"
                }
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('username', 'Moriah.Stanton');
            expect(response.body).to.have.property('email', 'Rey.Padberg@karina.biz');
        });
    });

    it('should list all users and contain the updated user', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/users`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            const user = response.body.find(user => user.id === 10);
            expect(user).to.exist;
            expect(user).to.have.property('username', 'Moriah.Stanton');
            expect(user).to.have.property('email', 'Rey.Padberg@karina.biz');
        });
    });

    it('should delete the user by ID', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/users/${userId}`
        }).then((response) => {
            expect(response.status).to.eq(200);
        });

        // Verify the user is deleted
        cy.request({
            method: 'GET',
            url: `${baseUrl}/users/${userId}`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});
