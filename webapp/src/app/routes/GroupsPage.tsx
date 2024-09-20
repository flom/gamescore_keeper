import type { ReactElement } from "react";
import Navbar from "../../components/compositions/Navbar";
import GroupSelection from "@/features/groups/components/GroupSelection";
import LogoutButton from "@/features/logout/components/LogoutButton";

function GroupsPage(): ReactElement {
  return (
    <>
      <Navbar title="Gruppen" addButtonTo="add" />
      <GroupSelection />
      <LogoutButton />
    </>
  );
}

export default GroupsPage;
