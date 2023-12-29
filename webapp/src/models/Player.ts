import { z } from "zod";
import { v4 } from "uuid";

const INITIALS_MAX_LENGTH = 2;

export const PlayerSchema = z.object({
  id: z.string().default(() => v4()),
  name: z.string().default(""),
  initials: z.string().max(INITIALS_MAX_LENGTH).default(""),
  color: z.string().default("#000000"),
});

export type Player = z.infer<typeof PlayerSchema>;
