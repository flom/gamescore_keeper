import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import { getGroupLabel } from "@/types/Group";
import Container from "@/components/compositions/Container";
import EditGroup from "@/components/group/EditGroup";
import { useNavigate } from "react-router-dom";
import useGroup from "@/hooks/useGroup";

function EditGroupPage(): ReactElement {
  const navigate = useNavigate();
  const { data: group } = useGroup();

  if (group === undefined) {
    return <>Group not found</>;
  }

  const onFinished = (): void => {
    navigate("/groups");
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
