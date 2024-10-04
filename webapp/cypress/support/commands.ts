/// <reference types="cypress" />
import { createGroup } from "@/hooks/useCreateGroup";
import type PbGroup from "@/types/api/PbGroup";
import { type Group, GroupSchema } from "@/types/Group";
import { type Player, PlayerSchema } from "@/types/Player";
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
import PocketBase from "pocketbase";
import { v4 } from "uuid";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface Chainable {
      login: () => Chainable<void>;
      deleteAllGroups: () => Chainable<void>;
      createGroup: (args?: CreateGroupArgs) => Chainable<PbGroup>;
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

type CreateGroupArgs = {
  groupName?: string;
  players?: Partial<Player>[];
};

Cypress.Commands.add("createGroup", (args?: CreateGroupArgs) => {
  const fullArgs: Required<CreateGroupArgs> = {
    groupName: v4(),
    players: [],
    ...args,
  };

  cy.fixture("credentials").then(
    async (credentials: { username: string; password: string }) => {
      const pb = new PocketBase("/");

      await pb
        .collection("users")
        .authWithPassword(credentials.username, credentials.password);

      const partialGroup: Partial<Group> = {
        name: fullArgs.groupName,
        players: PlayerSchema.array().parse(fullArgs.players),
      };
      const createdGroup: PbGroup = await createGroup(pb, {
        group: GroupSchema.parse(partialGroup),
      });

      return createdGroup;
    },
  );
});
