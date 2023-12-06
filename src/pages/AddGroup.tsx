import type { ReactElement } from "react";
import Navbar from "../components/compositions/Navbar";
import Container from "../components/compositions/Container";
import Button from "../components/basics/Button";
import PlayersInput from "../components/player/PlayersInput";

function AddGroup(): ReactElement {
  return (
    <>
      <Navbar title="Neue Gruppe" backButtonTo="/groups" />
      <Container>
        <div className="flex flex-col gap-2 p-2">
          <PlayersInput />

          <div>
            <Button>Gruppe erstellen</Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AddGroup;
