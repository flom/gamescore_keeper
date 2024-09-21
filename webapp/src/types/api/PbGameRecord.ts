import type { RecordModel } from "pocketbase";
import type PbGameScore from "@/types/api/PbGameScore";

type PbGameRecord = {
  dateTime: string;
  notes: string;
  game: string;
  scores: string[];
  expand?: {
    scores?: PbGameScore[];
  };
} & RecordModel;

export default PbGameRecord;
