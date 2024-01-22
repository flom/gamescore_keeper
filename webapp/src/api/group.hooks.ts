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

function useGroup(): UseQueryResult<Group> {
  const { groupId } = useParams();

  return useQuery(getGroup(groupId));
}

function useCreateGameRecord(): UseMutationResult<
  unknown,
  unknown,
  CreateGameRecordArgs
> {
  const queryClient = useQueryClient();

  return useMutation(createGameRecord(queryClient));
}

function useCreateGame(): UseMutationResult<string, unknown, CreateGameArgs> {
  const queryClient = useQueryClient();

  return useMutation(createGame(queryClient));
}

const groupHooks = {
  useGroup,
  useCreateGameRecord,
  useCreateGame,
};

export default groupHooks;
