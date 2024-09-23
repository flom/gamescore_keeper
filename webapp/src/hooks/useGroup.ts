import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
import { type Group, mapPbGroup } from "@/types/Group";
import { useParams } from "react-router-dom";
import { getGroupKey } from "@/api/queryKeys";
import type PocketBase from "pocketbase";
import usePocketBase from "@/hooks/usePocketBase";
import type PbGroup from "@/types/api/PbGroup";

function getGroup(
  pocketBase: PocketBase,
  groupId: string | undefined,
): UseQueryOptions<Group> {
  return {
    queryKey: getGroupKey(groupId ?? ""),
    queryFn: async (): Promise<Group> => {
      const pbGroup: PbGroup = await pocketBase
        .collection("groups")
        .getOne<PbGroup>(groupId ?? "", {
          expand:
            "players_via_group,games_via_group,gameRecords_via_group.gameScores_via_gameRecord",
        });

      return mapPbGroup(pbGroup);
    },
    enabled: !!groupId,
  };
}

export default function useGroup(): UseQueryResult<Group> {
  const { groupId } = useParams();
  const pocketBase = usePocketBase();

  return useQuery(getGroup(pocketBase, groupId));
}
