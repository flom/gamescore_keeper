import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { Group } from "@/models/Group";
import { useParams } from "react-router-dom";
import { getGroup } from "@/api/queries/getGroup";

function useGroup(): UseQueryResult<Group> {
  const { groupId } = useParams();

  return useQuery(getGroup(groupId));
}

const groupHooks = {
  useGroup,
};

export default groupHooks;
