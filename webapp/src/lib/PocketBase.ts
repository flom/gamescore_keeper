import PocketBase from "pocketbase";
import { createContext } from "react";

const pb = new PocketBase("/");
const PocketBaseContext = createContext<PocketBase>(pb);

export default PocketBaseContext;

export function refreshAuth(): void {
  if (pb.authStore.isValid) {
    pb.collection("users")
      .authRefresh()
      .catch((error: unknown) => {
        const knownError = error as { status: number };
        if (knownError.status === 0) {
          // request cancelled
          return;
        }
        pb.authStore.clear();
      });
  }
}
