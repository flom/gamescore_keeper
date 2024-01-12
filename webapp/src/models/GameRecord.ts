import { MetaSchema } from "@/models/Meta";
import { z } from "zod";

export const GameRecordSchema = MetaSchema.extend({
  dateTime: z.string().default(() => new Date().toISOString()),
  notes: z.string().default(""),
});

export type GameRecord = z.infer<typeof GameRecordSchema>;
