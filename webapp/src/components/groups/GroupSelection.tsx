import type { ReactElement } from "react";
import groupHooks from "@/api/group.hooks";
import { getGroupLabel, type Group } from "@/models/Group";
import { List } from "@/components/compositions/list";
import ListLinkItem from "@/components/compositions/list/ListLinkItem";

function GroupSelection(): ReactElement {
  const { data: groups = [] } = groupHooks.useGroups();

  return (
    <List>
      {groups.map((group: Group) => (
        <ListLinkItem
          key={group.id}
          to={`/groups/${group.id}`}
          label={getGroupLabel(group)}
        />
      ))}
    </List>
  );
}

export default GroupSelection;
