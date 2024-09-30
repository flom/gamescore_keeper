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
import { useDeleteGroup } from "@/features/group/api/deleteGroup";
import { useUpdateGroup } from "@/features/group/api/updateGroup";
import GroupForm from "@/features/group/components/GroupForm";
import { getGroupLabel, type Group } from "@/types/Group";
import type { ReactElement } from "react";

type EditGroupProps = {
  group: Group;
  onFinished: () => unknown;
};

function EditGroup({ group, onFinished }: EditGroupProps): ReactElement {
  const { mutateAsync: deleteGroup } = useDeleteGroup();
  const { mutateAsync: updateGroup } = useUpdateGroup();

  const onDeleteGroup = async (): Promise<void> => {
    await deleteGroup({ groupId: group.id });
    onFinished();
  };

  const onSubmit = async (updatedGroup: Group): Promise<void> => {
    await updateGroup({ group: updatedGroup });
    onFinished();
  };

  const title: string = getGroupLabel(group);
  return (
    <GroupForm onSubmit={onSubmit} defaultValue={group} hasPlayersInput={false}>
      <div>
        <Button
          type="submit"
          size="lg"
          className="w-full"
          data-testid="PlayersInputSubmit"
        >
          Gruppe erstellen
        </Button>
      </div>
      <div className="mt-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="lg"
              variant="link"
              className="w-full"
              data-testid="EditGroupDeleteButton"
            >
              Gruppe löschen
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Gruppe {title} löschen?</DialogTitle>
              <DialogDescription>
                Dieser Vorgang lässt sich nicht Rückgängig machen!
              </DialogDescription>
            </DialogHeader>
            <div>
              <p>Die Gruppe enthält {group.players.length} Spieler.</p>
              <p>
                Die Gruppe enthält {group.records.length} aufgezeichnete Spiele.
              </p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  variant="destructive"
                  onClick={onDeleteGroup}
                  data-testid="EditGroupDeleteConfirmButton"
                >
                  Gruppe löschen
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </GroupForm>
  );
}

export default EditGroup;
