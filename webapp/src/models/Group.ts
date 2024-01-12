import type { z } from "zod";
import { MetaSchema } from "@/models/Meta";
import { PlayerSchema } from "@/models/Player";
import { GameSchema } from "@/models/Game";

export const GroupSchema = MetaSchema.extend({
  players: PlayerSchema.array().default([]),
  games: GameSchema.array().default([]),
});

export type Group = z.infer<typeof GroupSchema>;

export function getGroupLabel(group: Group): string {
  return group.players.map((p) => p.initials).join(" - ");
}
