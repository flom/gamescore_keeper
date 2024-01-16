import { MetaSchema } from "@/models/Meta";
import { z } from "zod";
import { GameScoreSchema } from "@/models/GameScore";

export const GameRecordSchema = MetaSchema.extend({
  dateTime: z.string().default(() => new Date().toISOString().slice(0, 10)),
  notes: z.string().default(""),
  gameId: z.string().default(""),
  scores: GameScoreSchema.array().default([]),
});

export type GameRecord = z.infer<typeof GameRecordSchema>;
