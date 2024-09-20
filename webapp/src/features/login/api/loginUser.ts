import type PocketBase from "pocketbase";
import usePocketBase from "@/hooks/usePocketBase";

export function useLoginUser(): (
  userName: string,
  password: string,
) => Promise<void> {
  const pb: PocketBase = usePocketBase();

  return async (userName: string, password: string): Promise<void> => {
    await pb.collection("users").authWithPassword(userName, password);
  };
}
