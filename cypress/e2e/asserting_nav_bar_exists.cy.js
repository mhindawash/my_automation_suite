/// <reference types="cypress" />

// asserting that there is a list of links in the navigation bar
it('should assert that there is a list currently visible on the page', () => {
    cy.visit('../automation_website/moes_automation_homepage.html')
    cy.get(':nth-child(1) > a').contains('Homepage')
    cy.get(':nth-child(2) > a').contains('Jim')
    cy.get(':nth-child(3) > a').contains('Pam')
    cy.get(':nth-child(4) > a').contains('Dwight')
    cy.get(':nth-child(5) > a').contains('Michael')
    cy.get(':nth-child(6) > a').contains('Creed')
})

// asserting that the navigation menu does show a black color when hovering over it
it('should assert there is a black background when hovering over each navigation link', () => {
    // cy.check('')
})