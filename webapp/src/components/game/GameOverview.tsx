import type { ReactElement } from "react";
import type { Game } from "@/models/Game";
import type { GameRecord } from "@/models/GameRecord";
import { List } from "@/components/compositions/list";
import PlayerHeader from "@/components/group/PlayerHeader";
import GrandTotal from "@/components/group/GrandTotal";
import ListSeparator from "@/components/compositions/list/ListSeparator";
import SingleGameScore from "@/components/group/SingleGameScore";
import type { Group } from "@/models/Group";

type GameOverviewProps = {
  group: Group;
  game: Game;
  gameRecords: GameRecord[];
};

function GameOverview({
  group,
  game,
  gameRecords,
}: GameOverviewProps): ReactElement {
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
