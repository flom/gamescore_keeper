import type { UseQueryOptions } from "@tanstack/react-query";
import type { Group } from "@/models/Group";
import store from "@/api/store";
import { getGroupsKey } from "@/api/queryKeys";

export function getGroups(): UseQueryOptions<Group[]> {
  return {
    queryKey: getGroupsKey(),
    queryFn: async (): Promise<Group[]> => store.groups,
  };
}
