import type { QueryClient, UseMutationOptions } from "@tanstack/react-query";
import type { GameRecord } from "@/types/GameRecord";
import type { Group } from "@/types/Group";
import store from "@/api/store";
import { getGroupKey } from "@/api/queryKeys";

export type CreateGameRecordArgs = {
  groupId: string;
  gameRecord: GameRecord;
};

export function createGameRecord(
  queryClient: QueryClient,
): UseMutationOptions<unknown, unknown, CreateGameRecordArgs> {
  return {
    mutationFn: async (args: CreateGameRecordArgs): Promise<void> => {
      const group: Group | undefined = store.groups.find(
        (g: Group) => g.id === args.groupId,
      );

      if (group) {
        group.records = [args.gameRecord, ...group.records];
        await queryClient.invalidateQueries({
          queryKey: getGroupKey(args.groupId),
        });
      }
    },
  };
}
