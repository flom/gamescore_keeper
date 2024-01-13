import type { ReactElement } from "react";
import ListItem from "../compositions/list/ListItem";
import { Link } from "react-router-dom";
import type { GameScore } from "@/models/GameScore";
import type { Game } from "@/models/Game";
import type { Group } from "@/models/Group";
import type { GameRecord } from "@/models/GameRecord";
import ListTable from "@/components/compositions/list/ListTable";
import ListTableColumn from "@/components/compositions/list/ListTableColumn";

export type SingleGameScoreProps = {
  group: Group;
  gameRecord: GameRecord;
};

function SingleGameScore({
  group,
  gameRecord,
}: SingleGameScoreProps): ReactElement {
  const scores: { id: string; score: number }[] = [];

  for (const player of group.players) {
    const gameScore: GameScore | undefined = gameRecord.scores.find(
      (score: GameScore) => score.playerId === player.id,
    );
    scores.push({ id: player.id, score: gameScore?.score ?? 0 });
  }

  const game: Game | undefined = group.games.find(
    (g: Game) => g.id === gameRecord.gameId,
  );

  const scoreTable = (
    <ListTable>
      {scores.map((score) => (
        <ListTableColumn key={score.id}>{score.score}</ListTableColumn>
      ))}
    </ListTable>
  );

  if (game === undefined) {
    return <ListItem right={scoreTable}>???</ListItem>;
  }

  return (
    <ListItem
      component={Link}
      to={`/groups/${group.id}/game/${game.id}`}
      right={scoreTable}
    >
      {game.name}
    </ListItem>
  );
}

export default SingleGameScore;
