/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Create three tasks items via UI
     * @example
     * cy.createTasks()
     */
    createTasks(): Chainable<any>
  }
}
