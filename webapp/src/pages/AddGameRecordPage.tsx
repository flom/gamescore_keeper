import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import Container from "@/components/compositions/Container";
import AddGameRecordInput from "@/features/game/components/AddGameRecordInput";
import { useNavigate } from "react-router-dom";
import { useGroup } from "@/features/group/api/getGroup";

function AddGameRecordPage(): ReactElement {
  const navigate = useNavigate();

  const { data: group } = useGroup();

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
