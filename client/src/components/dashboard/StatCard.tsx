type StatCardProps = {
  title: string;
  value: number | string;
  subtitle?: string;
};

export default function StatCard({
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-slate-800">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}