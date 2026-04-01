import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";

interface ColumnOptions {
  label: string;
  value: string;
}

interface DataGridHeaderProps {
  globalFilter: string;
  setGlobalFilter: (val: string) => void;
  columnOptions: ColumnOptions[];
  selectedColumns: string[];
  setSelectedColumns: (val: string[]) => void;
  setError: (error: boolean) => void;
}

export function DataGridHeader({
  globalFilter,
  setGlobalFilter,
  columnOptions,
  selectedColumns,
  setSelectedColumns,
  setError,
}: Readonly<DataGridHeaderProps>) {
  return (
    <div className="flex w-full justify-between gap-y-4 gap-x-5 pb-3">
      <div className="flex flex-col gap-1.5">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search incidents"
          />
        </IconField>
      </div>

      <div className="flex items-center justify-end gap-3 w-full">
        <Button
          label="Simulate Error"
          severity="danger"
          className="whitespace-nowrap"
          onClick={() => setError(true)}
          size="small"
        />

        <MultiSelect
          value={selectedColumns}
          options={columnOptions}
          onChange={(e) => setSelectedColumns(e.value)}
          optionLabel="label"
          optionValue="value"
          placeholder="Select columns"
          display="comma"
          showClear
          maxSelectedLabels={3}
          selectedItemsLabel="{0} columns"
          className="min-w-56 max-w-[20rem] w-full"
        />
      </div>
    </div>
  );
}