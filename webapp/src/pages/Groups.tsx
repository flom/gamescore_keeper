import type { ReactElement } from "react";
import Navbar from "../components/compositions/Navbar";
import GroupSelection from "@/components/groups/GroupSelection";

function Groups(): ReactElement {
  return (
    <>
      <Navbar title="Gruppen" addButtonTo="add" />
      <GroupSelection />
    </>
  );
}

export default Groups;
