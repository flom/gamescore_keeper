import type { RecordModel } from "pocketbase";

type PbGame = {
  name: string;
} & RecordModel;

export default PbGame;
