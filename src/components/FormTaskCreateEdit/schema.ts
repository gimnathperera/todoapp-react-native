import { z } from "zod";

export const todoSchema = z.object({
  name: z.string().nonempty("Task name is required"),
  description: z.string().optional().default(""),
  status: z.string().optional().default(""),
});

export type ToDo = z.infer<typeof todoSchema>;
