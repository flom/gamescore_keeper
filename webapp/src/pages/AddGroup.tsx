import type { ReactElement } from "react";
import Navbar from "../components/compositions/Navbar";
import Container from "../components/compositions/Container";
import PlayersInput from "@/components/player/PlayersInput";
import type { Player } from "@/models/Player";
import { useNavigate } from "react-router-dom";

function AddGroup(): ReactElement {
  const navigate = useNavigate();

  const onSubmit = (players: Player[]): void => {
    // todo: send to server, ReactQuery mutation
    console.log("players", players);
    navigate("/groups");
  };

  return (
    <>
      <Navbar title="Neue Gruppe" backButtonTo="/groups" />
      <Container>
        <div className="flex flex-col gap-2 p-2">
          <PlayersInput onSubmit={onSubmit} />
        </div>
      </Container>
    </>
  );
}

export default AddGroup;
