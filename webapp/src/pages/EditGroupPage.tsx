import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import groupHooks from "@/api/group.hooks";
import { getGroupLabel } from "@/models/Group";
import Container from "@/components/compositions/Container";
import EditGroup from "@/components/group/EditGroup";

function EditGroupPage(): ReactElement {
  const { data: group } = groupHooks.useGroup();

  if (group === undefined) {
    return <>Group not found</>;
  }

  const onFinished = (): void => {
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
        <EditGroup group={group} onFinished={onFinished} />
      </Container>
    </>
  );
}

export default EditGroupPage;
