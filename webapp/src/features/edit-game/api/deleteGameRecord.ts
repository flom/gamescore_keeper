import { getGroupKey } from "@/hooks/api/queryKeys";
import usePocketBase from "@/hooks/usePocketBase";
import {
  type QueryClient,
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import type PocketBase from "pocketbase";

export type DeleteGameRecordArgs = {
  groupId: string;
  gameRecordId: string;
};

export function deleteGameRecord(
  pocketBase: PocketBase,
  queryClient: QueryClient,
): UseMutationOptions<unknown, unknown, DeleteGameRecordArgs> {
  return {
    mutationFn: async (args: DeleteGameRecordArgs): Promise<void> => {
      await pocketBase.collection("gameRecords").delete(args.gameRecordId);

      await queryClient.invalidateQueries({
        queryKey: getGroupKey(args.groupId),
      });
    },
  };
}

export function useDeleteGameRecord(): UseMutationResult<
  unknown,
  unknown,
  DeleteGameRecordArgs
> {
  const queryClient = useQueryClient();
  const pocketBase = usePocketBase();

  return useMutation(deleteGameRecord(pocketBase, queryClient));
}
