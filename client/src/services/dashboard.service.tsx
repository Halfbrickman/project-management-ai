import api from "@/services/api";

export interface DashboardSummary {
  totalProjects: number;
  totalTasks: number;
  completedTasks: number;
  ongoingTasks: number;
  completionRate: number;
}

interface DashboardResponse {
  success: boolean;
  data: DashboardSummary;
}

export async function getDashboardSummary() {
  const response =
    await api.get<DashboardResponse>(
      "/dashboard"
    );

  return response.data.data;
}