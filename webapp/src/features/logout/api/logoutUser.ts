import type PocketBase from "pocketbase";
import usePocketBase from "@/hooks/usePocketBase";

export function useLogoutUser(): () => void {
  const pb: PocketBase = usePocketBase();

  return (): void => {
    pb.authStore.clear();
  };
}
