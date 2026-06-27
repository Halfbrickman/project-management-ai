import ProjectTable from "@/components/project/ProjectTable";
import PageHeader from "@/components/ui/page-header";

export default function ProjectPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Projects"
        description="Manage all projects in your workspace."
      />

      <ProjectTable />
    </div>
  );
}