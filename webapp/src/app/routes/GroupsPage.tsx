import type { ReactElement } from "react";
import Navbar from "../../components/compositions/Navbar";
import GroupsList from "@/features/groups/components/GroupsList";
import LogoutButton from "@/features/logout/components/LogoutButton";
import { useNavigate } from "react-router-dom";
import useGroups from "@/hooks/useGroups";

function GroupsPage(): ReactElement {
  const navigate = useNavigate();
  const { data: groups } = useGroups();

  const onLogout = (): void => {
    navigate("/");
  };

  return (
    <>
      <Navbar title="Gruppen" addButtonTo="add" />
      <GroupsList groups={groups ?? []} />
      <LogoutButton onLogout={onLogout} />
    </>
  );
}

export default GroupsPage;
