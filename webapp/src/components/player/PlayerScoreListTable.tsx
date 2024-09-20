import type { ReactElement } from "react";
import type { Player } from "@/types/Player";
import ListTable from "@/components/compositions/list/ListTable";
import ListTableColumn from "@/components/compositions/list/ListTableColumn";

export type PlayerScore = {
  player: Player;
  score: number;
};

type PlayerScoreListTableProps = {
  scores: PlayerScore[];
};

function PlayerScoreListTable({
  scores,
}: PlayerScoreListTableProps): ReactElement {
  const highest = Math.max(...scores.map((score: PlayerScore) => score.score));

  return (
    <ListTable>
      {scores.map((score: PlayerScore) => (
        <ListTableColumn
          key={score.player.id}
          additionalStyles={{
            backgroundColor:
              score.score === highest ? getColor(score.player) : "",
          }}
        >
          {score.score}
        </ListTableColumn>
      ))}
    </ListTable>
  );
}

export default PlayerScoreListTable;

function getColor(player: Player): string {
  return `${player.color}33`; // applies transparency to the player color to improve visibility of the number
}
