import type { ReactElement } from "react";
import Container from "@/components/compositions/Container";
import { Alert, AlertTitle } from "@/components/ui/alert";
import LoginForm from "@/features/login/components/LoginForm";
import useLogin from "@/features/login/hooks/useLogin";
import type { LoginFields } from "@/features/login/types/LoginFields";

function LoginContainer(): ReactElement {
  const { loginUser, invalidCredentials } = useLogin();

  const onSubmit = async (values: LoginFields): Promise<void> => {
    loginUser(values.userName, values.password);
  };

  return (
    <Container>
      <LoginForm onSubmit={onSubmit} />

      {invalidCredentials ? (
        <Alert className="mt-4" variant="destructive">
          <AlertTitle>Ungültiger Benutzer oder Passwort</AlertTitle>
        </Alert>
      ) : undefined}
    </Container>
  );
}

export default LoginContainer;
