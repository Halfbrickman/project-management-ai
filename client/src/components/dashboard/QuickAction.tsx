import { FolderPlus, SquarePlus, FilePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "New Project",
      icon: FolderPlus,
      path: "/projects/new",
    },
    {
      title: "New Task",
      icon: SquarePlus,
      path: "/tasks/new",
    },
    {
      title: "Daily Report",
      icon: FilePlus,
      path: "/reports/new",
    },
  ];

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <button
            key={action.title}
            onClick={() => navigate(action.path)}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-slate-200
              bg-white
              px-5
              py-3
              text-sm
              font-medium
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500
              hover:text-blue-600
              hover:shadow-md
              text-slate-700
            "
          >
            <Icon size={18} />

            {action.title}
          </button>
        );
      })}
    </div>
  );
}