import type { RecordModel } from "pocketbase";

export type PbGameScoreFields = {
  score: number;
  player: string;
  gameRecord: string;
};

type PbGameScore = PbGameScoreFields & RecordModel;

export default PbGameScore;
