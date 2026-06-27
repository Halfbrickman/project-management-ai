// import Button from "@/components/ui/Button";
import CreateProjectDialog from "./CreateProjectDialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

import DataTable from "@/components/ui/data-table";
import { columns } from "./columns";
import { useProjects } from "@/hooks/useProjects";

export default function ProjectTable() {
  const { data, isLoading } = useProjects();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project List</CardTitle>

        <CardDescription>
          All registered projects.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <DataTable
          columns={columns}
          data={data ?? []}
          searchPlaceholder="Search projects..."
          toolbarAction={<CreateProjectDialog />}
        />
      </CardContent>
    </Card>
  );
}