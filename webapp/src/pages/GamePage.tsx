import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import groupHooks from "@/api/group.hooks";
import Container from "@/components/compositions/Container";
import AddGameRecordInput from "@/components/game/AddGameRecordInput";
import type { GameRecord } from "@/models/GameRecord";

function GamePage(): ReactElement {
  const { data: group } = groupHooks.useGroup();

  if (group === undefined) {
    return <>Group not found</>;
  }

  const onSubmit = async (gameRecord: GameRecord): Promise<void> => {
    // todo
    console.log(">>", gameRecord);
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

export default GamePage;
