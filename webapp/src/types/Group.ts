import { z } from "zod";
import { mapPbMeta, MetaSchema } from "@/types/Meta";
import { mapPbPlayer, PlayerSchema } from "@/types/Player";
import { GameSchema, mapPbGame } from "@/types/Game";
import { GameRecordSchema, mapPbGameRecord } from "@/types/GameRecord";
import type PbGroup from "@/types/api/PbGroup";
import type { PbGroupFields } from "@/types/api/PbGroup";
import type PbPlayer from "@/types/api/PbPlayer";
import type PbGame from "@/types/api/PbGame";
import type PbGameRecord from "@/types/api/PbGameRecord";

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

export function mapPbGroup(pbGroup: PbGroup): Group {
  const group: Group = {
    ...mapPbMeta(pbGroup),
    name: pbGroup.name,
    players:
      pbGroup.expand?.players_via_group?.map((pbPlayer: PbPlayer) =>
        mapPbPlayer(pbPlayer),
      ) ?? [],
    games:
      pbGroup.expand?.games_via_group?.map((pbGame: PbGame) =>
        mapPbGame(pbGame),
      ) ?? [],
    records:
      pbGroup.expand?.gameRecords_via_group?.map((pbGameRecord: PbGameRecord) =>
        mapPbGameRecord(pbGameRecord),
      ) ?? [],
  };

  return GroupSchema.parse(group);
}

export function groupToPbGroup(group: Group, userId: string): PbGroupFields {
  return {
    name: group.name,
    users: [userId],
  };
}
