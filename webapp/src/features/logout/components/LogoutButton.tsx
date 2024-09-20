import type { ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLogoutUser } from "@/features/logout/api/logoutUser";

function LogoutButton(): ReactElement {
  const navigate = useNavigate();
  const logout = useLogoutUser();

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
