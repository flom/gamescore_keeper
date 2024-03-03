import {
  useMutation,
  type UseMutationResult,
  useQuery,
  useQueryClient,
  type UseQueryResult,
} from "@tanstack/react-query";
import type { Group } from "@/models/Group";
import { useParams } from "react-router-dom";
import { getGroup } from "@/api/queries/getGroup";
import {
  createGameRecord,
  type CreateGameRecordArgs,
} from "@/api/mutations/createGameRecord";
import { createGame, type CreateGameArgs } from "@/api/mutations/createGame";
import {
  updateGameRecord,
  type UpdateGameRecordArgs,
} from "@/api/mutations/updateGameRecord";
import {
  deleteGameRecord,
  type DeleteGameRecordArgs,
} from "@/api/mutations/deleteGameRecord";

function useGroup(): UseQueryResult<Group> {
  const { groupId } = useParams();

  return useQuery(getGroup(groupId));
}

function useCreateGame(): UseMutationResult<string, unknown, CreateGameArgs> {
  const queryClient = useQueryClient();

  return useMutation(createGame(queryClient));
}

function useCreateGameRecord(): UseMutationResult<
  unknown,
  unknown,
  CreateGameRecordArgs
> {
  const queryClient = useQueryClient();

  return useMutation(createGameRecord(queryClient));
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
  useGroup,
  useCreateGame,
  useCreateGameRecord,
  useUpdateGameRecord,
  useDeleteGameRecord,
};

export default groupHooks;
