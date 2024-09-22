import { z } from "zod";
import { getMetaFields, MetaSchema } from "@/types/Meta";
import { PlayerSchema } from "@/types/Player";
import { GameSchema } from "@/types/Game";
import { GameRecordSchema } from "@/types/GameRecord";
import type PbGroup from "@/types/api/PbGroup";
import type PbGameRecord from "@/types/api/PbGameRecord";
import { pbDateTimeStrToDate } from "@/utils/dateUtils";

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
  // todo: write mappers for other types
  const group: Group = {
    ...getMetaFields(pbGroup),
    name: pbGroup.name,
    players: [],
    games: [],
    records: [],
  };

  return GroupSchema.parse(group);

  // return GroupSchema.parse({
  //   id: pbGroup.id,
  //   created: pbGroup.created,
  //   updated: pbGroup.updated,
  //   players: pbGroup.expand?.players_via_group,
  //   games: pbGroup.expand?.games_via_group,
  //   records: pbGroup.expand?.gameRecords_via_group?.map(
  //     (pbRecord: PbGameRecord) => ({
  //       ...pbRecord,
  //       scores: pbRecord.expand?.gameScores_via_gameRecord,
  //       gameId: pbRecord.game,
  //       dateTime: pbDateTimeStrToDate(pbRecord.dateTime),
  //     }),
  //   ),
  // });
}
