import { SEVERITIES, STATUSES } from "../../constants/incident.constants";
import type { Incident } from "../../types/types";
import { formatDate } from "./DataGrid.helpers";
import {
  dateFilterTemplate,
  multiSelectFilterTemplate,
  tagTemplate,
} from "./DataGrid.templates";

import type { ColumnProps } from "primereact/column";

type ColumnDefinition = {
  field: string;
  header: string;
  props?: Partial<ColumnProps>;
};

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
