import type { ReactElement } from "react";
import ListItem from "../compositions/list/ListItem";
import { Link } from "react-router-dom";
import type { GameScore } from "@/types/GameScore";
import type { Game } from "@/types/Game";
import type { Group } from "@/types/Group";
import type { GameRecord } from "@/types/GameRecord";
import PlayerScoreListTable, {
  type PlayerScore,
} from "@/components/player/PlayerScoreListTable";

export type SingleGameScoreProps = {
  group: Group;
  gameRecord: GameRecord;
  to?: string;
};

function SingleGameScore({
  group,
  gameRecord,
  to = undefined,
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
  const dateLabel = new Date(gameRecord.dateTime).toLocaleDateString();

  if (game === undefined) {
    return (
      <ListItem right={scoreTable} top={dateLabel}>
        ???
      </ListItem>
    );
  }

  return (
    <ListItem
      component={Link}
      to={to ?? `/groups/${group.id}/game/${game.id}`}
      right={scoreTable}
      top={dateLabel}
    >
      {game.name}
    </ListItem>
  );
}

export default SingleGameScore;
