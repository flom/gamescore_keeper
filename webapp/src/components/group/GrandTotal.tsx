import type { ReactElement } from "react";
import ListItem from "../compositions/list/ListItem";
import ListTable from "@/components/compositions/list/ListTable";
import ListTableColumn from "@/components/compositions/list/ListTableColumn";
import type { Group } from "@/models/Group";
import type { GameScore } from "@/models/GameScore";
import type { GameRecord } from "@/models/GameRecord";

type GrandTotalProps = {
  group: Group;
};

function GrandTotal({ group }: GrandTotalProps): ReactElement {
  const scores: { id: string; score: number }[] = [];

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

    scores.push({ id: player.id, score: playerTotalScore });
  }

  return (
    <ListItem
      right={
        <ListTable>
          {scores.map((score) => (
            <ListTableColumn key={score.id}>{score.score}</ListTableColumn>
          ))}
        </ListTable>
      }
    >
      Summe
    </ListItem>
  );
}

export default GrandTotal;
