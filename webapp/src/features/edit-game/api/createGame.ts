import { getGroupKey } from "@/hooks/api/queryKeys";
import usePocketBase from "@/hooks/usePocketBase";
import type { PbGameFields } from "@/types/api/PbGame";
import {
  type QueryClient,
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import type PocketBase from "pocketbase";
import type { RecordModel } from "pocketbase";

export type CreateGameArgs = {
  groupId: string;
  gameName: string;
};

export function createGame(
  pocketBase: PocketBase,
  queryClient: QueryClient,
): UseMutationOptions<string, unknown, CreateGameArgs> {
  return {
    mutationFn: async (args: CreateGameArgs): Promise<string> => {
      const newGame: PbGameFields = {
        name: args.gameName,
        group: args.groupId,
      };
      const createdGame: RecordModel = await pocketBase
        .collection("games")
        .create(newGame);

      await queryClient.invalidateQueries({
        queryKey: getGroupKey(args.groupId),
      });

      return createdGame.id;
    },
  };
}

export function useCreateGame(): UseMutationResult<
  string,
  unknown,
  CreateGameArgs
> {
  const queryClient = useQueryClient();
  const pocketBase = usePocketBase();

  return useMutation(createGame(pocketBase, queryClient));
}
