import type { ReactElement } from "react";
import { Button } from "@/components/ui/button";
import usersHook from "@/api/users.hook";
import { useNavigate } from "react-router-dom";

function LogoutButton(): ReactElement {
  const navigate = useNavigate();
  const logout = usersHook.useLogout();

  const onLogout = (): void => {
    logout();
    navigate("/");
  };

  return (
    <div className="fixed bottom-2 left-2">
      <Button variant="destructive" onClick={onLogout}>
        <i className="fa-solid fa-arrow-right-from-bracket" />
        &nbsp; Ausloggen
      </Button>
    </div>
  );
}

export default LogoutButton;
