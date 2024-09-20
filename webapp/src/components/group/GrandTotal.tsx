import type { ReactElement } from "react";
import ListItem from "../compositions/list/ListItem";
import type { Group } from "@/types/Group";
import type { GameScore } from "@/types/GameScore";
import type { GameRecord } from "@/types/GameRecord";
import PlayerScoreListTable, {
  type PlayerScore,
} from "@/components/player/PlayerScoreListTable";

type GrandTotalProps = {
  group: Group;
  gameRecords: GameRecord[];
};

function GrandTotal({ group, gameRecords }: GrandTotalProps): ReactElement {
  const scores: PlayerScore[] = [];

  for (const player of group.players) {
    const playerTotalScore: number = gameRecords
      .reduce(
        (prev: GameScore[], cur: GameRecord): GameScore[] => [
          ...prev,
          ...cur.scores,
        ],
        [],
      )
      .filter((score: GameScore) => score.playerId === player.id)
      .reduce((prev: number, cur: GameScore) => prev + cur.score, 0);

    scores.push({ player, score: playerTotalScore });
  }

  return (
    <ListItem right={<PlayerScoreListTable scores={scores} />}>Summe</ListItem>
  );
}

export default GrandTotal;
