import store from "@/api/store";
import { getGroupsKey } from "@/hooks/api/queryKeys";
import type { Group } from "@/types/Group";
import {
  type QueryClient,
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

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

export function useDeleteGroup(): UseMutationResult<
  unknown,
  unknown,
  DeleteGroupArgs
> {
  const queryClient = useQueryClient();

  return useMutation(deleteGroup(queryClient));
}
