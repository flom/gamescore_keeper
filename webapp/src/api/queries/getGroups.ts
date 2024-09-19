import type { UseQueryOptions } from "@tanstack/react-query";
import { type Group, GroupSchema } from "@/models/Group";
import { getGroupsKey } from "@/api/queryKeys";
import type PocketBase from "pocketbase";
import type { ListResult } from "pocketbase";
import type PbGroup from "@/types/api/PbGroup";

export function getGroups(pocketBase: PocketBase): UseQueryOptions<Group[]> {
  return {
    queryKey: getGroupsKey(),
    queryFn: async (): Promise<Group[]> => {
      const pbGroups: ListResult<PbGroup> = await pocketBase
        .collection("groups")
        .getList<PbGroup>(1, 50, {
          expand: "players_via_groupId",
        });

      return GroupSchema.array().parse(
        pbGroups.items.map((pbGroup: PbGroup) => ({
          ...pbGroup,
          players: pbGroup.expand?.players_via_groupId,
        })),
      );
    },
  };
}
