import { MetaSchema } from "@/types/Meta";
import { z } from "zod";
import { GameScoreSchema } from "@/types/GameScore";
import type { PbGameRecordFields } from "@/types/api/PbGameRecord";

export const GameRecordSchema = MetaSchema.extend({
  dateTime: z.string().default(() => new Date().toISOString().slice(0, 10)),
  notes: z.string().default(""),
  gameId: z.string(),
  scores: GameScoreSchema.array().default([]),
});

export type GameRecord = z.infer<typeof GameRecordSchema>;

export function gameRecordToPbGameRecord(
  gameRecord: GameRecord,
): PbGameRecordFields {
  return {
    dateTime: gameRecord.dateTime,
    notes: gameRecord.notes,
    game: gameRecord.gameId,
    scores: [],
  };
}
