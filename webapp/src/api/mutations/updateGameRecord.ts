import type { GameRecord } from "@/models/GameRecord";
import type { QueryClient, UseMutationOptions } from "@tanstack/react-query";
import type { Group } from "@/models/Group";
import store from "@/api/store";
import { getGroupKey } from "@/api/queryKeys";

export type UpdateGameRecordArgs = {
  groupId: string;
  gameRecord: GameRecord;
};

export function updateGameRecord(
  queryClient: QueryClient,
): UseMutationOptions<unknown, unknown, UpdateGameRecordArgs> {
  return {
    mutationFn: async (args: UpdateGameRecordArgs): Promise<void> => {
      const group: Group | undefined = store.groups.find(
        (g: Group) => g.id === args.groupId,
      );

      if (group) {
        group.records = group.records.map((record: GameRecord) => {
          if (record.id === args.gameRecord.id) {
            return args.gameRecord;
          }

          return record;
        });

        // todo: optimistic update of queryClient cache with new entry
        await queryClient.invalidateQueries({
          queryKey: getGroupKey(args.groupId),
        });
      }
    },
  };
}
