import type { ReactElement } from "react";
import GameRecordForm from "@/components/game/GameRecordForm";
import { Button } from "@/components/ui/button";
import type { GameRecord } from "@/models/GameRecord";
import type { Group } from "@/models/Group";
import groupHooks from "@/api/group.hooks";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

  return (
    <GameRecordForm
      group={group}
      onSubmit={onSubmit}
      defaultValue={gameRecord}
      hasGameSelection={false}
    >
      <div className="flex flex-col gap-12">
        <Button type="submit" size="lg" className="w-full">
          Spiel aktualisieren
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" type="button" variant="link" className="w-full">
              Spiel löschen
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Spieleintrag löschen?</DialogTitle>
              <DialogDescription>
                Dieser Vorgang lässt sich nicht Rückgängig machen!
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="destructive" onClick={onDelete}>
                  Spiel löschen
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </GameRecordForm>
  );
}

export default EditGameRecordInput;
