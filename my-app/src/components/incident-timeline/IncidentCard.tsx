import { Badge } from "primereact/badge";
import { Card } from "primereact/card";
import { forwardRef } from "react";
import type { Incident } from "../../types/types";
import {
  capitalize,
  formatDate,
  getSeverityColor,
  getStatusColor,
} from "../incident-data-grid/utils/dataGridHelpers";

interface IncidentCardProps {
  incident: Incident;
  tabIndex: number;
  onFocus: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export const IncidentCard = forwardRef<HTMLDivElement, IncidentCardProps>(
  function IncidentCard({ incident, tabIndex, onFocus, onKeyDown }, ref) {
    return (
      <div
        ref={ref}
        role="article"
        tabIndex={tabIndex}
        aria-label={`incident-title-${incident.name}`}
        aria-labelledby={`incident-title-${incident.name}`}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        className="rounded-(--border-radius) focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <Card className="mb-2">
          <div className="flex justify-between items-start gap-2">
            <div>
              <p className="font-semibold">{incident.name}</p>

              {incident.description && (
                <p className="mt-1 text-sm text-gray-500">
                  {incident.description}
                </p>
              )}

              <p className="mt-2 text-xs text-gray-500">
                {formatDate(incident.date)}
              </p>
            </div>

            <div className="flex flex-col items-end gap-1">
              <Badge
                value={capitalize(incident.severity)}
                severity={getSeverityColor(incident.severity)}
              />
              <Badge
                value={capitalize(incident.status)}
                severity={getStatusColor(incident.status)}
              />
            </div>
          </div>
        </Card>
      </div>
    );
  },
);
