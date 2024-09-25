import type { ReactElement } from "react";
import type { Group } from "@/types/Group";
import type { GameRecord } from "@/types/GameRecord";
import SingleGameScore from "@/components/SingleGameScore";

type Props = {
  group: Group;
};

function AllGameScores({ group }: Props): ReactElement {
  const gameRecords = group.records.toSorted((a: GameRecord, b: GameRecord) =>
    a.dateTime < b.dateTime ? 1 : -1,
  );

  return (
    <>
      {gameRecords.map((record: GameRecord) => (
        <SingleGameScore key={record.id} group={group} gameRecord={record} />
      ))}
    </>
  );
}

export default AllGameScores;
