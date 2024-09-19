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
import { deleteGroup, type DeleteGroupArgs } from "@/api/mutations/deleteGroup";
import usePocketBase from "@/hooks/usePocketBase";

function useGroups(): UseQueryResult<Group[]> {
  const pocketBase = usePocketBase();

  return useQuery(getGroups(pocketBase));
}

function useCreateGroup(): UseMutationResult<
  unknown,
  unknown,
  CreateGroupArgs
> {
  const queryClient = useQueryClient();

  return useMutation(createGroup(queryClient));
}

function useDeleteGroup(): UseMutationResult<
  unknown,
  unknown,
  DeleteGroupArgs
> {
  const queryClient = useQueryClient();

  return useMutation(deleteGroup(queryClient));
}

const groupsHooks = {
  useGroups,
  useCreateGroup,
  useDeleteGroup,
};

export default groupsHooks;
