import type { ReactElement } from "react";
import GameRecordForm from "@/components/game/GameRecordForm";
import { Button } from "@/components/ui/button";
import type { GameRecord } from "@/models/GameRecord";
import type { Group } from "@/models/Group";

type EditGameRecordInputProps = {
  group: Group;
  gameRecord: GameRecord;
};

function EditGameRecordInput({
  group,
  gameRecord,
}: EditGameRecordInputProps): ReactElement {
  const onSubmit = async (
    updatedGameRecord: GameRecord,
    newGameName: string,
  ): Promise<void> => {
    // todo: groupHook.useUpdateGameRecord
    // todo: groupHook.useDeleteGameRecord
    console.log("edit", updatedGameRecord, newGameName);
  };

  return (
    <GameRecordForm group={group} onSubmit={onSubmit} defaultValue={gameRecord}>
      <div className="flex flex-col gap-12">
        <Button type="submit" size="lg" className="w-full">
          Spiel aktualisieren
        </Button>
        <Button type="submit" size="lg" className="w-full" variant="link">
          Spiel löschen
        </Button>
      </div>
    </GameRecordForm>
  );
}

export default EditGameRecordInput;
