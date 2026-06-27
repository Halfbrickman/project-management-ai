import { cn } from "@/lib/utils";

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "success"
    | "warning"
    | "danger";
}

export function Badge({
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-slate-100 text-slate-700",

    success:
      "bg-green-100 text-green-700",

    warning:
      "bg-yellow-100 text-yellow-700",

    danger:
      "bg-red-100 text-red-700",
  };

  return (
    <div
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}