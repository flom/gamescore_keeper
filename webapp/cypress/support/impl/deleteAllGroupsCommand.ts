import { deleteGroup } from "@/features/group/api/deleteGroup";
import type { RecordModel } from "pocketbase";
import PocketBase from "pocketbase";

export function deleteAllGroupsCommand(): Cypress.Chainable<void> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return cy
    .fixture("credentials")
    .then(async (credentials: { username: string; password: string }) => {
      const pb = new PocketBase("/");

      await pb
        .collection("users")
        .authWithPassword(credentials.username, credentials.password);

      const groups = await pb.collection("groups").getList();
      const promises = groups.items.map(async (item: RecordModel) =>
        deleteGroup(pb, {
          groupId: item.id,
          generateRequestKey: true,
        }),
      );
      await Promise.all(promises);
    });
}
