import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import groupHooks from "@/api/group.hooks";
import Container from "@/components/compositions/Container";
import AddGameRecordInput from "@/components/game/AddGameRecordInput";
import { useNavigate } from "react-router-dom";

function AddGameRecordPage(): ReactElement {
  const navigate = useNavigate();

  const { data: group } = groupHooks.useGroup();

  if (group === undefined) {
    return <>Group not found</>;
  }

  const onFinished = (): void => {
    navigate(`/groups/${group.id}`);
  };

  return (
    <>
      <Navbar title="Neues Spiel" backButtonTo={`/groups/${group.id}`} />
      <Container>
        <AddGameRecordInput group={group} onFinished={onFinished} />
      </Container>
    </>
  );
}

export default AddGameRecordPage;
