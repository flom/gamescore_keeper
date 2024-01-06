import {
  useMutation,
  type UseMutationResult,
  useQuery,
  useQueryClient,
  type UseQueryResult,
} from "@tanstack/react-query";
import type { Group } from "@/models/Group";
import { getGroups } from "@/api/queries/getGroups";
import { createGroup, type CreateGroupArgs } from "@/api/mutations/createGroup";

function useGroups(): UseQueryResult<Group[]> {
  return useQuery(getGroups());
}

function useCreateGroup(): UseMutationResult<
  unknown,
  unknown,
  CreateGroupArgs
> {
  const queryClient = useQueryClient();

  return useMutation(createGroup(queryClient));
}

const groupHooks = {
  useGroups,
  useCreateGroup,
};

export default groupHooks;
