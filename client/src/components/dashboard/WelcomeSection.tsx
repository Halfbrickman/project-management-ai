import { useAuthContext } from "@/contexts/AuthContext";
import QuickActions from "./QuickAction";

export default function WelcomeSection() {
  const { user } = useAuthContext();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  return (
    <div
      className="
        rounded-3xl
        bg-gradient-to-r
        from-slate-900
        to-slate-800
        p-8
        text-white
        shadow-lg
      "
    >
      <p className="text-slate-300 text-sm">
        {greeting}
      </p>

      <h1 className="mt-2 text-4xl font-bold text-white!">
        {user?.name}
      </h1>

      <p className="mt-4 text-slate-300">
        Welcome back. Here's your project overview for today.
      </p>

      <QuickActions />
    </div>
  );
}