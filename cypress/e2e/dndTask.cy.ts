describe("Drag and drop flow", () => {
  const firstTask = "Test Task 01";
  const secondTask = "Test Task 02";
  const thirdTask = "Test Task 03";

  beforeEach(() => {
    cy.visit("/");
    cy.createTasks().as("tasks");
  });

  it("should update task order", () => {
    cy.get('[data-cy="taskContent"]').eq(0).should("have.text", thirdTask);
    cy.get('[data-cy="taskContent"]').eq(1).should("have.text", secondTask);
    cy.get('[data-cy="taskContent"]').eq(2).should("have.text", firstTask);

    // Change task 01 with task 02 order
    cy.get('[data-cy="taskItem"]')
      .eq(1)
      .realMouseDown({ button: "left", position: "center" })
      .realMouseMove(0, 10, { position: "center" })
      .wait(200);

    cy.get('[data-cy="taskItem"]')
      .eq(2)
      .realMouseMove(0, 0, { position: "center" })
      .realMouseUp();

    cy.get('[data-cy="taskContent"]').eq(0).should("have.text", thirdTask);
    cy.get('[data-cy="taskContent"]').eq(1).should("have.text", secondTask);
    cy.get('[data-cy="taskContent"]').eq(2).should("have.text", firstTask);

    // Change task 03 into the last position
    //
    cy.get('[data-cy="taskItem"]')
      .eq(0)
      .realMouseDown({ button: "left", position: "center" })
      .realMouseMove(0, 10, { position: "center" })
      .wait(200);

    cy.get('[data-cy="taskItem"]')
      .eq(2)
      .realMouseMove(0, 0, { position: "center" })
      .realMouseUp()
      .wait(200);

    cy.get('[data-cy="taskContent"]').eq(0).should("have.text", firstTask);
    cy.get('[data-cy="taskContent"]').eq(1).should("have.text", secondTask);
    cy.get('[data-cy="taskContent"]').eq(2).should("have.text", thirdTask);

    cy.get('[data-cy="taskItem"]').should("have.length", 3);
  });
});
