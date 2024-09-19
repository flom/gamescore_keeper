import { z } from "zod";
import { v4 } from "uuid";

export const MetaSchema = z.object({
  id: z.string().default(() => v4()),
  created: z.string().default(() => new Date().toISOString()),
  updated: z.string().default(() => new Date().toISOString()),
});
