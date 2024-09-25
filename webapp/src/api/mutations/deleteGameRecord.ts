import type { QueryClient, UseMutationOptions } from "@tanstack/react-query";
import type { Group } from "@/types/Group";
import store from "@/api/store";
import { getGroupKey } from "@/hooks/api/queryKeys";
import type { GameRecord } from "@/types/GameRecord";

export type DeleteGameRecordArgs = {
  groupId: string;
  gameRecordId: string;
};

export function deleteGameRecord(
  queryClient: QueryClient,
): UseMutationOptions<unknown, unknown, DeleteGameRecordArgs> {
  return {
    mutationFn: async (args: DeleteGameRecordArgs): Promise<void> => {
      const group: Group | undefined = store.groups.find(
        (g: Group) => g.id === args.groupId,
      );

      if (group) {
        group.records = group.records.filter(
          (record: GameRecord) => record.id !== args.gameRecordId,
        );

        await queryClient.invalidateQueries({
          queryKey: getGroupKey(args.groupId),
        });
      }
    },
  };
}
