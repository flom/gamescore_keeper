import { z } from "zod";
import { v4 } from "uuid";

const NAME_MIN_LENGTH = 2;
const INITIALS_MAX_LENGTH = 3;
const COLOR_PATTERN = /#[\dA-Fa-f]{6}/;

export const PlayerSchema = z.object({
  id: z.string().default(() => v4()),
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
