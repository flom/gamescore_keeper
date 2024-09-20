import { z } from "zod";
import { MetaSchema } from "@/types/Meta";
import { PlayerSchema } from "@/types/Player";
import { GameSchema } from "@/types/Game";
import { GameRecordSchema } from "@/types/GameRecord";
import type PbGroup from "@/types/api/PbGroup";

export const GroupSchema = MetaSchema.extend({
  name: z.string().default(""),
  players: PlayerSchema.array().default([]),
  games: GameSchema.array().default([]),
  records: GameRecordSchema.array().default([]),
});

export type Group = z.infer<typeof GroupSchema>;

export function getGroupLabel(group: Group): string {
  let groupLabel: string = group.players.map((p) => p.initials).join(" - ");

  if (groupLabel.length === 0) {
    groupLabel = group.name.trim();
  }
  if (groupLabel.length === 0) {
    // fallback
    groupLabel = "<Gruppe ohne Name>";
  }

  return groupLabel;
}

export function parsePbGroup(pbGroup: PbGroup): Group {
  return GroupSchema.parse({
    ...pbGroup,
    players: pbGroup.expand?.players_via_groupId,
    games: pbGroup.expand?.games_via_groupId,
    records: pbGroup.expand?.gameRecords_via_groupId,
  });
}
