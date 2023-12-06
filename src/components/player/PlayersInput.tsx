import type { ReactElement } from "react";
import { useState } from "react";
import type { Player } from "../../models/Player";
import PlayerInput from "./PlayerInput";
import IconButton from "../basics/IconButton";
import { v4 } from "uuid";

function PlayersInput(): ReactElement {
  const [players, setPlayers] = useState<Player[]>([
    {
      id: v4(),
      name: "",
      color: "",
    },
  ]);

  const onAddPlayer = (): void => {
    setPlayers((prevState: Player[]) => [
      ...prevState,
      { id: v4(), name: "", color: "" },
    ]);
  };

  return (
    <div className="flex flex-col gap-2 p-2">
      {players.map((player: Player) => (
        <PlayerInput key={player.id} />
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
    </div>
  );
}

export default PlayersInput;
