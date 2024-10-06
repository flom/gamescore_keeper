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
      .then((group: PbGroup) => cy.visit(`/groups/${group.id}`));
    cy.findByTestId("NavbarEditButton").click();
    cy.findByTestId("EditGroupDeleteButton").click();
    cy.findByTestId("EditGroupDeleteConfirmButton").click();
    cy.get<PbGroup>("@group")
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
      .then((group: PbGroup) => cy.visit(`/groups/${group.id}`));

    cy.findByTestId("NavbarAddButton").click();
    cy.findByTestId("GameSelectionButton").click();
    cy.findByTestId("GameSelectionSearchInput").type("TestGame{enter}");
    cy.findAllByTestId("PlayerScoreInputScoreButton").first().click();
    cy.findAllByTestId("PlayerScoreInputScoreButton").eq(1).click();
    cy.get("[type=submit]").click();

    cy.url({ timeout: 10_000 }).should("not.include", "add-game");
    cy.findAllByTestId("SingleGameScoreItem").its("length").should("eq", 1);
  });
});
