import {
  type QueryClient,
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { type Group, groupToPbGroup } from "@/types/Group";
import { getGroupsKey } from "@/hooks/api/queryKeys";
import usePocketBase from "@/hooks/usePocketBase";
import type PocketBase from "pocketbase";
import type { PbGroupFields } from "@/types/api/PbGroup";
import { type Player, playerToPbPlayer } from "@/types/Player";
import { v4 } from "uuid";

type CreateGroupArgs = {
  group: Group;
};

function createGroup(
  pocketBase: PocketBase,
  queryClient: QueryClient,
): UseMutationOptions<unknown, unknown, CreateGroupArgs> {
  return {
    mutationFn: async (args: CreateGroupArgs): Promise<void> => {
      const userId = pocketBase.authStore.model?.id as string | undefined;
      if (!userId) {
        return;
      }

      const pbGroup: PbGroupFields = groupToPbGroup(args.group, [userId]);
      const newPbGroup = await pocketBase.collection("groups").create(pbGroup);

      const promises: Promise<unknown>[] = args.group.players.map(
        async (player: Player): Promise<unknown> =>
          pocketBase
            .collection("players")
            .create(playerToPbPlayer(player, newPbGroup.id), {
              requestKey: v4(),
            }),
      );
      await Promise.all(promises);

      await queryClient.invalidateQueries({
        queryKey: getGroupsKey(),
      });
    },
  };
}

export default function useCreateGroup(): UseMutationResult<
  unknown,
  unknown,
  CreateGroupArgs
> {
  const queryClient = useQueryClient();
  const pocketBase = usePocketBase();

  return useMutation(createGroup(pocketBase, queryClient));
}
