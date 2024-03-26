import PocketBase from "pocketbase";
import { createContext } from "react";

const pb = new PocketBase("/");
const PocketBaseContext = createContext<PocketBase>(pb);

export default PocketBaseContext;
