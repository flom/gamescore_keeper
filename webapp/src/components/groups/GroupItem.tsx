import type { ReactElement } from "react";
import { getGroupLabel, type Group } from "@/models/Group";
import { Link } from "react-router-dom";

type GroupItemProps = {
  group: Group;
};

function GroupItem({ group }: GroupItemProps): ReactElement {
  const label: string = getGroupLabel(group);

  return (
    <Link
      to={`/groups/${group.id}`}
      className="border-1 flex h-14 cursor-pointer items-center border border-secondary px-4 hover:bg-secondary"
    >
      <span className="text-2xl">{label}</span>
    </Link>
  );
}

export default GroupItem;
