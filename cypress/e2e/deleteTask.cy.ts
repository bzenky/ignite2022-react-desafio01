describe('Delete task flow', () => {
  const testTaskName = (index = 0) => `Test Task 0${index}`
  const emptyTaskListText = 'Você ainda não tem tarefas cadastradas'

  beforeEach(() => {
    cy.visit('/')
    cy.createTasks().as('tasks')
  })

  it('should delete modal when click in delete button', () => {
    cy.get('[data-cy="deleteButton"]').eq(0).click()
    cy.get('[data-cy="deleteModalText"]').should('be.visible')
  })

  it('should close edit modal when click in cancel button', () => {
    cy.get('[data-cy="deleteButton"]').eq(0).click()
    cy.get('[data-cy="deleteCancelButton"]').eq(0).click()

    cy.get('[data-cy="deleteModalText"]').should('not.exist')
  })

  it('should close delete modal when esc key is pressed', () => {
    cy.get('[data-cy="deleteButton"]').eq(0).click()
    cy.get('[data-cy="modal"]').type('{esc}');

    cy.get('[data-cy="deleteModalText"]').should('not.exist')
  })

  it('should delete task', () => {
    cy.get('[data-cy="deleteButton"]').eq(0).click()
    cy.get('[data-cy="deleteConfirmButton"]').click()

    cy.get('@tasks').should('not.contain', testTaskName(3))
    cy.get('[data-cy="taskItem"]').should('have.length', 2)
    cy.get('[data-cy="createdTasksCounter"]').should('have.text', '2')

    cy.get('[data-cy="deleteButton"]').eq(0).click()
    cy.get('[data-cy="deleteConfirmButton"]').click()

    cy.get('@tasks').should('not.contain', testTaskName(2))
    cy.get('[data-cy="taskItem"]').should('have.length', 1)
    cy.get('[data-cy="createdTasksCounter"]').should('have.text', '1')

    cy.get('[data-cy="deleteButton"]').eq(0).click()
    cy.get('[data-cy="deleteConfirmButton"]').click()

    cy.get('strong').should('contain', emptyTaskListText)
  })
})