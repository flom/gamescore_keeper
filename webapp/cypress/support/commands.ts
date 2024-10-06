/// <reference types="cypress" />
// eslint-disable-next-line import/no-extraneous-dependencies
import "@testing-library/cypress/add-commands";
import type PbGroup from "@/types/api/PbGroup";
import {
  type CreateGroupArgs,
  createGroupCommand,
} from "./impl/createGroupCommand";
import { deleteAllGroupsCommand } from "./impl/deleteAllGroupsCommand";
import { loginCommand } from "./impl/loginCommand";

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

Cypress.Commands.add("login", loginCommand);
Cypress.Commands.add("deleteAllGroups", deleteAllGroupsCommand);
Cypress.Commands.add("createGroup", createGroupCommand);
