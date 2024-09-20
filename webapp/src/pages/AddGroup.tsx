import type { ReactElement } from "react";
import Navbar from "../components/compositions/Navbar";
import Container from "../components/compositions/Container";
import PlayersInput from "@/components/player/PlayersInput";
import { useNavigate } from "react-router-dom";
import groupsHooks from "@/api/groups.hooks";
import type { Group } from "@/types/Group";

function AddGroup(): ReactElement {
  const navigate = useNavigate();
  const { mutateAsync } = groupsHooks.useCreateGroup();

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
          <PlayersInput onSubmit={onSubmit} />
        </div>
      </Container>
    </>
  );
}

export default AddGroup;
