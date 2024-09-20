import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
import { type Group, GroupSchema } from "@/types/Group";
import usePocketBase from "@/hooks/usePocketBase";
import type PocketBase from "pocketbase";
import type { ListResult } from "pocketbase";
import { getGroupsKey } from "@/api/queryKeys";
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

export function useGroups(): UseQueryResult<Group[]> {
  const pocketBase = usePocketBase();

  return useQuery(getGroups(pocketBase));
}
