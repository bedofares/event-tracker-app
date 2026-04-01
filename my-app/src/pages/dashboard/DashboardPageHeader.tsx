import { Button } from "primereact/button";
import { useNavigate } from "react-router";

interface DashboardHeaderProps {
  onAddIncident: () => void;
}

export function DashboardHeader({
  onAddIncident,
}: Readonly<DashboardHeaderProps>) {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between flex-col md:flex-row">
      <div className="flex items-center gap-3">
        <Button
          icon="pi pi-arrow-left"
          text
          aria-label="Go back"
          onClick={() => navigate("/")}
        />
        <div>
          <h1 className="m-0 text-xl md:text-2xl">Incident Management Dashboard</h1>
          <p className="m-0 mt-1 text-sm text-gray-500">
            Monitor, manage, and track building incidents in real time.
          </p>
        </div>
      </div>

      <Button
        label="Add Incident"
        icon="pi pi-plus"
        size="small"
        onClick={onAddIncident}
        className="shrink-0 !mt-2 md:mt-0"
      />
    </header>
  );
}
