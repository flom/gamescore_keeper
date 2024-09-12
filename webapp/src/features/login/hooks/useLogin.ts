import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersHook from "@/api/users.hook";

type UseLoginResult = {
  loginUser: (userName: string, password: string) => unknown;
  invalidCredentials: boolean;
};

export default function useLogin(): UseLoginResult {
  const navigate = useNavigate();
  const loginUser = usersHook.useLogin();
  const [invalidCredentials, setInvalidCredentials] = useState<boolean>(false);

  return {
    loginUser: async (userName: string, password: string): Promise<void> => {
      setInvalidCredentials(false);
      try {
        await loginUser(userName, password);
        navigate("/");
      } catch {
        setInvalidCredentials(true);
      }
    },
    invalidCredentials,
  };
}
