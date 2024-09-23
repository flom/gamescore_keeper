import { mapPbMeta, MetaSchema } from "@/types/Meta";
import { z } from "zod";
import { GameScoreSchema, mapPbGameScore } from "@/types/GameScore";
import type PbGameRecord from "@/types/api/PbGameRecord";
import type { PbGameRecordFields } from "@/types/api/PbGameRecord";
import { pbDateTimeStrToDate } from "@/utils/dateUtils";
import type PbGameScore from "@/types/api/PbGameScore";

export const GameRecordSchema = MetaSchema.extend({
  dateTime: z.string().default(() => new Date().toISOString().slice(0, 10)),
  notes: z.string().default(""),
  gameId: z.string(),
  scores: GameScoreSchema.array().default([]),
});

export type GameRecord = z.infer<typeof GameRecordSchema>;

export function mapPbGameRecord(pbGameRecord: PbGameRecord): GameRecord {
  return {
    ...mapPbMeta(pbGameRecord),
    dateTime: pbDateTimeStrToDate(pbGameRecord.dateTime),
    notes: pbGameRecord.notes,
    gameId: pbGameRecord.game,
    scores:
      pbGameRecord.expand?.gameScores_via_gameRecord?.map(
        (pbGameScore: PbGameScore) => mapPbGameScore(pbGameScore),
      ) ?? [],
  };
}

export function gameRecordToPbGameRecord(
  groupId: string,
  gameRecord: GameRecord,
): PbGameRecordFields {
  return {
    group: groupId,
    dateTime: gameRecord.dateTime,
    notes: gameRecord.notes,
    game: gameRecord.gameId,
  };
}
