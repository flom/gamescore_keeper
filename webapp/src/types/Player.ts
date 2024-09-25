import { z } from "zod";
import { mapPbMeta, MetaSchema } from "@/types/Meta";
import PbPlayer, { PbPlayerFields } from "@/types/api/PbPlayer";

const NAME_MIN_LENGTH = 2;
const INITIALS_MAX_LENGTH = 3;
const COLOR_PATTERN = /#[\dA-Fa-f]{6}/;

export const PlayerSchema = MetaSchema.extend({
  name: z
    .string()
    .min(NAME_MIN_LENGTH, {
      message: "Name muss aus mind. 2 Buchstaben bestehen",
    })
    .default("Spieler"),
  initials: z
    .string()
    .min(1, {
      message: "Mindestens 1 Buchstabe",
    })
    .max(INITIALS_MAX_LENGTH, {
      message: `Maximal ${INITIALS_MAX_LENGTH} Buchstaben erlaubt`,
    })
    .default("S"),
  color: z
    .string()
    .regex(COLOR_PATTERN, {
      message: "Ungültiges Format",
    })
    .default("#000000"),
});

export type Player = z.infer<typeof PlayerSchema>;

export function mapPbPlayer(pbPlayer: PbPlayer): Player {
  return {
    ...mapPbMeta(pbPlayer),
    name: pbPlayer.name,
    initials: pbPlayer.initials,
    color: pbPlayer.color,
  };
}

export function playerToPbPlayer(
  player: Player,
  groupId: string,
): PbPlayerFields {
  return {
    name: player.name,
    initials: player.initials,
    color: player.color,
    group: groupId,
  };
}
