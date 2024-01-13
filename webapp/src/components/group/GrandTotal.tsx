import type { ReactElement } from "react";
import ListItem from "../compositions/list/ListItem";
import type { Group } from "@/models/Group";
import type { GameScore } from "@/models/GameScore";
import type { GameRecord } from "@/models/GameRecord";
import PlayerScoreListTable, {
  type PlayerScore,
} from "@/components/player/PlayerScoreListTable";

type GrandTotalProps = {
  group: Group;
};

function GrandTotal({ group }: GrandTotalProps): ReactElement {
  const scores: PlayerScore[] = [];

  for (const player of group.players) {
    const playerTotalScore: number = group.records
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
