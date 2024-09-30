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
});
