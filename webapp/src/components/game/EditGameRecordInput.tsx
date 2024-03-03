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
  const { mutateAsync: deleteGameRecord } = groupHooks.useDeleteGameRecord();

  const onSubmit = async (updatedGameRecord: GameRecord): Promise<void> => {
    await updateGameRecord({
      groupId: group.id,
      gameRecord: updatedGameRecord,
    });

    onFinished();
  };

  const onDelete = async (): Promise<void> => {
    await deleteGameRecord({
      groupId: group.id,
      gameRecordId: gameRecord.id,
    });

    onFinished();
  };

  // todo: disable game selection
  return (
    <GameRecordForm group={group} onSubmit={onSubmit} defaultValue={gameRecord}>
      <div className="flex flex-col gap-12">
        <Button type="submit" size="lg" className="w-full">
          Spiel aktualisieren
        </Button>
        <Button
          type="button"
          size="lg"
          className="w-full"
          variant="link"
          onClick={onDelete}
        >
          Spiel löschen
        </Button>
      </div>
    </GameRecordForm>
  );
}

export default EditGameRecordInput;
