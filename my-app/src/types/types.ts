export type IncidentStatus = "open" | "in_progress" | "resolved";

export type IncidentSeverity = "low" | "medium" | "high";

export type Incident = {
  id: number;
  name: string;
  description: string;
  date: Date;
  status: IncidentStatus;
  severity: IncidentSeverity;
};