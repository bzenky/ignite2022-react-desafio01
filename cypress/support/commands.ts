/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('createTasks', () => {
  const firstTask = 'Test Task 01'
  const secondTask = 'Test Task 02'
  const thirdTask = 'Test Task 03'

  cy.get('[data-cy="addInput"]', { log: false })
    .type(`${firstTask}{enter}`, { log: false })
    .type(`${secondTask}{enter}`, { log: false })
    .type(`${thirdTask}{enter}`, { log: false })

  return cy.get('[data-cy="taskItem"]', { log: false })
})
