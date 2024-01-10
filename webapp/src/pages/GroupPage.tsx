import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import groupHooks from "@/api/group.hooks";
import { getGroupLabel } from "@/models/Group";
import { List, ListItem } from "@/components/compositions/list";
import ListSeparator from "@/components/compositions/list/ListSeparator";
import ListLinkItem from "@/components/compositions/list/ListLinkItem";

function GroupPage(): ReactElement {
  const { data: group } = groupHooks.useGroup();

  if (group === undefined) {
    return <>Group not found</>;
  }

  const title: string = getGroupLabel(group);
  return (
    <>
      <Navbar title={title} backButtonTo="/groups" />
      <List>
        <ListItem label="Spieler" />
        <ListItem label="Summe" />
        <ListSeparator />
        <ListLinkItem to="" label="Quixx" />
        <ListLinkItem to="" label="Noch Mal!" />
        <ListLinkItem to="" label="Skyjo" />
      </List>
    </>
  );
}

export default GroupPage;
