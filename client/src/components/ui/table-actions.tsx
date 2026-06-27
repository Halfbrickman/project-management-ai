import { Eye, Pencil, Trash2 } from "lucide-react";

interface TableActionsProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function TableActions({
  onView,
  onEdit,
  onDelete,
}: TableActionsProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {onView && (
        <button
          onClick={onView}
          className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
        >
          <Eye size={18} />
        </button>
      )}

      {onEdit && (
        <button
          onClick={onEdit}
          className="rounded-lg p-2 text-slate-500 transition hover:bg-yellow-50 hover:text-yellow-600"
        >
          <Pencil size={18} />
        </button>
      )}

      {onDelete && (
        <button
          onClick={onDelete}
          className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
        >
          <Trash2 size={18} />
        </button>
      )}
    </div>
  );
}