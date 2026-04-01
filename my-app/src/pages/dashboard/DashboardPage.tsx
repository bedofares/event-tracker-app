import { useEffect, useRef, useState } from "react";

import { TabPanel, TabView } from "primereact/tabview";
import { Toast } from "primereact/toast";

import DataGrid from "../../components/incident-data-grid/DataGrid";
import { IncidentForm } from "../../components/incident-form/IncidentForm";
import { IncidentStatsBar } from "../../components/Incident-stats-bar/Incidentstatsbar";
import { IncidentTimeline } from "../../components/incident-timeline/IncidentTimeline";
import { mockData } from "../../data/incident";
import type { Incident } from "../../types/types";
import { DashboardHeader } from "./DashboardPageHeader";

export function DashboardPage() {
  const [incidents, setIncidents] = useState(mockData);
  const [isLoading, setIsLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const toast = useRef<Toast>(null);

  //MOCK ONLY: simulate API loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAddIncident = (incident: Incident) => {
    setIncidents((prev) => [...prev, incident]);

    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Incident created successfully",
    });
  };

  return (
    <div className="h-screen max-h-screen p-16 pt-6 pb-0 box-border flex flex-col gap-5">
      <DashboardHeader onAddIncident={() => setShowDialog(true)} />

      <IncidentStatsBar incidents={incidents} />

      <div className="card flex-1 min-h-0 p-4 flex flex-col overflow-hidden">
        <TabView
          renderActiveOnly={false}
          className="flex-1 min-h-0 flex flex-col"
          pt={{
            panelContainer: {
              className: "flex-1 min-h-0 flex flex-col",
            },
          }}
        >
          <TabPanel
            header="Data Grid"
            pt={{
              root: {
                className: "min-h-0 flex flex-col",
              },
              content: {
                className: "flex-1 min-h-0 flex flex-col p-0",
              },
            }}
          >
            <DataGrid data={incidents} loading={isLoading} />
          </TabPanel>

          <TabPanel
            header="Timeline"
            pt={{
              root: {
                className: "min-h-0 flex-1 flex flex-col",
              },
              content: {
                className: "flex-1 min-h-0 overflow-y-auto p-4",
              },
            }}
          >
            <IncidentTimeline data={incidents} />
          </TabPanel>
        </TabView>
      </div>

      <Toast ref={toast} />

      <IncidentForm
        visible={showDialog}
        onHide={() => setShowDialog(false)}
        onSave={handleAddIncident}
      />
    </div>
  );
}
