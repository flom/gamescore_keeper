import { getGroupsKey } from "@/hooks/api/queryKeys";
import usePocketBase from "@/hooks/usePocketBase";
import {
  type QueryClient,
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import type PocketBase from "pocketbase";

type DeleteGroupArgs = {
  groupId: string;
};

function deleteGroup(
  pocketBase: PocketBase,
  queryClient: QueryClient,
): UseMutationOptions<unknown, unknown, DeleteGroupArgs> {
  return {
    mutationFn: async (args: DeleteGroupArgs): Promise<void> => {
      await pocketBase.collection("groups").delete(args.groupId);

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
  const pocketBase = usePocketBase();

  return useMutation(deleteGroup(pocketBase, queryClient));
}
