import {
  type QueryClient,
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { type GameRecord, gameRecordToPbGameRecord } from "@/types/GameRecord";
import { getGroupKey } from "@/api/queryKeys";
import usePocketBase from "@/hooks/usePocketBase";
import type PocketBase from "pocketbase";

type CreateGameRecordArgs = {
  groupId: string;
  gameRecord: GameRecord;
};

function createGameRecord(
  queryClient: QueryClient,
  pocketBase: PocketBase,
): UseMutationOptions<unknown, unknown, CreateGameRecordArgs> {
  return {
    mutationFn: async (args: CreateGameRecordArgs): Promise<void> => {
      const record = await pocketBase
        .collection("gameRecords")
        .create(gameRecordToPbGameRecord(args.gameRecord));

      await queryClient.invalidateQueries({
        queryKey: getGroupKey(args.groupId),
      });
    },
  };
}

export function useCreateGameRecord(): UseMutationResult<
  unknown,
  unknown,
  CreateGameRecordArgs
> {
  const queryClient = useQueryClient();
  const pocketBase = usePocketBase();

  return useMutation(createGameRecord(queryClient, pocketBase));
}
