import type { RecordModel } from "pocketbase";

type PbGameRecord = {
  dateTime: string;
  notes: string;
} & RecordModel;

export default PbGameRecord;
