describe('Verify Scroll Up and Down Functionality', () => {
    it('should scroll down, verify "SUBSCRIPTION", scroll up, and verify homepage text', () => {
        cy.visit('http://automationexercise.com');

        // Verify home page is visible
        cy.get('#slider-carousel').should('be.visible');

        // Scroll down to the bottom of the page
        cy.scrollTo('bottom');

        // Verify 'SUBSCRIPTION' is visible (assuming it's near the bottom)
        cy.get('.single-widget').should('be.visible')

        // Click on the 'up arrow' button (assuming there's a specific element)
        cy.get('#scrollUp').click(); // Replace with actual selector

        // Verify scrolled up and homepage text is visible
        cy.get('#slider-carousel').should('contain', 'Full-Fledged practice website for Automation Engineers');
    });
});
