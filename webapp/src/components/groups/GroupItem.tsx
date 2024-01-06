import type { ReactElement } from "react";
import type { Group } from "@/models/Group";

type GroupItemProps = {
  group: Group;
};

function GroupItem({ group }: GroupItemProps): ReactElement {
  const label: string = group.players.map((p) => p.initials).join(" - ");

  return (
    <div className="border-1 flex h-14 cursor-pointer items-center border border-secondary px-4 hover:bg-secondary">
      <span className="text-2xl">{label}</span>
    </div>
  );
}

export default GroupItem;
