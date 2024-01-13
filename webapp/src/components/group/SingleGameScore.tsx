import type { ReactElement } from "react";
import ListItem from "../compositions/list/ListItem";
import { Link } from "react-router-dom";
import type { GameScore } from "@/models/GameScore";
import type { Game } from "@/models/Game";
import type { Group } from "@/models/Group";
import type { GameRecord } from "@/models/GameRecord";
import PlayerScoreListTable, {
  type PlayerScore,
} from "@/components/player/PlayerScoreListTable";

export type SingleGameScoreProps = {
  group: Group;
  gameRecord: GameRecord;
};

function SingleGameScore({
  group,
  gameRecord,
}: SingleGameScoreProps): ReactElement {
  const scores: PlayerScore[] = [];

  for (const player of group.players) {
    const gameScore: GameScore | undefined = gameRecord.scores.find(
      (score: GameScore) => score.playerId === player.id,
    );
    scores.push({ player, score: gameScore?.score ?? 0 });
  }

  const game: Game | undefined = group.games.find(
    (g: Game) => g.id === gameRecord.gameId,
  );

  const scoreTable = <PlayerScoreListTable scores={scores} />;

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
