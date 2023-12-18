import type { MutableRefObject, ReactElement } from "react";
import type { Player } from "../../models/Player";
import TextField from "../basics/TextField";

type RefPlayerInputProps = {
  playerRef: MutableRefObject<Player>;
};

function PlayerInput({ playerRef }: RefPlayerInputProps): ReactElement {
  const onNameChange = (val: string): void => {
    playerRef.current.name = val;
  };

  const onColorChange = (color: string): void => {
    playerRef.current.color = color;
  };

  return (
    <div className="flex w-full flex-row items-end gap-2">
      <TextField
        label="Spieler"
        defaultValue={playerRef.current.name}
        onChange={onNameChange}
      />
      <div>
        <input
          type="color"
          className="h-10"
          defaultValue={playerRef.current.color}
          onChange={(e): void => onColorChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default PlayerInput;
