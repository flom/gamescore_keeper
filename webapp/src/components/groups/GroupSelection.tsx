import type { ReactElement } from "react";
import groupHooks from "@/api/group.hooks";
import { getGroupLabel, type Group } from "@/models/Group";
import { List, ListItem } from "@/components/compositions/list";
import { Link } from "react-router-dom";

function GroupSelection(): ReactElement {
  const { data: groups = [] } = groupHooks.useGroups();

  return (
    <List>
      {groups.map((group: Group) => (
        <ListItem key={group.id} component={Link} to={`/groups/${group.id}`}>
          {getGroupLabel(group)}
        </ListItem>
      ))}
    </List>
  );
}

export default GroupSelection;
