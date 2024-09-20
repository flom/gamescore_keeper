import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { createGroup, type CreateGroupArgs } from "@/api/mutations/createGroup";
import { deleteGroup, type DeleteGroupArgs } from "@/api/mutations/deleteGroup";

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
  useCreateGroup,
  useDeleteGroup,
};

export default groupsHooks;
