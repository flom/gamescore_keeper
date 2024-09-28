import { getGroupKey } from "@/hooks/api/queryKeys";
import usePocketBase from "@/hooks/usePocketBase";
import type { PbGameRecordFields } from "@/types/api/PbGameRecord";
import type { GameRecord } from "@/types/GameRecord";
import { gameRecordToPbGameRecord } from "@/types/GameRecord";
import type { GameScore } from "@/types/GameScore";
import { gameScoreToPbGameScore } from "@/types/GameScore";
import {
  type QueryClient,
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import type PocketBase from "pocketbase";

export type UpdateGameRecordArgs = {
  groupId: string;
  gameRecord: GameRecord;
};

export function updateGameRecord(
  pocketBase: PocketBase,
  queryClient: QueryClient,
): UseMutationOptions<unknown, unknown, UpdateGameRecordArgs> {
  return {
    mutationFn: async (args: UpdateGameRecordArgs): Promise<void> => {
      const pbGameRecord: PbGameRecordFields = gameRecordToPbGameRecord(
        args.groupId,
        args.gameRecord,
      );

      const updatedPbGameRecord = await pocketBase
        .collection("gameRecords")
        .update(args.gameRecord.id, pbGameRecord);

      // create the game scores with newly created game record id
      const promises: Promise<unknown>[] = args.gameRecord.scores.map(
        async (score: GameScore): Promise<unknown> => {
          const pbGameScore = gameScoreToPbGameScore(
            updatedPbGameRecord.id,
            score,
          );
          return pocketBase
            .collection("gameScores")
            .update(score.id, pbGameScore, {
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

export function useUpdateGameRecord(): UseMutationResult<
  unknown,
  unknown,
  UpdateGameRecordArgs
> {
  const queryClient = useQueryClient();
  const pocketBase = usePocketBase();

  return useMutation(updateGameRecord(pocketBase, queryClient));
}
