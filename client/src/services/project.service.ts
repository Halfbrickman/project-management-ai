import api from "@/services/api";
import type { Project } from "@/types/project";
import type { ProjectFormData } from "@/components/project/Schema";

interface ProjectResponse {
  success: boolean;
  data: Project[];
}

export async function getProjects() {
  const response =
    await api.get<ProjectResponse>(
      "/projects"
    );

  return response.data.data;
}

export async function createProject(
  data: ProjectFormData
) {
  const response = await api.post("/projects", {
    ...data,
    status: "ONGOING",
  });

  return response.data.data;
}