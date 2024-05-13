describe('Verify Scroll Up and Down without Arrow Button', () => {
    it('should scroll down, verify "SUBSCRIPTION", scroll up using JavaScript, and verify homepage text', () => {
        cy.visit('http://automationexercise.com');

        // Verify home page is visible
        cy.get('#slider-carousel').should('be.visible');

        // Scroll down to the bottom of the page
        cy.scrollTo('bottom');

        // Verify 'SUBSCRIPTION' is visible (assuming it's near the bottom)
        cy.get('.single-widget').should('be.visible')

        // Scroll up using JavaScript (since no arrow button)
        cy.window().then((win) => {
            win.scrollTo(0, 0); // Scroll to top coordinates (0, 0)
        });

        // Verify scrolled up and homepage text is visible
        cy.get('#slider-carousel').should('contain', 'Full-Fledged practice website for Automation Engineers');
    });
});
