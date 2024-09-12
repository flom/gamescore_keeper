import Navbar from "@/components/compositions/Navbar";
import LoginContainer from "@/features/login/components/LoginContainer";
import type { ReactElement } from "react";

function LoginPage(): ReactElement {
  return (
    <div>
      <Navbar title="Game Score" />

      <LoginContainer />
    </div>
  );
}

export default LoginPage;
