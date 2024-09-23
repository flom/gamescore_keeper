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
import type { PbGameRecordFields } from "@/types/api/PbGameRecord";
import { GameScore, gameScoreToPbGameScore } from "@/types/GameScore";

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
      const pbGameRecord: PbGameRecordFields = gameRecordToPbGameRecord(
        args.groupId,
        args.gameRecord,
      );

      // create a new game record
      const newPbGameRecord = await pocketBase
        .collection("gameRecords")
        .create(pbGameRecord);

      // create the game scores with newly created game record id
      const promises: Promise<unknown>[] = args.gameRecord.scores.map(
        async (score: GameScore): Promise<unknown> => {
          const pbGameScore = gameScoreToPbGameScore(newPbGameRecord.id, score);
          return pocketBase.collection("gameScores").create(pbGameScore, {
            requestKey: score.playerId,
          });
        },
      );
      await Promise.all(promises);

      // reload the group
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
