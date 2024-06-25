// describe("API Call UsingFixture", () => {
//     it("POST request using Fixture", () => {
//         cy.fixture("restData").then((data) => {
//             cy.request({
//                 method: "POST",
//                 url: "https://jsonplaceholder.typicode.com/posts",
//                 body: data[0]
//             }).then((response) => {
//                 expect(response.status).to.eq(201)
//                 expect(response.body).to.have.property('id')
//                 expect(response.body).to.have.property('title')
//                 expect(response.body).to.have.property('body')
//             })
//         })
//     })
// })