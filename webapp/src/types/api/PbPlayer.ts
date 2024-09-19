import type { RecordModel } from "pocketbase";

type PbPlayer = {
  name: string;
  initials: string;
  color: string;
} & RecordModel;

export default PbPlayer;
