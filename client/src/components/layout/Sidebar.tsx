import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  FileText,
  Bot,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menus = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: FolderKanban,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: CheckSquare,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: FileText,
  },
  {
    name: "AI Recommendation",
    path: "/ai",
    icon: Bot,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex w-72 flex-col border-r border-slate-200 bg-white">

      {/* Logo */}
      <div className="border-b border-slate-200 px-8 py-7">

        <h1 className="text-2xl font-bold tracking-tight text-slate-800">
          PMAI
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Project Management AI
        </p>

      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2 p-5">

        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `
                flex items-center gap-3 rounded-xl px-4 py-3
                transition-all duration-200
                ${
                  isActive
                    ? "bg-slate-900 text-white shadow"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }
                `
              }
            >
              <Icon size={20} />

              <span className="font-medium">
                {menu.name}
              </span>

            </NavLink>
          );
        })}

      </nav>

      {/* User */}
      <div className="border-t border-slate-200 p-5">

        <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
            F
          </div>

          <div>

            <p className="font-semibold text-slate-800">
              Faridz
            </p>

            <p className="text-sm text-slate-500">
              Project Manager
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}