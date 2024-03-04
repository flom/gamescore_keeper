import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import groupHooks from "@/api/group.hooks";
import { getGroupLabel } from "@/models/Group";
import Container from "@/components/compositions/Container";
import PlayersInput from "@/components/player/PlayersInput";

function EditGroupPage(): ReactElement {
  const { data: group } = groupHooks.useGroup();

  if (group === undefined) {
    return <>Group not found</>;
  }

  const onSubmit = async (): Promise<void> => {
    // todo
  };

  const title: string = getGroupLabel(group);
  return (
    <>
      <Navbar
        title={`${title} bearbeiten`}
        backButtonTo={`/groups/${group.id}`}
      />
      <Container>
        <div className="flex flex-col gap-2 p-2">
          <PlayersInput onSubmit={onSubmit} />
        </div>
      </Container>
    </>
  );
}

export default EditGroupPage;
