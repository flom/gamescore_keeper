import type { MutableRefObject, ReactElement } from "react";
import { useState } from "react";
import Navbar from "../components/compositions/Navbar";
import Container from "../components/compositions/Container";
import Button from "../components/basics/Button";
import { type Player, PlayerSchema } from "../models/Player";
import PlayerInput from "../components/player/PlayerInput";
import IconButton from "../components/basics/IconButton";

function AddGroup(): ReactElement {
  const [players, setPlayers] = useState<MutableRefObject<Player>[]>([]);

  const onAddPlayer = (): void => {
    setPlayers((prevState) => [
      ...prevState,
      { current: PlayerSchema.parse({}) },
    ]);
  };

  const onRemovePlayer = (player: Player): void => {
    setPlayers((prevState) =>
      prevState.filter((p) => p.current.id !== player.id),
    );
  };

  const onAddGroup = (): void => {
    console.log(players);
  };

  return (
    <>
      <Navbar title="Neue Gruppe" backButtonTo="/groups" />
      <Container>
        <div className="flex flex-col gap-2 p-2">
          {players.map((p) => (
            <div key={p.current.id} className="flex flex-row items-end">
              <PlayerInput playerRef={p} />
              <IconButton
                variant="text"
                onPress={(): void => onRemovePlayer(p.current)}
              >
                <i className="fa-solid fa-xmark fa-xl" />
              </IconButton>
            </div>
          ))}

          <div className="m-auto">
            <IconButton
              variant="secondary"
              aria-label="Spieler hinzufuegen"
              onPress={onAddPlayer}
            >
              <i className="fa-solid fa-plus fa-xl" />
            </IconButton>
          </div>
          <div>
            <Button onPress={onAddGroup}>Gruppe erstellen</Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AddGroup;
