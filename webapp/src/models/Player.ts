import { z } from "zod";
import { v4 } from "uuid";

export const PlayerSchema = z.object({
  id: z.string().default(() => v4()),
  name: z.string().default(""),
  color: z.string().default("#000000"),
});

export type Player = z.infer<typeof PlayerSchema>;
