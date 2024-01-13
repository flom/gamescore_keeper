import type { ReactElement } from "react";
import groupHooks from "@/api/group.hooks";
import { List } from "@/components/compositions/list";
import ListSeparator from "@/components/compositions/list/ListSeparator";
import PlayerHeader from "@/components/group/PlayerHeader";
import GrandTotal from "@/components/group/GrandTotal";
import SingleGameScore from "@/components/group/SingleGameScore";
import type { GameRecord } from "@/models/GameRecord";

function GroupOverview(): ReactElement {
  const { data: group } = groupHooks.useGroup();

  if (group === undefined) {
    return <>Group not found</>;
  }

  return (
    <List>
      <PlayerHeader group={group} />
      <GrandTotal group={group} />

      <ListSeparator />

      {group.records.map((record: GameRecord) => (
        <SingleGameScore key={record.id} group={group} gameRecord={record} />
      ))}
    </List>
  );
}

export default GroupOverview;
