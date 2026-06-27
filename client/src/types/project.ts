export interface ProjectManager {
  id: number;
  name: string;
  email: string;
}

export interface Project {
  id: number;

  name: string;

  description?: string;

  startDate: string;

  deadline: string;

  status: string;

  pmId: number;

  pm: ProjectManager;
}