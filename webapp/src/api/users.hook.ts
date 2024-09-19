import type PocketBase from "pocketbase";
import usePocketBase from "@/hooks/usePocketBase";

function useLogin(): (userName: string, password: string) => Promise<void> {
  const pb: PocketBase = usePocketBase();

  return async (userName: string, password: string): Promise<void> => {
    await pb.collection("users").authWithPassword(userName, password);
  };
}

function useLogout(): () => void {
  const pb: PocketBase = usePocketBase();

  return (): void => {
    pb.authStore.clear();
  };
}

const usersHook = {
  useLogin,
  useLogout,
};

export default usersHook;
