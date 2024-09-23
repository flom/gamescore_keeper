import { mapPbMeta, MetaSchema } from "@/types/Meta";
import { z } from "zod";
import type PbGame from "@/types/api/PbGame";

export const GameSchema = MetaSchema.extend({
  name: z.string().default(""),
});

export type Game = z.infer<typeof GameSchema>;

export function mapPbGame(pbGame: PbGame): Game {
  return {
    ...mapPbMeta(pbGame),
    name: pbGame.name,
  };
}
