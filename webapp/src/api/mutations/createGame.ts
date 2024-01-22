import type { QueryClient, UseMutationOptions } from "@tanstack/react-query";
import type { Group } from "@/models/Group";
import store from "@/api/store";
import { getGroupKey } from "@/api/queryKeys";
import { GameSchema } from "@/models/Game";
import { v4 } from "uuid";

export type CreateGameArgs = {
  groupId: string;
  gameName: string;
};

export function createGame(
  queryClient: QueryClient,
): UseMutationOptions<string, unknown, CreateGameArgs> {
  return {
    mutationFn: async (args: CreateGameArgs): Promise<string> => {
      const group: Group | undefined = store.groups.find(
        (g: Group) => g.id === args.groupId,
      );

      if (group) {
        const gameId = v4();
        group.games = [
          ...group.games,
          GameSchema.parse({ id: gameId, name: args.gameName }),
        ];

        await queryClient.invalidateQueries({
          queryKey: getGroupKey(args.groupId),
        });

        return gameId;
      }

      throw new Error("no group found");
    },
  };
}
