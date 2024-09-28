import type { RecordModel } from "pocketbase";

export type PbGameFields = {
  name: string;
  group: string;
};

type PbGame = PbGameFields & RecordModel;

export default PbGame;
