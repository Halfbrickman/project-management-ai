import type { ColumnDef } from "@tanstack/react-table";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/date";
import TableActions from "@/components/ui/table-actions";

export const columns: ColumnDef<Project>[] = [
    {
        accessorKey: "name",
        header: "Project",
    },

    {
        id: "manager",

        header: "Project Manager",

        cell: ({ row }) => {

            const pm = row.original.pm;

            return (

                <div>

                    <div className="font-medium">
                        {pm.name}
                    </div>

                    <div className="text-xs text-slate-500">
                        {pm.email}
                    </div>

                </div>

            );

        },
    },

    {
        accessorKey: "status",

        header: "Status",

        cell: ({ row }) => {

            const status = row.original.status;

            const variant =
                status === "DONE"
                    ? "success"
                    : status === "ONGOING"
                        ? "warning"
                        : "default";

            return (
                <Badge variant={variant}>
                    {status}
                </Badge>
            );
        },
    },

    {
        accessorKey: "deadline",

        header: "Deadline",

        cell: ({ row }) =>
            formatDate(row.original.deadline),
    },
    {
        id: "actions",

        header: () => (
            <div className="text-center">
                Actions
            </div>
        ),

        cell: ({ row }) => (
            <TableActions
                onView={() => console.log(row.original.id)}
                onEdit={() => console.log(row.original.id)}
                onDelete={() => console.log(row.original.id)}
            />
        ),
    }
];