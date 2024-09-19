import type PocketBase from "pocketbase";
import { useContext } from "react";
import PocketBaseContext from "@/contexts/PocketBaseContext";

function usePocketBase(): PocketBase {
  return useContext(PocketBaseContext);
}

export default usePocketBase;
