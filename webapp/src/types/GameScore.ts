import { mapPbMeta, MetaSchema } from "@/types/Meta";
import { z } from "zod";
import type PbGameScore from "@/types/api/PbGameScore";
import type { PbGameScoreFields } from "@/types/api/PbGameScore";

export const GameScoreSchema = MetaSchema.extend({
  score: z.number().default(0),
  playerId: z.string().default(""),
});

export type GameScore = z.infer<typeof GameScoreSchema>;

export function mapPbGameScore(pbGameScore: PbGameScore): GameScore {
  return {
    ...mapPbMeta(pbGameScore),
    score: pbGameScore.score,
    playerId: pbGameScore.player,
  };
}

export function gameScoreToPbGameScore(
  gameRecordId: string,
  gameScore: GameScore,
): PbGameScoreFields {
  return {
    score: gameScore.score,
    player: gameScore.playerId,
    gameRecord: gameRecordId,
  };
}
