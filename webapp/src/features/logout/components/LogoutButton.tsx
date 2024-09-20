import type { ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { useLogoutUser } from "@/features/logout/api/logoutUser";

type LogoutButtonProperties = {
  onLogout: () => unknown;
};

function LogoutButton({ onLogout }: LogoutButtonProperties): ReactElement {
  const logout = useLogoutUser();

  const onLogoutClicked = (): void => {
    logout();
    onLogout();
  };

  return (
    <div className="fixed bottom-2 left-2">
      <Button variant="destructive" onClick={onLogoutClicked}>
        <i className="fa-solid fa-arrow-right-from-bracket" />
        &nbsp; Ausloggen
      </Button>
    </div>
  );
}

export default LogoutButton;
