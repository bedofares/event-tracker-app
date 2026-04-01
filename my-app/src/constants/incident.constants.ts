import type { IncidentStatus, IncidentSeverity } from "../types/types";

export const STATUSES: { label: string; value: IncidentStatus }[] = [
  { label: "Open", value: "open" },
  { label: "In Progress", value: "in_progress" },
  { label: "Resolved", value: "resolved" },
];

export const SEVERITIES: { label: string; value: IncidentSeverity }[] = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];