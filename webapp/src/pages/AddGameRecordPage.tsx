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
  const { mutateAsync } = groupHooks.useCreateGameRecord();

  if (group === undefined) {
    return <>Group not found</>;
  }

  const onSubmit = async (
    gameRecord: GameRecord,
    newGameName: string,
  ): Promise<void> => {
    if (gameRecord.gameId === NIL) {
      // todo
      // gameRecord.gameId = await createGame(newGameName);
    }
    // await createGameRecord(gameRecord);
    // redirect back
    console.log(">>", gameRecord, newGameName);
    await mutateAsync({
      groupId: group.id,
      gameRecord,
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
