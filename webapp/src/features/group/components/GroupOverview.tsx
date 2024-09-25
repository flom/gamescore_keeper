import type { ReactElement } from "react";
import { List } from "@/components/compositions/list";
import ListSeparator from "@/components/compositions/list/ListSeparator";
import PlayerHeader from "@/components/PlayerHeader";
import GrandTotal from "@/features/group/components/GrandTotal";
import type { Group } from "@/types/Group";
import AllGameScores from "@/features/group/components/AllGameScores";

type Props = {
  group: Group;
};

function GroupOverview({ group }: Props): ReactElement {
  return (
    <List>
      <PlayerHeader group={group} />
      <GrandTotal group={group} gameRecords={group.records} />

      <ListSeparator />

      <AllGameScores group={group} />
    </List>
  );
}

export default GroupOverview;
