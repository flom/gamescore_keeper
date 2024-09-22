import type { ReactElement } from "react";
import { List } from "@/components/compositions/list";
import ListSeparator from "@/components/compositions/list/ListSeparator";
import PlayerHeader from "@/components/group/PlayerHeader";
import GrandTotal from "@/components/group/GrandTotal";
import SingleGameScore from "@/components/group/SingleGameScore";
import type { GameRecord } from "@/types/GameRecord";
import type { Group } from "@/types/Group";

type GroupOverviewProps = {
  group: Group;
};

function GroupOverview({ group }: GroupOverviewProps): ReactElement {
  return (
    <List>
      <PlayerHeader group={group} />
      <GrandTotal group={group} gameRecords={group.records} />

      <ListSeparator />

      {group.records.map((record: GameRecord) => (
        <SingleGameScore key={record.id} group={group} gameRecord={record} />
      ))}
    </List>
  );
}

export default GroupOverview;
