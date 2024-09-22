import type { RecordModel } from "pocketbase";
import type PbGameScore from "@/types/api/PbGameScore";

export type PbGameRecordFields = {
  dateTime: string;
  notes: string;
  game: string;
  scores: string[];
  expand?: {
    scores?: PbGameScore[];
  };
};

type PbGameRecord = PbGameRecordFields & RecordModel;

export default PbGameRecord;
