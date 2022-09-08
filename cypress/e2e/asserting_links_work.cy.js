/// <reference types="cypress" />

// asserting that there are multiple links available to click and it clicks through all of them
it('should assert there is multiple links available to click and clicks all links', () => {
    cy.visit('../automation_website/moes_automation_homepage.html')
    cy.get('[href="../automation_website/page_on_jim_automation_site.html"]').click()
    cy.get('.header').contains("Jim's About me Page")
    cy.get('[href="../automation_website/page_on_pam_automation_site.html"]').click()
    cy.get('.header').contains("Pam's About me Page")
    cy.get('[href="../automation_website/page_on_dwight_automation_site.html"]').click()
    cy.get('.header').contains("Dwight's About me Page")
    cy.get('[href="../automation_website/page_on_michael_automation_site.html"]').click()
    cy.get('.header').contains("Michael's About me Page")
    cy.get('[href="../automation_website/page_on_creed_automation_site.html"]').click()
    cy.get('.header').contains("Creed's About me Page")
    cy.get('[href="../automation_website/moes_automation_homepage.html"]').click()
    cy.get('.header').contains('Homepage')
})