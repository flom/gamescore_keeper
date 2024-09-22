import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { createGame, type CreateGameArgs } from "@/api/mutations/createGame";
import {
  updateGameRecord,
  type UpdateGameRecordArgs,
} from "@/api/mutations/updateGameRecord";
import {
  deleteGameRecord,
  type DeleteGameRecordArgs,
} from "@/api/mutations/deleteGameRecord";

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

function useDeleteGameRecord(): UseMutationResult<
  unknown,
  unknown,
  DeleteGameRecordArgs
> {
  const queryClient = useQueryClient();

  return useMutation(deleteGameRecord(queryClient));
}

const groupHooks = {
  useCreateGame,
  useUpdateGameRecord,
  useDeleteGameRecord,
};

export default groupHooks;
