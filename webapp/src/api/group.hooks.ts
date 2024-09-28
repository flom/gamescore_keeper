import {
  updateGameRecord,
  type UpdateGameRecordArgs,
} from "@/api/mutations/updateGameRecord";
import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

function useUpdateGameRecord(): UseMutationResult<
  unknown,
  unknown,
  UpdateGameRecordArgs
> {
  const queryClient = useQueryClient();

  return useMutation(updateGameRecord(queryClient));
}

const groupHooks = {
  useUpdateGameRecord,
};

export default groupHooks;
