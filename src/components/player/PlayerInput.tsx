import type { ReactElement } from "react";
import TextField from "../basics/TextField";

function PlayerInput(): ReactElement {
  return (
    <div className="flex flex-row items-end gap-2">
      <TextField label="Spieler" />
      <div>
        <input type="color" className="h-10" />
      </div>
    </div>
  );
}

export default PlayerInput;
