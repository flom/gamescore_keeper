import { useContext } from "react";
import PocketBaseContext from "@/contexts/PocketBaseContext";
import type PocketBase from "pocketbase";

function useLogin(): (userName: string, password: string) => Promise<void> {
  const pb: PocketBase = useContext(PocketBaseContext);

  return async (userName: string, password: string): Promise<void> => {
    await pb.collection("users").authWithPassword(userName, password);
  };
}

const usersHook = {
  useLogin,
};

export default usersHook;
