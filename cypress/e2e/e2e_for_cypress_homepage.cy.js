/// <reference types="cypress" />

// Assert landing page works and closes privacy policy warning in bottom left of page
it('opens the cypress homepage and closes privacy policy window', () => {
    // tag: @1
    cy.visit('www.cypress.io')
    cy.wait(1000)
    cy.get('.osano-cm-dialog__close > svg').click()
})

// clicking the npm install button guide
it('clicking npm install button', () => {
    // tag: @2
    cy.get('astro-island > .border').click()
    cy.wait(1000)
})

// closing the npm install guide window
it('click the x button on npm window', () => {
    // tag: @3
    cy.get('.group > .icon-dark-gray-400').click()
})

// asserting the Product dropdown exists and clicks it
it('asserting product dropdown exists and clicks it on navigation bar', () => {
    // tag: @4
    cy.get('.nav-bar > .relative > :nth-child(1)').should('exist')
    cy.get('.nav-bar > .relative > :nth-child(1)').click()
})

// scrolling to the bottom of the cypress homepage
it('scrolling to the bottom of the homepage', () => {
    // tag: @5
    cy.get('.nav-bar > .relative > :nth-child(1)').type('{esc}')
    cy.scrollTo('bottom')
    cy.wait(1000)
})

// asserting the subcribe to newsletter link exists
it('asserting the subscribe to our newsletter button exists', () => {
    // tag: @6
    cy.get('.footer-form > .border').should('exist')
})

// clicking the subscribe to email link
it('clicking the subscribe to our newsletter button', () => {
    // tag: 7
    cy.get('.footer-form > .border').click()
})

// asserting the subscribe button has redirected you to the email prompt
it('asserting we are redirected to subscribe button', () => {
    // tag: @8
    cy.get('.card-marketing-static > .border-b').contains('Subscribe to our newsletter')
})

// asserting you cannot subscribe to the newsletter without enterting an email
it('asserting error message populates when entering empty email', () => {
    // tag: @9
    cy.get('form.relative > .gap-[16px] > .border') .click()
    cy.get('#subscribe-error').should('exist')
})