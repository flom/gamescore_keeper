import type { RecordModel } from "pocketbase";

type PbGameScore = {
  score: number;
  playerId: string;
} & RecordModel;

export default PbGameScore;
