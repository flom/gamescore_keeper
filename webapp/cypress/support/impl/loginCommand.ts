export function loginCommand(): Cypress.Chainable<void> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return cy
    .fixture("credentials")
    .then((credentials: { username: string; password: string }) => {
      cy.session(credentials.username, () => {
        cy.visit("/")
          .get("[name=userName]")
          .type(credentials.username)
          .get("[name=password]")
          .type(credentials.password)
          .get("[type=submit]")
          .click();

        cy.url().should("include", "/groups");
      });
    });
}
