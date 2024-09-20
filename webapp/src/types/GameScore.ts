import { MetaSchema } from "@/types/Meta";
import { z } from "zod";

export const GameScoreSchema = MetaSchema.extend({
  score: z.number().default(0),
  playerId: z.string().default(""),
});

export type GameScore = z.infer<typeof GameScoreSchema>;
