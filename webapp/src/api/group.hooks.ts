import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  type UseQueryResult,
} from "@tanstack/react-query";
import type { Group } from "@/models/Group";
import { useParams } from "react-router-dom";
import { getGroup } from "@/api/queries/getGroup";
import {
  createGameRecord,
  CreateGameRecordArgs,
} from "@/api/mutations/createGameRecord";

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

const groupHooks = {
  useGroup,
  useCreateGameRecord,
};

export default groupHooks;
