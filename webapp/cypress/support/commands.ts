/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface Chainable {
      login: () => Chainable<void>;
      deleteAllGroups: () => Chainable<void>;
      // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

Cypress.Commands.add("login", () => {
  cy.fixture("credentials").then(
    (credentials: { username: string; password: string }) => {
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
    },
  );
});

Cypress.Commands.add("deleteAllGroups", () => {
  cy.fixture("credentials").then(
    (credentials: { username: string; password: string }) => {
      cy.request("POST", "/api/collections/users/auth-with-password", {
        identity: credentials.username,
        password: credentials.password,
      }).then((response: { body: { token: string } }) => {
        const authToken: string = response.body.token;
        cy.request({
          url: "/api/collections/groups/records",
          method: "GET",
          headers: {
            Authorization: authToken,
          },
        }).then((groupsResponse: { body: { items: { id: string }[] } }) => {
          for (const group of groupsResponse.body.items) {
            cy.request({
              url: `/api/collections/groups/records/${group.id}`,
              method: "DELETE",
              headers: {
                Authorization: authToken,
              },
            });
          }
        });
      });
    },
  );
});
