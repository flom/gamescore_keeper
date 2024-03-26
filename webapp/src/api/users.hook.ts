import { useContext } from "react";
import PocketBaseContext from "@/contexts/PocketBaseContext";
import type PocketBase from "pocketbase";

function useLogin(): (userName: string, password: string) => Promise<void> {
  const pb: PocketBase = useContext(PocketBaseContext);

  return async (userName: string, password: string): Promise<void> => {
    await pb.collection("users").authWithPassword(userName, password);
  };
}

function useLogout(): () => void {
  const pb: PocketBase = useContext(PocketBaseContext);

  return (): void => {
    pb.authStore.clear();
  };
}

const usersHook = {
  useLogin,
  useLogout,
};

export default usersHook;
