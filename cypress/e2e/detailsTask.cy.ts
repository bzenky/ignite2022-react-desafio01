describe('Details task flow', () => {
  const newTaskName = 'Edit Test Task 01'
  const infoModalTitle = 'Detalhes da tarefa'
  const createdAtInitialText = 'Tarefa criada em'
  const doneAtInitialText = 'Tarefa concluída em'
  const editedAtInitialText = 'Última edição em'
  const hoverDetailsButtonText = 'Ver detalhes da tarefa'

  beforeEach(() => {
    cy.visit('/')
    cy.createTasks().as('tasks')
  })

  it('should open details modal when click in details button', () => {
    cy.get('[data-cy="detailsButton"]').eq(0).click()
    cy.get('[data-cy="detailsModalTitle"]').should('be.visible').should('contain', infoModalTitle)
  })

  it('should close edit modal when click in cancel button', () => {
    cy.get('[data-cy="detailsButton"]').eq(0).click()
    cy.get('[data-cy="detailsBackButton"]').eq(0).click()

    cy.get('[data-cy="detailsModalTitle"]').should('not.exist')
  })

  it('should close edit modal when esc key is pressed', () => {
    cy.get('[data-cy="detailsButton"]').eq(0).click()
    cy.get('[data-cy="modal"]').type('{esc}');

    cy.get('[data-cy="detailsModalTitle"]').should('not.exist')
  })

  it('should show only created date when task is not edited', () => {
    cy.get('[data-cy="detailsButton"]').eq(0).click()
    cy.get('span').should('contain', createdAtInitialText)
    cy.get('span').should('not.contain', doneAtInitialText)
    cy.get('span').should('not.contain', editedAtInitialText)
  })

  it('should show created date and edit date when task is edited', () => {
    cy.get('[data-cy="editButton"]').eq(0).click()
    cy.get('[data-cy="editInput"]').type(newTaskName)
    cy.get('[data-cy="editSubmitButton"]').click()

    cy.get('[data-cy="detailsButton"]').eq(0).click()
    cy.get('span').should('contain', createdAtInitialText)
    cy.get('span').should('not.contain', doneAtInitialText)
    cy.get('span').should('contain', editedAtInitialText)
  })

  it('should show created date, edit date, finish date when task is edited and finished', () => {
    cy.get('[data-cy="editButton"]').eq(0).click()
    cy.get('[data-cy="editInput"]').type(newTaskName)
    cy.get('[data-cy="editSubmitButton"]').click()
    cy.get('[data-cy="handleTaskDone"]').eq(0).click()

    cy.get('[data-cy="detailsButton"]').eq(0).click()
    cy.get('span').should('contain', createdAtInitialText)
    cy.get('span').should('contain', doneAtInitialText)
    cy.get('span').should('contain', editedAtInitialText)
  })

  it('should show created date, and finish date when task is finished and not edited', () => {
    cy.get('[data-cy="handleTaskDone"]').eq(0).click()

    cy.get('[data-cy="detailsButton"]').eq(0).click()
    cy.get('span').should('contain', createdAtInitialText)
    cy.get('span').should('contain', doneAtInitialText)
    cy.get('span').should('not.contain', editedAtInitialText)
  })

  it('should show what details button do when hovered', () => {
    cy.get('[data-cy="detailsButton"]').eq(0).realHover()
    cy.get('[data-cy="popover"]').should('be.visible')
    cy.get('div').should('contain', hoverDetailsButtonText)
  })
})