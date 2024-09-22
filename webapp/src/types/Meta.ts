import { z } from "zod";
import { v4 } from "uuid";
import type { BaseModel } from "pocketbase";

export const MetaSchema = z.object({
  id: z.string().default(() => v4()),
  created: z.string().default(() => new Date().toISOString()),
  updated: z.string().default(() => new Date().toISOString()),
});

export type Meta = z.infer<typeof MetaSchema>;

export function getMetaFields(baseModel: BaseModel): Meta {
  return {
    id: baseModel.id,
    created: baseModel.created,
    updated: baseModel.updated,
  };
}
