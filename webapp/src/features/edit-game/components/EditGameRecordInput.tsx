import { Button } from "@/components/ui/button";
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
import { useDeleteGameRecord } from "@/features/edit-game/api/deleteGameRecord";
import { useUpdateGameRecord } from "@/features/edit-game/api/updateGameRecord";
import GameRecordForm from "@/features/edit-game/components/GameRecordForm";
import type { GameRecord } from "@/types/GameRecord";
import type { Group } from "@/types/Group";
import type { ReactElement } from "react";

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
  const { mutateAsync: updateGameRecord } = useUpdateGameRecord();
  const { mutateAsync: deleteGameRecord } = useDeleteGameRecord();

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
