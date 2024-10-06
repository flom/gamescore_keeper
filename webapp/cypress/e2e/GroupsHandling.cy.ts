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

    cy.visit("/groups");
    cy.findByTestId("NavbarAddButton").click();
    cy.get("[name=name]").type(groupName).get("[type=submit]").click();

    cy.url().should("match", /\/groups$/);
    cy.contains(groupName);
  });

  it("adds group with multiple players", () => {
    const groupName = v4();

    cy.visit("/groups/add").get("[name=name]").type(groupName);
    cy.findByTestId("PlayersInputAddPlayer").click().click();
    cy.get("[type=submit]").click();

    cy.url().should("match", /\/groups$/);
    cy.findByTestId(`GroupsListListItem${groupName}`).click();
    cy.url().should("match", /\/groups\/.+/);
  });
});
