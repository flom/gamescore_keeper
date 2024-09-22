import type { ReactElement } from "react";
import { getGroupLabel, type Group } from "@/types/Group";
import { List, ListItem } from "@/components/compositions/list";
import { Link } from "react-router-dom";

type GroupsListProps = {
  groups: Group[];
};

function GroupsList({ groups }: GroupsListProps): ReactElement {
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

export default GroupsList;
