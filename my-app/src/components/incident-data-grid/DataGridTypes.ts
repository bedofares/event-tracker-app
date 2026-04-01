import type { ColumnProps } from "primereact/column";

export type ColumnDefinition = {
  field: string;
  header: string;
  props?: Partial<ColumnProps>;
};

export type Severity = 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'contrast';
