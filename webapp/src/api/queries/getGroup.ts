import type { UseQueryOptions } from "@tanstack/react-query";
import { type Group, GroupSchema } from "@/models/Group";
import store from "@/api/store";
import { getGroupKey } from "@/api/queryKeys";

export function getGroup(groupId: string | undefined): UseQueryOptions<Group> {
  return {
    queryKey: getGroupKey(groupId ?? ""),
    queryFn: async (): Promise<Group> =>
      store.groups.find((g) => g.id === groupId) ?? GroupSchema.parse({}),
    enabled: !!groupId,
  };
}
