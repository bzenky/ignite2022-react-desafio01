describe('Create task flow', () => {
  const taskName = 'Task Teste 01'
  const taskNameWithSpaces = '     Task Teste 01       '
  const anotherTaskName = 'Task Teste 02'
  const taskNameWithOnlySpaces = '     '
  const successfulToastText = 'Tarefa cadastrada !'
  const unsuccessfulToastText = 'Tarefa já cadastrada !'

  beforeEach(() => {
    cy.visit('/')
  })

  it('should allow to create a new task if it doesn\'t exist yet', () => {
    cy.get('[data-cy="addInput"]').type(taskName)
    cy.get('[data-cy="createButton"]').click()

    cy.get('[data-cy="addInput"]').type(anotherTaskName)
    cy.get('[data-cy="createButton"]').click()

    cy.get('div').should('contain', successfulToastText)
    cy.get('[data-cy="createdTasksCounter"]').should('have.text', '2')
    cy.get('[data-cy="taskItem"').should('have.length', 2)
    cy.get('[data-cy="taskContent"').should('contain', taskName)
    cy.get('[data-cy="taskContent"').should('contain', anotherTaskName)
  })

  it('should trim task name when it have spaces', () => {
    cy.get('[data-cy="addInput"]').type(taskNameWithSpaces)
    cy.get('[data-cy="createButton"]').click()

    cy.get('div').should('contain', successfulToastText)
    cy.get('[data-cy="createdTasksCounter"]').should('have.text', '1')
    cy.get('[data-cy="taskItem"').should('have.length', 1)
    cy.get('[data-cy="taskContent"').should('contain', taskName)
  })

  it('should not allow to create a new task if it already exists', () => {
    cy.get('[data-cy="addInput"]').type(taskName)
    cy.get('[data-cy="createButton"]').click()

    cy.get('[data-cy="addInput"]').type(taskName)
    cy.get('[data-cy="createButton"]').click()

    cy.get('div').should('contain', unsuccessfulToastText)
    cy.get('[data-cy="createdTasksCounter"]').should('have.text', '1')
    cy.get('[data-cy="taskContent"').should('contain', taskName)
    cy.get('[data-cy="taskItem"').should('have.length', 1)
  })

  it('should be disabled create button while input task is empty or with only spaces', () => {
    cy.get('[data-cy="createButton"]').should('be.disabled')
    cy.get('[data-cy="createdTasksCounter"]').should('have.text', '0')
    cy.get('[data-cy="taskItem"').should('have.length', 0)

    cy.get('[data-cy="addInput"]').type(taskNameWithOnlySpaces)
    cy.get('[data-cy="createButton"]').should('be.disabled')
    cy.get('[data-cy="createdTasksCounter"]').should('have.text', '0')
    cy.get('[data-cy="taskItem"').should('have.length', 0)
  })
})