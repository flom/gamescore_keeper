import { STORAGE_CREDENTIALS } from "@/features/login/utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "@/features/login/api/loginUser";

type UseLoginResult = {
  loginUser: (userName: string, password: string) => unknown;
  invalidCredentials: boolean;
};

export default function useLogin(): UseLoginResult {
  const navigate = useNavigate();
  const loginUser = useLoginUser();
  const [invalidCredentials, setInvalidCredentials] = useState<boolean>(false);

  return {
    loginUser: async (userName: string, password: string): Promise<void> => {
      setInvalidCredentials(false);
      try {
        await loginUser(userName, password);
        localStorage.setItem(
          STORAGE_CREDENTIALS,
          JSON.stringify({
            userName,
            password,
          }),
        );
        navigate("/");
      } catch {
        setInvalidCredentials(true);
      }
    },
    invalidCredentials,
  };
}
