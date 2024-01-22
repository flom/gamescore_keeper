import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import groupHooks from "@/api/group.hooks";
import Container from "@/components/compositions/Container";
import AddGameRecordInput from "@/components/game/AddGameRecordInput";
import type { GameRecord } from "@/models/GameRecord";
import { NIL } from "uuid";
import { useNavigate } from "react-router-dom";

function AddGameRecordPage(): ReactElement {
  const navigate = useNavigate();

  const { data: group } = groupHooks.useGroup();
  const { mutateAsync: createGameRecord } = groupHooks.useCreateGameRecord();
  const { mutateAsync: createGame } = groupHooks.useCreateGame();

  if (group === undefined) {
    return <>Group not found</>;
  }

  const onSubmit = async (
    gameRecord: GameRecord,
    newGameName: string,
  ): Promise<void> => {
    let { gameId } = gameRecord;

    if (gameId === NIL) {
      gameId = await createGame({
        groupId: group.id,
        gameName: newGameName,
      });
    }

    await createGameRecord({
      groupId: group.id,
      gameRecord: {
        ...gameRecord,
        gameId,
      },
    });

    navigate(`/groups/${group.id}`);
  };

  return (
    <>
      <Navbar title="Neues Spiel" backButtonTo={`/groups/${group.id}`} />
      <Container>
        <AddGameRecordInput group={group} onSubmit={onSubmit} />
      </Container>
    </>
  );
}

export default AddGameRecordPage;
