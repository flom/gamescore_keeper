import type { ReactElement } from "react";
import type { GameRecord } from "@/types/GameRecord";
import { List } from "@/components/compositions/list";
import PlayerHeader from "@/components/group/PlayerHeader";
import GrandTotal from "@/components/group/GrandTotal";
import ListSeparator from "@/components/compositions/list/ListSeparator";
import SingleGameScore from "@/components/group/SingleGameScore";
import type { Group } from "@/types/Group";

type GameOverviewProps = {
  group: Group;
  gameId: string;
};

function GameOverview({ group, gameId }: GameOverviewProps): ReactElement {
  const gameRecords: GameRecord[] = group.records.filter(
    (gameRecord: GameRecord) => gameRecord.gameId === gameId,
  );

  return (
    <List>
      <PlayerHeader group={group} />
      <GrandTotal group={group} gameRecords={gameRecords} />

      <ListSeparator />

      {gameRecords.map((record: GameRecord) => (
        <SingleGameScore
          key={record.id}
          group={group}
          gameRecord={record}
          to={`/groups/${group.id}/edit-game/${record.id}`}
        />
      ))}
    </List>
  );
}

export default GameOverview;
