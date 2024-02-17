import type { ReactElement } from "react";
import GameRecordForm from "@/components/game/GameRecordForm";
import { Button } from "@/components/ui/button";
import type { GameRecord } from "@/models/GameRecord";
import type { Group } from "@/models/Group";
import groupHooks from "@/api/group.hooks";

type EditGameRecordInputProps = {
  group: Group;
  gameRecord: GameRecord;
  onFinished: () => unknown;
};

function EditGameRecordInput({
  group,
  gameRecord,
  onFinished,
}: EditGameRecordInputProps): ReactElement {
  const { mutateAsync: updateGameRecord } = groupHooks.useUpdateGameRecord();

  const onSubmit = async (updatedGameRecord: GameRecord): Promise<void> => {
    await updateGameRecord({
      groupId: group.id,
      gameRecord: updatedGameRecord,
    });

    onFinished();
  };

  // todo: groupHook.useDeleteGameRecord
  // todo: disable game selection
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
