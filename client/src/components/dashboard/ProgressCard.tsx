import { useDashboard } from "@/hooks/useDashboard";

export default function ProgressCard() {
  const { data } = useDashboard();

  const percentage =
    data?.completionRate ?? 0;

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold">
            Overall Progress
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Task completion rate
          </p>

        </div>

        <span className="text-3xl font-bold">
          {percentage}%
        </span>

      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className="
            h-full
            rounded-full
            bg-emerald-500
            transition-all
            duration-700
          "
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}