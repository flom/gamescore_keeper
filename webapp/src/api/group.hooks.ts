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
import { getGroup } from "@/api/queries/getGroup";
import { useParams } from "react-router-dom";

function useGroups(): UseQueryResult<Group[]> {
  return useQuery(getGroups());
}

function useGroup(): UseQueryResult<Group> {
  const { groupId } = useParams();

  return useQuery(getGroup(groupId));
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
  useGroup,
  useCreateGroup,
};

export default groupHooks;
