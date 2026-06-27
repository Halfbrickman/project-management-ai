import { z } from "zod";

export const projectSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, "Project name must be at least 3 characters"),

    description: z.string().optional(),

    startDate: z.string().min(1, "Start date is required"),

    deadline: z.string().min(1, "Deadline is required"),
  })
  .refine(
    (data) =>
      new Date(data.deadline) >= new Date(data.startDate),
    {
      path: ["deadline"],
      message: "Deadline must be after start date",
    }
  );

export type ProjectFormData = z.infer<typeof projectSchema>;