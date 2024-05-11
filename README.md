# automation-exercise-site

This is a automationexercise website that is used for the automation test for this site.

## Installation

clone the repository and run the following command to install the dependencies

```bash
npm install
```

## Usage

To run the test, run the following command

```bash
npm run cy:run
```

To open the test in browser, run the following command

```bash
npm run cy:open
```

To run cypress cloud, run the following command

```bash
npm run cy:run:cloud
```

# Test Cases List

1. Register User
2. Login User with correct email and password
3. Login User with incorrect email and password
4. Logout User
5. Register User with existing email
6. Contact Us Form
7. Verify Test Cases Page
8. Verify All Products and product detail page
9. Search Product
10. Verify Subscription in home page
11. Verify Subscription in Cart page
12. Add Products in Cart
13. Verify Product quantity in Cart
14. Place Order: Register while Checkout
15. Place Order: Register before Checkout
16. Place Order: Login before Checkout
17. Remove Products From Cart
18. View Category Products
19. View & Cart Brand Products
20. Search Products and Verify Cart After Login
21. Add review on product
22. Add to cart from Recommended items
23. Verify address details in checkout page
24. Download Invoice after purchase order
25. Verify Scroll Up using 'Arrow' button and Scroll Down functionality
26. Verify Scroll Up without 'Arrow' button and Scroll Down functionality

## Folder Structure

1. fixtures: Contains the test data
2. e2e: Contains the test files
3. support: Contains the custom commands and other support files
4. screenshot: Contains the screenshot of the failed test cases
5. videos: Contains the video of the test cases
6. reports: Contains the reports of the test cases

## Cypress Dashboard

The test cases are also available in the cypress dashboard. The link
is [here](https://dashboard.cypress.io/projects/5r89t6/runs)

## Apache License

This project is licensed under the Apache License - see the [LICENSE.md](LICENSE.md) file for details

## Cypress CI

1. Create an account on the CI service (e.g. Jenkins, Github Action)
2. Create a new job
3. Add the following commands to the job:

```bash
npm install
npm cypress run --record --key [Sceret Key]
```
