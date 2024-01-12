import { MetaSchema } from "@/models/Meta";
import { z } from "zod";
import { GameRecordSchema } from "@/models/GameRecord";

export const GameSchema = MetaSchema.extend({
  name: z.string().default(""),
  records: GameRecordSchema.array().default([]),
});

export type Game = z.infer<typeof GameSchema>;
