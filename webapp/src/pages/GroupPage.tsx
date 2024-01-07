import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import groupHooks from "@/api/group.hooks";
import { getGroupLabel } from "@/models/Group";

function GroupPage(): ReactElement {
  const { data: group } = groupHooks.useGroup();

  if (group === undefined) {
    return <>Group not found</>;
  }

  const title: string = getGroupLabel(group);
  return (
    <>
      <Navbar title={title} backButtonTo="/groups" />
      Hello {group.id}
    </>
  );
}

export default GroupPage;
