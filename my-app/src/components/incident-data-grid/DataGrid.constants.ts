import type { Incident } from "../../types/types";
import { formatDate } from "./DataGrid.helpers";
import {
  dateFilterTemplate,
  multiSelectFilterTemplate,
  tagTemplate,
} from "./DataGrid.templates";
import type { ColumnDefinition } from "./DataGridTypes";

export const STATUSES = [
  { label: "Open", value: "open" },
  { label: "In Progress", value: "in_progress" },
  { label: "Resolved", value: "resolved" },
];

export const SEVERITIES = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

export const COLUMN_DEFINITIONS: ColumnDefinition[] = [
  {
    field: "description",
    header: "Description",
    props: {
      filterPlaceholder: "Search description",
      showFilterOperator: false,
      showAddButton: false,
    },
  },
  {
    field: "date",
    header: "Date",
    props: {
      dataType: "date",
      body: (rowData: Incident) => formatDate(rowData.date),
      filterElement: dateFilterTemplate,
    },
  },
  {
    field: "status",
    header: "Status",
    props: {
      body: (rowData: Incident) => tagTemplate(rowData.status, "status"),
      filterElement: multiSelectFilterTemplate(STATUSES, "Select status"),
      showFilterMatchModes: false,
      showFilterOperator: false,
      showAddButton: false,
    },
  },
  {
    field: "severity",
    header: "Severity",
    props: {
      body: (rowData: Incident) => tagTemplate(rowData.severity, "severity"),
      filterElement: multiSelectFilterTemplate(SEVERITIES, "Select severity"),
      showFilterMatchModes: false,
      showFilterOperator: false,
      showAddButton: false,
    },
  },
];
