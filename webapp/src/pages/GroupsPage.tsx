import type { ReactElement } from "react";
import Navbar from "../components/compositions/Navbar";
import GroupSelection from "@/components/groups/GroupSelection";

function GroupsPage(): ReactElement {
  return (
    <>
      <Navbar title="Gruppen" addButtonTo="add" />
      <GroupSelection />
    </>
  );
}

export default GroupsPage;
