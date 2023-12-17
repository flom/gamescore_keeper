import type { MutableRefObject, ReactElement } from "react";
import type { Player } from "../../models/Player";
import TextField from "../basics/TextField";

type RefPlayerInputProps = {
  playerRef: MutableRefObject<Player>;
};

function PlayerInput({ playerRef }: RefPlayerInputProps): ReactElement {
  const onChange = (val: string): void => {
    playerRef.current.name = val;
  };

  return (
    <div className="flex w-full flex-row items-end gap-2">
      <TextField
        label="Spieler"
        defaultValue={playerRef.current.name}
        onChange={onChange}
      />
      <div>
        <input type="color" className="h-10" />
      </div>
    </div>
  );
}

export default PlayerInput;
