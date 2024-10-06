import { getGroupsKey } from "@/hooks/api/queryKeys";
import usePocketBase from "@/hooks/usePocketBase";
import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import type PocketBase from "pocketbase";
import { v4 } from "uuid";

type DeleteGroupArgs = {
  groupId: string;
  generateRequestKey?: boolean;
};

export async function deleteGroup(
  pocketBase: PocketBase,
  args: DeleteGroupArgs,
): Promise<void> {
  await pocketBase.collection("groups").delete(args.groupId, {
    requestKey: args.generateRequestKey ? v4() : undefined,
  });
}

export function useDeleteGroup(): UseMutationResult<
  unknown,
  unknown,
  DeleteGroupArgs
> {
  const queryClient = useQueryClient();
  const pocketBase = usePocketBase();

  return useMutation({
    mutationFn: async (args: DeleteGroupArgs) => {
      await deleteGroup(pocketBase, args);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: getGroupsKey(),
      });
    },
  });
}
