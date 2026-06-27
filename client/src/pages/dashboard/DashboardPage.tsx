import WelcomeSection from "@/components/dashboard/WelcomeSection";
import StatsGrid from "@/components/dashboard/StatsGrid";
import ProgressCard from "@/components/dashboard/ProgressCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <WelcomeSection />

      <StatsGrid />

      <ProgressCard />

    </div>
  );
}