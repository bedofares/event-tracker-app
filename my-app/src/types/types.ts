export type Incident = {
  id: number;
  name: string;
  description: string;
  date: Date;
  status: "open" | "in_progress" | "resolved";
  severity: "low" | "medium" | "high";
};