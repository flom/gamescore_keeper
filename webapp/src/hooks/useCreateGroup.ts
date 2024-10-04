import { getGroupsKey } from "@/hooks/api/queryKeys";
import usePocketBase from "@/hooks/usePocketBase";
import { type Group, groupToPbGroup } from "@/types/Group";
import { type Player, playerToPbPlayer } from "@/types/Player";
import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import type PocketBase from "pocketbase";
import { v4 } from "uuid";
import type PbGroup from "@/types/api/PbGroup";
import type { PbGroupFields } from "@/types/api/PbGroup";

type CreateGroupArgs = {
  group: Group;
};

export async function createGroup(
  pocketBase: PocketBase,
  args: CreateGroupArgs,
): Promise<PbGroup> {
  const userId = pocketBase.authStore.model?.id as string | undefined;
  if (!userId) {
    throw new Error("missing userid");
  }

  const pbGroup: PbGroupFields = groupToPbGroup(args.group, [userId]);
  const newPbGroup = await pocketBase
    .collection<PbGroup>("groups")
    .create(pbGroup);

  const promises: Promise<unknown>[] = args.group.players.map(
    async (player: Player): Promise<unknown> =>
      pocketBase
        .collection("players")
        .create(playerToPbPlayer(player, newPbGroup.id), {
          requestKey: v4(),
        }),
  );
  await Promise.all(promises);

  return newPbGroup;
}

export default function useCreateGroup(): UseMutationResult<
  unknown,
  unknown,
  CreateGroupArgs
> {
  const queryClient = useQueryClient();
  const pocketBase = usePocketBase();

  return useMutation({
    mutationFn: async (args: CreateGroupArgs): Promise<void> => {
      await createGroup(pocketBase, args);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: getGroupsKey(),
      });
    },
  });
}
