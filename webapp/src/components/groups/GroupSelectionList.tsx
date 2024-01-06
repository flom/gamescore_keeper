import type { ReactElement } from "react";
import groupHooks from "@/api/group.hooks";
import Container from "@/components/compositions/Container";
import type { Group } from "@/models/Group";
import GroupItem from "@/components/groups/GroupItem";

function GroupSelectionList(): ReactElement {
  const { data: groups = [] } = groupHooks.useGroups();

  return (
    // <Container>
    <div className="flex w-full flex-col items-stretch">
      {groups.map((group: Group) => (
        <GroupItem key={group.id} group={group} />
      ))}
    </div>
    // </Container>
  );
}

export default GroupSelectionList;
