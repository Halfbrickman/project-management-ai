import { Bell, Search } from "lucide-react";
import { useLocation } from "react-router-dom";

const pageConfig: Record<
  string,
  {
    title: string;
    subtitle: string;
  }
> = {
  "/dashboard": {
    title: "Dashboard",
    subtitle: "Welcome back 👋",
  },

  "/projects": {
    title: "Projects",
    subtitle: "Manage your active projects",
  },

  "/tasks": {
    title: "Tasks",
    subtitle: "Track your team's progress",
  },

  "/reports": {
    title: "Daily Reports",
    subtitle: "Monitor project reports",
  },

  "/ai": {
    title: "AI Recommendation",
    subtitle: "AI project analysis & insights",
  },
};

export default function Header() {
    const { pathname } = useLocation();

    const page =
        pageConfig[pathname] ??
        {
            title: "Dashboard",
            subtitle: "",
        };
    return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">

      {/* Left */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          {page.title}
        </h2>

        <p className="text-sm text-slate-500">
          {page.subtitle}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              w-72
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              py-2.5
              pl-10
              pr-4
              text-sm
              outline-none
              transition
              focus:border-slate-400
              focus:bg-white
            "
          />

        </div>

        {/* Notification */}
        <button
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            transition
            hover:bg-slate-100
          "
        >
          <Bell size={18} />
        </button>

        {/* User */}
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
            F
          </div>

          <div>

            <p className="text-sm font-semibold text-slate-800">
              Faridz
            </p>

            <p className="text-xs text-slate-500">
              Project Manager
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}