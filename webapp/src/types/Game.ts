import { MetaSchema } from "@/types/Meta";
import { z } from "zod";

export const GameSchema = MetaSchema.extend({
  name: z.string().default(""),
});

export type Game = z.infer<typeof GameSchema>;
