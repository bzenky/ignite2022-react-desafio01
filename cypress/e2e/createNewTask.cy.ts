describe('Create task flow', () => {
  it('should allow to create a new task if it doesn\'t exist yet', () => {
    cy.visit('/')
    cy.get('input').as('taskInput')
    cy.get('button').contains('Criar').as('createTaskButton')

    cy.get('@taskInput').type('Task Teste 01')
    cy.get('@createTaskButton').click()

    cy.get('div').should('contain', 'Tarefa cadastrada !')
    cy.get('.tasksCreated > span').should('have.text', '1')
    cy.get('[data-rbd-droppable-id="droppable-area"]').should('have.length', 1)
  })

  it('should not allow to create a new task if it already exists', () => {
    cy.visit('/')
    cy.get('input').as('taskInput')
    cy.get('button').contains('Criar').as('createTaskButton')

    cy.get('@taskInput').type('Task Teste 01')
    cy.get('@createTaskButton').click()

    cy.get('@taskInput').type('Task Teste 01')
    cy.get('@createTaskButton').click()

    cy.get('div').should('contain', 'Tarefa já cadastrada !')
    cy.get('.tasksCreated > span').should('have.text', '1')
    cy.get('[data-rbd-droppable-id="droppable-area"]').should('have.length', 1)
  })

  it('should be disabled create button when input task is empty or with only spaces', () => {
    cy.visit('/')
    cy.get('input').as('taskInput')
    cy.get('button').contains('Criar').as('createTaskButton')

    cy.get('@createTaskButton').should('be.disabled')
    cy.get('.tasksCreated > span').should('have.text', '0')
    cy.get('[data-rbd-droppable-id="droppable-area"]').should('have.length', 0)

    cy.get('@taskInput').type('    ')
    cy.get('@createTaskButton').should('be.disabled')
    cy.get('.tasksCreated > span').should('have.text', '0')
    cy.get('[data-rbd-droppable-id="droppable-area"]').should('have.length', 0)
  })
})