import { MetaSchema } from "@/types/Meta";
import { z } from "zod";
import {
  type GameScore,
  GameScoreSchema,
  gameScoreToPbGameScore,
} from "@/types/GameScore";
import type { PbGameRecordFields } from "@/types/api/PbGameRecord";

export const GameRecordSchema = MetaSchema.extend({
  dateTime: z.string().default(() => new Date().toISOString().slice(0, 10)),
  notes: z.string().default(""),
  gameId: z.string(),
  scores: GameScoreSchema.array().default([]),
});

export type GameRecord = z.infer<typeof GameRecordSchema>;

export function gameRecordToPbGameRecord(
  groupId: string,
  gameRecord: GameRecord,
): PbGameRecordFields {
  return {
    group: groupId,
    dateTime: gameRecord.dateTime,
    notes: gameRecord.notes,
    game: gameRecord.gameId,
    expand: {
      gameScores_via_gameRecord: gameRecord.scores.map((score: GameScore) =>
        gameScoreToPbGameScore("", score),
      ),
    },
  };
}
