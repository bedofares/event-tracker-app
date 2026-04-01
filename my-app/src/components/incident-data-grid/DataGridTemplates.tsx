import { Calendar } from "primereact/calendar";
import type { ColumnFilterElementTemplateOptions } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";
import type { SelectItem } from "primereact/selectitem";
import { Tag } from "primereact/tag";
import {
  capitalize,
  getSeverityColor,
  getStatusColor,
} from "./utils/dataGridHelpers";


export const tagTemplate = (value: string, field: string) => {
  const severity =
    field === "status" ? getStatusColor(value) : getSeverityColor(value);

  return <Tag className="text-sm!" value={capitalize(value)} severity={severity} />;
};

export const multiSelectFilterTemplate =
  (optionsList: SelectItem[], placeholder: string) =>
  (options: ColumnFilterElementTemplateOptions) => (
    <MultiSelect
      value={options.value}
      options={optionsList}
      onChange={(e) => options.filterCallback(e.value)}
      placeholder={placeholder}
      display="chip"
    />
  );

export const dateFilterTemplate = (
  options: ColumnFilterElementTemplateOptions,
) => (
  <Calendar
    value={options.value}
    onChange={(e) => options.filterCallback(e.value)}
    dateFormat="dd-mm-yy"
  />
);
