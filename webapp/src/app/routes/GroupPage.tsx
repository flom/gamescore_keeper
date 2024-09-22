import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import { getGroupLabel } from "@/types/Group";
import GroupOverview from "@/features/group/components/GroupOverview";
import useGroup from "@/hooks/useGroup";

function GroupPage(): ReactElement {
  const { data: group } = useGroup();

  if (group === undefined) {
    return <>Gruppe nicht gefunden.</>;
  }

  const title: string = getGroupLabel(group);
  return (
    <>
      <Navbar
        title={title}
        backButtonTo="/groups"
        addButtonTo="./add-game"
        editButtonTo="./edit"
      />
      <GroupOverview group={group} />
    </>
  );
}

export default GroupPage;
