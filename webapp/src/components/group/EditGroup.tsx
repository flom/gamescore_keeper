import type { ReactElement } from "react";
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
import { getGroupLabel, type Group } from "@/models/Group";
import groupsHooks from "@/api/groups.hooks";

type EditGroupProps = {
  group: Group;
  onFinished: () => unknown;
};

function EditGroup({ group, onFinished }: EditGroupProps): ReactElement {
  const { mutateAsync: deleteGroup } = groupsHooks.useDeleteGroup();

  const onDeleteGroup = async (): Promise<void> => {
    await deleteGroup({ groupId: group.id });
    onFinished();
  };

  const title: string = getGroupLabel(group);
  return (
    <div className="mt-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" variant="destructive" className="w-full">
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
              <Button variant="destructive" onClick={onDeleteGroup}>
                Gruppe löschen
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditGroup;
