import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import groupHooks from "@/api/group.hooks";
import Container from "@/components/compositions/Container";
import AddGameInput from "@/components/game/AddGameInput";

function GamePage(): ReactElement {
  const { data: group } = groupHooks.useGroup();

  if (group === undefined) {
    return <>Group not found</>;
  }

  return (
    <>
      <Navbar title="Neues Spiel" backButtonTo={`/groups/${group.id}`} />
      <Container>
        <AddGameInput group={group} />
      </Container>
    </>
  );
}

export default GamePage;
