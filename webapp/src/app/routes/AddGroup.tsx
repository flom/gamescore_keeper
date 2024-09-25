import type { ReactElement } from "react";
import Navbar from "../../components/compositions/Navbar";
import Container from "../../components/compositions/Container";
import GroupInput from "@/features/group/components/GroupInput";
import { useNavigate } from "react-router-dom";
import type { Group } from "@/types/Group";
import useCreateGroup from "@/hooks/useCreateGroup";

function AddGroup(): ReactElement {
  const navigate = useNavigate();
  const { mutateAsync } = useCreateGroup();

  const onSubmit = async (group: Group): Promise<void> => {
    await mutateAsync({
      group,
    });
    navigate("/groups");
  };

  return (
    <>
      <Navbar title="Neue Gruppe" backButtonTo="/groups" />
      <Container>
        <div className="flex flex-col gap-2 p-2">
          <GroupInput onSubmit={onSubmit} />
        </div>
      </Container>
    </>
  );
}

export default AddGroup;
