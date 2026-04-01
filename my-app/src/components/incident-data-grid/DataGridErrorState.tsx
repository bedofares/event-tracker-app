import { Button } from "primereact/button";

interface DataGridErrorStateProps {
  onRetry: () => void;
}

export function DataGridErrorState({
  onRetry,
}: Readonly<DataGridErrorStateProps>) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 p-8">
      <div className="w-[72px] h-[72px] rounded-full bg-red-50 flex items-center justify-center">
        <i className="pi pi-exclamation-triangle text-[1.75rem] text-red-700" />
      </div>

      <h2 className="m-0 text-xl">Failed to load incidents</h2>

      <p className="m-0 text-gray-500 max-w-[420px]">
        We couldn't retrieve the incident data. Check your connection and try
        again.
      </p>

      {onRetry && (
        <Button label="Retry" icon="pi pi-refresh" outlined onClick={onRetry} />
      )}
    </div>
  );
}
