describe('Create task flow', () => {
  const newTaskName = 'Updated task'
  const successfulToastText = 'Tarefa cadastrada !'
  const unsuccessfulToastText = 'Tarefa já cadastrada !'
  const copiedToastText = 'Tarefa copiada !'
  const emptyToastText = 'Insira sua tarefa !'

  beforeEach(() => {
    cy.visit('/')
    cy.createTasks().as('tasks')
  })

  it('should open edit modal when click in edit button', () => {
    cy.get('[data-cy="editButton"]').eq(0).click()
    cy.get('[data-cy="editModalTitle"]').should('be.visible')
  })

  it('should close edit modal when click in cancel button', () => {
    cy.get('[data-cy="editButton"]').eq(0).click()
    cy.get('[data-cy="editCancelButton"]').eq(0).click()

    cy.get('[data-cy="editModalTitle"]').should('not.exist')
  })

  it('should close edit modal when esc key is pressed', () => {
    cy.get('[data-cy="editButton"]').eq(0).click()
    cy.get('[data-cy="modal"]').type('{esc}');

    cy.get('[data-cy="editModalTitle"]').should('not.exist')
  })

  it('should update task name', () => {
    cy.get('[data-cy="editButton"]').eq(0).click()
    cy.get('[data-cy="editInput"]').type(newTaskName)
    cy.get('[data-cy="editSubmitButton"]').click()

    cy.get('@tasks').should('contain', newTaskName)
    cy.get('div').should('contain', successfulToastText)
    cy.get('[data-cy="taskItem"]').should('have.length', 3)
    cy.get('[data-cy="createdTasksCounter"]').should('have.text', '3')
  })

  it('should not update task name if task already exists', () => {
    const firstTask = 'Test Task 01'

    cy.get('[data-cy="editButton"]').eq(0).click()
    cy.get('[data-cy="editInput"]').type(firstTask)
    cy.get('[data-cy="editSubmitButton"]').click()

    cy.get('div').should('contain', unsuccessfulToastText)
    cy.get('[data-cy="taskItem"]').should('have.length', 3)
    cy.get('[data-cy="createdTasksCounter"]').should('have.text', '3')
  })

  it('should not update task name if input is empty', () => {
    cy.get('[data-cy="editButton"]').eq(0).click()
    cy.get('[data-cy="editSubmitButton"]').click()

    cy.get('div').should('contain', emptyToastText)
    cy.get('[data-cy="taskItem"]').should('have.length', 3)
    cy.get('[data-cy="createdTasksCounter"]').should('have.text', '3')
  })

  // seems that still is a issue 
  // https://github.com/cypress-io/cypress/issues/2386
  //
  // it('should copy task name when clicked in copy button', () => {
  //   cy.get('[data-cy="editButton"]').eq(0).click()
  //   cy.get('[data-cy="editCopyButton"]').eq(0).click()
  //   cy.get('[data-cy="editInput"]').type("{ctrl + v}")
  //   cy.get('div').should('contain', copiedToastText)

  //   cy.get('[data-cy="editSubmitButton"]').click()

  //   cy.get('div').should('contain', unsuccessfulToastText)
  //   cy.get('[data-cy="taskItem"]').should('have.length', 3)
  // })
})