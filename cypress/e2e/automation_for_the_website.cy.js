/// <reference types="cypress" />

// visiting the initial website
it('should navigate to the office website', () => {
    cy.visit('../automation_website/moes_automation_suite_site.html')
})

// asserting that there is a list and components from the list are there
it('should assert that there is a list currently visible on the page', () => {
    cy.contains('I call it the dog pack')
    cy.contains('Jim')
    cy.contains('Pam')
    cy.contains('Dwight')
    cy.contains('Michael')
    cy.contains('Creed')
})

// asserting that there are multiple links available to click and it clicks through all of them
it('should assert there is multiple links available to click and clicks all links', () => {
    cy.get('[href="../automation_website/page_two_of_automation_site.html"]').click()
    cy.contains('Page Two')
    cy.get('[href="../automation_website/page_three_of_automation_site.html"]').click()
    cy.contains('Page Three')
    cy.get('[href="../automation_website/moes_automation_suite_site.html"]').click()
    cy.contains('Wulf Dot Com')
})
