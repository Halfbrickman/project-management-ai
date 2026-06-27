import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";

import {
    getFilteredRowModel,
} from "@tanstack/react-table";

import DataTableToolbar from "./data-table-toolbar";

interface DataTableProps<TData> {
    columns: ColumnDef<TData>[];
    data: TData[];

    searchPlaceholder?: string;

    toolbarAction?: React.ReactNode;
}


export default function DataTable<TData>({
    columns,
    data,
    searchPlaceholder,
    toolbarAction,
}: DataTableProps<TData>) {
    const [globalFilter, setGlobalFilter] =
        useState("");
    const table = useReactTable({
        data,
        columns,

        state: {
            globalFilter,
        },

        onGlobalFilterChange:
            setGlobalFilter,

        getCoreRowModel:
            getCoreRowModel(),

        getFilteredRowModel:
            getFilteredRowModel(),
    });
    if (data.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16">
                <p className="text-lg font-semibold">
                    No data available
                </p>

                <p className="mt-2 text-sm text-slate-500">
                    There is nothing to display yet.
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-xl border bg-white">
            <DataTableToolbar
                search={globalFilter}
                onSearch={setGlobalFilter}
                searchPlaceholder={searchPlaceholder}
                action={toolbarAction}
            />
            <table className="min-w-full border-collapse">

                <thead className="border-b bg-slate-50">

                    {table
                        .getHeaderGroups()
                        .map((headerGroup) => (

                            <tr key={headerGroup.id}>

                                {headerGroup.headers.map(
                                    (header) => (

                                        <th
                                            key={header.id}
                                            className="
                        px-6
                        py-4
                        text-left
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-slate-500
                    "
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        </th>

                                    )
                                )}

                            </tr>

                        ))}

                </thead>

                <tbody>

                    {table
                        .getRowModel()
                        .rows.map((row) => (

                            <tr
                                key={row.id}
                                className="
                    border-b
                    border-slate-100
                    transition-colors
                    hover:bg-slate-50
                "
                            >

                                {row
                                    .getVisibleCells()
                                    .map((cell) => (

                                        <td
                                            key={cell.id}
                                            className="
                        px-6
                        py-4
                        text-left
                        align-middle
                        text-sm
                        text-slate-700
                    "
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>

                                    ))}

                            </tr>

                        ))}

                </tbody>

            </table>
        </div>
    );
}