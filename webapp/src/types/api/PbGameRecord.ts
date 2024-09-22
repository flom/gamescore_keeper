import type { RecordModel } from "pocketbase";
import type { PbGameScoreFields } from "@/types/api/PbGameScore";

export type PbGameRecordFields = {
  dateTime: string;
  notes: string;
  game: string;
  group: string;
  expand?: {
    gameScores_via_gameRecord?: PbGameScoreFields[];
  };
};

type PbGameRecord = PbGameRecordFields & RecordModel;

export default PbGameRecord;
