import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import Container from "@/components/compositions/Container";
import groupHooks from "@/api/group.hooks";
import { useParams } from "react-router-dom";
import type { GameRecord } from "@/models/GameRecord";
import type { Game } from "@/models/Game";

function EditGameRecordPage(): ReactElement {
  const { gameRecordId } = useParams();

  const { data: group } = groupHooks.useGroup();

  if (group === undefined) {
    return <>Group not found</>;
  }
  if (gameRecordId === undefined) {
    return <>GameRecordId not found</>;
  }

  const gameRecord: GameRecord | undefined = group.records.find(
    (record: GameRecord) => record.id === gameRecordId,
  );
  if (gameRecord === undefined) {
    return <>GameRecord not found</>;
  }
  const game: Game | undefined = group.games.find(
    (g: Game) => g.id === gameRecord.gameId,
  );
  if (game === undefined) {
    return <>Game not found</>;
  }

  const dateLabel = new Date(gameRecord.dateTime).toLocaleDateString();
  return (
    <>
      <Navbar
        title={`${game.name} ${dateLabel}`}
        backButtonTo={`/groups/${group.id}/game/${gameRecord.gameId}`}
      />
      <Container>Edit Game</Container>
    </>
  );
}

export default EditGameRecordPage;
