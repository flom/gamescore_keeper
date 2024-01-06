import type { ReactElement } from "react";
import Navbar from "../components/compositions/Navbar";
import GroupSelectionList from "@/components/groups/GroupSelectionList";

function GroupsList(): ReactElement {
  return (
    <>
      <Navbar title="Gruppen" addButtonTo="add" />
      <GroupSelectionList />
    </>
  );
}

export default GroupsList;
