import { getGroupKey } from "@/hooks/api/queryKeys";
import usePocketBase from "@/hooks/usePocketBase";
import { type Group, groupToPbGroup } from "@/types/Group";
import {
  type QueryClient,
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import type PocketBase from "pocketbase";

type Args = {
  group: Group;
};

function updateGroup(
  pocketBase: PocketBase,
  queryClient: QueryClient,
): UseMutationOptions<unknown, unknown, Args> {
  return {
    mutationFn: async (args: Args): Promise<void> => {
      const pbGroup = groupToPbGroup(args.group);

      await pocketBase.collection("groups").update(args.group.id, pbGroup);

      await queryClient.invalidateQueries({
        queryKey: getGroupKey(args.group.id),
      });
    },
  };
}

export function useUpdateGroup(): UseMutationResult<unknown, unknown, Args> {
  const queryClient = useQueryClient();
  const pocketBase = usePocketBase();

  return useMutation(updateGroup(pocketBase, queryClient));
}
