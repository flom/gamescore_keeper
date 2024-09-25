import type { RecordModel } from "pocketbase";

export type PbPlayerFields = {
  name: string;
  initials: string;
  color: string;
  group: string;
};

type PbPlayer = PbPlayerFields & RecordModel;

export default PbPlayer;
