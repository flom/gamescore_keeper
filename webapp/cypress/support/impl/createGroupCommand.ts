import { createGroup } from "@/hooks/useCreateGroup";
import type PbGroup from "@/types/api/PbGroup";
import type { Group } from "@/types/Group";
import { GroupSchema } from "@/types/Group";
import type { Player } from "@/types/Player";
import { PlayerSchema } from "@/types/Player";
import PocketBase from "pocketbase";
import { v4 } from "uuid";

export type CreateGroupArgs = {
  groupName?: string;
  players?: Partial<Player>[];
};

export function createGroupCommand(
  args?: CreateGroupArgs,
): Cypress.Chainable<PbGroup> {
  const fullArgs: Required<CreateGroupArgs> = {
    groupName: v4(),
    players: [],
    ...args,
  };

  return cy
    .fixture("credentials")
    .then(async (credentials: { username: string; password: string }) => {
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
    });
}
