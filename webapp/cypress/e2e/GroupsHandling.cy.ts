import { v4 } from "uuid";

describe("Groups page", () => {
  before(() => {
    cy.deleteAllGroups();
  });

  beforeEach(() => {
    cy.login();
  });

  it("lists groups after they are created", () => {
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

  it("adds group with multiple players", () => {
    const groupName = v4();

    cy.visit("/groups/add")
      .get("[name=name]")
      .type(groupName)
      .get("[data-testid=PlayersInputAddPlayer]")
      .click()
      .click()
      .get("[type=submit]")
      .click();

    cy.url().should("match", /\/groups$/);
    cy.get(`[data-testid=GroupsListListItem${groupName}]`).click();
    cy.url().should("match", /\/groups\/.+/);
  });
});
