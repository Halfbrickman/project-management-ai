import StatCard from "./StatCard";
import { useDashboard } from "@/hooks/useDashboard";

export default function StatsGrid() {
  const { data, isLoading } = useDashboard();

  if (isLoading) {
    return (
      <div
        className="
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="
              h-36
              animate-pulse
              rounded-2xl
              bg-slate-200
            "
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      <StatCard
        title="Total Projects"
        value={data?.totalProjects ?? 0}
      />

      <StatCard
        title="Total Tasks"
        value={data?.totalTasks ?? 0}
      />

      <StatCard
        title="Completed Tasks"
        value={data?.completedTasks ?? 0}
      />

      <StatCard
        title="Completion Rate"
        value={`${data?.completionRate ?? 0}%`}
      />
    </div>
  );
}