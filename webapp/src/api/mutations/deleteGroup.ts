import type { QueryClient, UseMutationOptions } from "@tanstack/react-query";
import store from "@/api/store";
import type { Group } from "@/types/Group";
import { getGroupsKey } from "@/hooks/api/queryKeys";

export type DeleteGroupArgs = {
  groupId: string;
};

export function deleteGroup(
  queryClient: QueryClient,
): UseMutationOptions<unknown, unknown, DeleteGroupArgs> {
  return {
    mutationFn: async (args: DeleteGroupArgs): Promise<void> => {
      store.groups = store.groups.filter(
        (group: Group) => group.id !== args.groupId,
      );

      await queryClient.invalidateQueries({
        queryKey: getGroupsKey(),
      });
    },
  };
}
