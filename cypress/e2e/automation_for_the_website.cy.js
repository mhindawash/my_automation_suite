/// <reference types="cypress" />

// visiting the initial website
it('should navigate to the office website', () => {
    cy.visit('../automation_website/moes_automation_homepage.html')
})

// asserting that there is a list and components from the list are there
it('should assert that there is a list currently visible on the page', () => {
    cy.contains('Homepage')
    cy.contains('Jim')
    cy.contains('Pam')
    cy.contains('Dwight')
    cy.contains('Michael')
    cy.contains('Creed')
    cy.contains('Info')
})

// asserting that there are multiple links available to click and it clicks through all of them
it('should assert there is multiple links available to click and clicks all links', () => {
    cy.get('[href="../automation_website/page_on_jim_automation_site.html"]').click()
    cy.contains("Jim's About me Page")
    cy.get('[href="../automation_website/page_on_pam_automation_site.html"]').click()
    cy.contains("Pam's About me Page")
    cy.get('[href="../automation_website/moes_automation_homepage.html"]').click()
    cy.contains('Homepage')
})

// asserting that the navigation menu does show a black color when hovering over it
it('should assert there is a black background when hovering over each navigation link', () => {
    cy.check('')
})