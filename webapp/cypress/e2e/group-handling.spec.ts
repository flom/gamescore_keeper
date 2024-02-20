function createGroup() {
  cy.findByTestId("NavbarAddButton").click();
}

function addPlayer() {
  cy.findByTestId("PlayersInputAddPlayer").click();
}

function editPlayer(index: number, name: string, initials: string) {
  cy.findByTestId(`PlayersInput.${index}.name`)
    .click()
    .type(`{selectall}${name}`);
  cy.findByTestId(`PlayersInput.${index}.initials`)
    .click()
    .type(`{selectall}${initials}`);
}

function submitGroup() {
  cy.findByTestId("PlayersInputSubmit").click();
}

describe("Group creation", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
    cy.visit("/groups");
  });

  it("navigates back to overview in creation form", () => {
    createGroup();
  });

  it("Create the group", () => {
    createGroup();

    addPlayer();
    addPlayer();
    editPlayer(0, "Player1", "AB");
    editPlayer(1, "Player2", "CD");
    editPlayer(2, "Player3", "EF");
    submitGroup();

    cy.contains("AB - CD - EF").should("exist");
  });
});
