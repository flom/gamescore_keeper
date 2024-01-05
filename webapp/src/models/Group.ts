import type { z } from "zod";
import { MetaSchema } from "@/models/Meta";
import { PlayerSchema } from "@/models/Player";

export const GroupSchema = MetaSchema.extend({
  players: PlayerSchema.array(),
});

export type Group = z.infer<typeof GroupSchema>;
