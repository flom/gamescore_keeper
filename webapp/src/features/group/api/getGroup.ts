import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
import { type Group, GroupSchema } from "@/types/Group";
import { useParams } from "react-router-dom";
import { getGroupKey } from "@/api/queryKeys";
import type PocketBase from "pocketbase";
import usePocketBase from "@/hooks/usePocketBase";
import type PbGroup from "@/types/api/PbGroup";

export function getGroup(
  pocketBase: PocketBase,
  groupId: string | undefined,
): UseQueryOptions<Group> {
  return {
    queryKey: getGroupKey(groupId ?? ""),
    queryFn: async (): Promise<Group> => {
      const pbGroup: PbGroup = await pocketBase
        .collection("groups")
        .getOne<PbGroup>(groupId ?? "", {
          expand: "players_via_groupId",
        });

      return GroupSchema.parse({
        ...pbGroup,
        players: pbGroup.expand?.players_via_groupId,
      });
    },
    enabled: !!groupId,
  };
}

export function useGroup(): UseQueryResult<Group> {
  const { groupId } = useParams();
  const pocketBase = usePocketBase();

  return useQuery(getGroup(pocketBase, groupId));
}
