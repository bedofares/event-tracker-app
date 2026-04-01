import { useState } from "react";

import { FilterMatchMode, FilterOperator } from "primereact/api";
import { Column } from "primereact/column";
import { DataTable, type DataTableFilterMeta } from "primereact/datatable";

import type { Incident } from "../../types/types";
import { COLUMN_DEFINITIONS } from "./DataGrid.constants";
import { DataGridHeader } from "./DataGrid.header";
import { DataGridErrorState } from "./DataGridErrorState";

interface DataGridProps {
  data: Incident[];
  loading: boolean;
}

export default function DataGrid({ data, loading }: Readonly<DataGridProps>) {
  const [error, setError] = useState<boolean>(false);
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    name: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    description: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    date: {
      value: null,
      matchMode: FilterMatchMode.DATE_IS,
    },
    status: {
      value: null,
      matchMode: FilterMatchMode.IN,
    },
    severity: {
      value: null,
      matchMode: FilterMatchMode.IN,
    },
  });

  const [globalFilter, setGlobalFilter] = useState<string>("");

  const [selectedColumns, setSelectedColumns] = useState<string[]>(() =>
    COLUMN_DEFINITIONS.map((col) => col.field),
  );

  const visibleColumns = COLUMN_DEFINITIONS.filter((col) =>
    selectedColumns.includes(col.field),
  );

  const columnOptions = COLUMN_DEFINITIONS.map((col) => ({
    label: col.header,
    value: col.field,
  }));

  if (error) {
    return <DataGridErrorState onRetry={() => setError(false)} />;
  }

  return (
    <div className="card p-4 h-full min-h-0 flex flex-col box-border overflow-hidden relative">
      {loading && (
        <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
          <i className="pi pi-spin pi-spinner text-[2rem]" />
        </div>
      )}

      <div className="min-w-200 w-full h-full flex flex-col">
        <DataTable
          dataKey="id"
          value={data}
          paginator
          rows={10}
          rowsPerPageOptions={[10, 25, 50]}
          showGridlines
          removableSort
          scrollable
          scrollHeight="flex"
          className="flex-1 min-h-0"
          header={DataGridHeader({
            globalFilter,
            setGlobalFilter,
            columnOptions,
            selectedColumns,
            setSelectedColumns,
            setError,
          })}
          filters={filters}
          globalFilter={globalFilter}
          globalFilterFields={["name", ...selectedColumns]}
          globalFilterMatchMode="contains"
          onFilter={(e) => setFilters(e.filters)}
          filterDisplay="menu"
          emptyMessage="No incidents match your filters."
          pt={{
            root: {
              className:
                "border border-gray-200 rounded-xl overflow-hidden bg-white",
            },
            header: {
              className: "bg-gray-50 p-3",
            },
            table: {
              className: "w-full",
            },
            tbody: {
              className: "divide-y",
            },
          }}
        >
          <Column
            field="name"
            header="Incident"
            sortable
            filter
            filterPlaceholder="Search by name"
            showFilterOperator={false}
            showAddButton={false}
            pt={{
              headerCell: {
                className: "bg-gray-100 text-left px-4 py-2",
              },
              bodyCell: {
                className: "px-4 py-2",
              },
            }}
          />

          {visibleColumns.map((col) => (
            <Column
              key={col.field}
              field={col.field}
              header={col.header}
              sortable
              filter
              {...col.props}
              pt={{
                headerCell: {
                  className: "bg-gray-100 text-left px-4 py-2",
                },
                bodyCell: {
                  className: "px-4 py-2",
                },
              }}
            />
          ))}
        </DataTable>
      </div>
    </div>
  );
}
