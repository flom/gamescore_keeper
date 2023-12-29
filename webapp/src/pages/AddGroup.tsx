import type { ReactElement } from "react";
import Navbar from "../components/compositions/Navbar";
import Container from "../components/compositions/Container";
import PlayersInput from "@/components/player/PlayersInput";

function AddGroup(): ReactElement {
  const onAddGroup = (): void => {
    // todo
  };

  return (
    <>
      <Navbar title="Neue Gruppe" backButtonTo="/groups" />
      <Container>
        <div className="flex flex-col gap-2 p-2">
          <PlayersInput />
        </div>
      </Container>
    </>
  );
}

export default AddGroup;
