import { createGame, type CreateGameArgs } from "@/api/mutations/createGame";
import {
  updateGameRecord,
  type UpdateGameRecordArgs,
} from "@/api/mutations/updateGameRecord";
import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

function useCreateGame(): UseMutationResult<string, unknown, CreateGameArgs> {
  const queryClient = useQueryClient();

  return useMutation(createGame(queryClient));
}

function useUpdateGameRecord(): UseMutationResult<
  unknown,
  unknown,
  UpdateGameRecordArgs
> {
  const queryClient = useQueryClient();

  return useMutation(updateGameRecord(queryClient));
}

const groupHooks = {
  useCreateGame,
  useUpdateGameRecord,
};

export default groupHooks;
