import type { ReactElement } from "react";
import groupHooks from "@/api/group.hooks";
import type { Group } from "@/models/Group";
import GroupItem from "@/components/groups/GroupItem";

function GroupSelectionList(): ReactElement {
  const { data: groups = [] } = groupHooks.useGroups();

  return (
    <div className="flex w-full flex-col items-stretch">
      {groups.map((group: Group) => (
        <GroupItem key={group.id} group={group} />
      ))}
    </div>
  );
}

export default GroupSelectionList;
