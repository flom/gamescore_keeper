import { MetaSchema } from "@/models/Meta";
import { z } from "zod";

export const GameSchema = MetaSchema.extend({
  name: z.string().default(""),
});

export type Game = z.infer<typeof GameSchema>;
