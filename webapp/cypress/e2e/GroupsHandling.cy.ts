import { v4 } from "uuid";

describe("Groups page", () => {
  before(() => {
    cy.deleteAllGroups();
  });

  it("lists groups after they are created", () => {
    cy.login();
    const groupName = v4();
    cy.visit("/groups")
      .get("[data-testid=NavbarAddButton]")
      .click()
      .get("[name=name]")
      .type(groupName)
      .get("[type=submit]")
      .click();

    cy.url().should("match", /\/groups$/);
    cy.contains(groupName);
  });
});
