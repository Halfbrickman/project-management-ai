import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { projectSchema } from "./Schema";
import type { ProjectFormData } from "./Schema";

interface ProjectFormProps {
  defaultValues?: Partial<ProjectFormData>;
  onSubmit: (data: ProjectFormData) => void;
  isLoading?: boolean;
}

export default function ProjectForm({
  defaultValues,
  onSubmit,
  isLoading = false,
}: ProjectFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: "",
      description: "",
      startDate: "",
      deadline: "",
      ...defaultValues,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Project Name */}
      <div>
        <Label htmlFor="name">
          Project Name
        </Label>

        <Input
          id="name"
          placeholder="Enter project name"
          {...register("name")}
        />

        {errors.name && (
          <p className="mt-1 text-xs text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <Label htmlFor="description">
          Description
        </Label>

        <Textarea
          id="description"
          rows={4}
          placeholder="Project description..."
          {...register("description")}
        />
      </div>

      {/* Start Date */}
      <div>
        <Label htmlFor="startDate">
          Start Date
        </Label>

        <Input
          id="startDate"
          type="date"
          {...register("startDate")}
        />

        {errors.startDate && (
          <p className="mt-1 text-xs text-red-500">
            {errors.startDate.message}
          </p>
        )}
      </div>

      {/* Deadline */}
      <div>
        <Label htmlFor="deadline">
          Deadline
        </Label>

        <Input
          id="deadline"
          type="date"
          {...register("deadline")}
        />

        {errors.deadline && (
          <p className="mt-1 text-xs text-red-500">
            {errors.deadline.message}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isLoading}
        >
          {isLoading
            ? "Saving..."
            : "Create Project"}
        </Button>
      </div>
    </form>
  );
}