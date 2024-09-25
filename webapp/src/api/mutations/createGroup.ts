import type { QueryClient, UseMutationOptions } from "@tanstack/react-query";
import type { Group } from "@/types/Group";
import store from "@/api/store";
import { getGroupsKey } from "@/hooks/api/queryKeys";

export type CreateGroupArgs = {
  group: Group;
};

export function createGroup(
  queryClient: QueryClient,
): UseMutationOptions<unknown, unknown, CreateGroupArgs> {
  return {
    mutationFn: async (args: CreateGroupArgs): Promise<void> => {
      store.groups.push(args.group);

      await queryClient.invalidateQueries({
        queryKey: getGroupsKey(),
      });
    },
  };
}
