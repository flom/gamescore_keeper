import type PbGroup from "../../src/types/api/PbGroup";

describe("Group page", () => {
  before(() => {
    cy.deleteAllGroups();
  });

  beforeEach(() => {
    cy.login();
  });

  it("deletes the group", () => {
    cy.createGroup()
      .as("group")
      .get<PbGroup>("@group")
      .then((group: PbGroup) => cy.visit(`/groups/${group.id}`))
      .get("[data-testid=NavbarEditButton]")
      .click()
      .get("[data-testid=EditGroupDeleteButton]")
      .click()
      .get("[data-testid=EditGroupDeleteConfirmButton]")
      .click()
      .get<PbGroup>("@group")
      .then((group: PbGroup) =>
        cy.get(`[data-testid=GroupsListListItem${group.name}]`),
      )
      .should("not.exist");
  });

  it("creates a new game entry", () => {
    cy.createGroup({
      players: [
        {
          name: "Player1",
        },
        {
          name: "Player2",
        },
      ],
    })
      .as("group")
      .get<PbGroup>("@group")
      .then((group: PbGroup) => cy.visit(`/groups/${group.id}`))
      .get("[data-testid=NavbarAddButton]")
      .click()
      .get("[data-testid=GameSelectionButton]")
      .click()
      .get("[data-testid=GameSelectionSearchInput]")
      .type("TestGame{enter}")
      .get("[data-testid=PlayerScoreInputScoreButton]:eq(0)")
      .click()
      .get("[data-testid=PlayerScoreInputScoreButton]:eq(1)")
      .click()
      .get("[type=submit]")
      .click();

    cy.url({ timeout: 10_000 }).should("not.include", "add-game");
    cy.get("[data-testid=SingleGameScoreItem]").its("length").should("eq", 1);
  });
});
