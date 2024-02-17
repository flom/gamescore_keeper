describe("Group creation", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  it("Create the group", () => {
    cy.visit("/groups");

    cy.findByTestId("NavbarAddButton").click();
  });
});
