import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import { getGroupLabel } from "@/models/Group";
import groupHooks from "@/api/group.hooks";
import GroupOverview from "@/components/group/GroupOverview";

function GroupPage(): ReactElement {
  const { data: group } = groupHooks.useGroup();

  if (group === undefined) {
    return <>Group not found</>;
  }

  const title: string = getGroupLabel(group);
  return (
    <>
      <Navbar title={title} backButtonTo="/groups" addButtonTo="./add-game" />
      <GroupOverview />
    </>
  );
}

export default GroupPage;
