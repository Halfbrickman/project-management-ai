import type { ReactNode } from "react";
import SearchInput from "./search-input";

interface DataTableToolbarProps {
  search: string;
  onSearch: (value: string) => void;
  searchPlaceholder?: string;
  action?: ReactNode;
}

export default function DataTableToolbar({
  search,
  onSearch,
  searchPlaceholder,
  action,
}: DataTableToolbarProps) {
  return (
    <div className="flex flex-col gap-4 border-b bg-white p-4 md:flex-row md:items-center md:justify-between">
      <SearchInput
        value={search}
        onChange={onSearch}
        placeholder={searchPlaceholder}
      />

      {action}
    </div>
  );
}