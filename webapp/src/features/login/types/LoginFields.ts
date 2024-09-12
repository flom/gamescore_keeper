import { z } from "zod";

export const LoginFieldsSchema = z.object({
  userName: z.string().default(""),
  password: z.string().default(""),
});

export type LoginFields = z.infer<typeof LoginFieldsSchema>;
