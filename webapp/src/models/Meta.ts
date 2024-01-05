import { z } from "zod";
import { v4 } from "uuid";

export const MetaSchema = z.object({
  id: z.string().default(() => v4()),
  createdAt: z.string().default(() => new Date().toISOString()),
  modifiedAt: z.string().default(() => new Date().toISOString()),
  deletedAt: z.string().default(() => new Date().toISOString()),
});
