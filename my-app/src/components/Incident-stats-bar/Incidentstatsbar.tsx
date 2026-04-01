import { Card } from "primereact/card";

import type { Incident } from "../../types/types";

interface IncidentStatsBarProps {
  incidents: Incident[];
}

interface StatConfig {
  label: string;
  count: number;
  icon: string;
  colorClass: string;
  bgClass: string;
}

export function IncidentStatsBar({
  incidents,
}: Readonly<IncidentStatsBarProps>) {
  const openCount = incidents.filter((i) => i.status === "open").length;
  const inProgressCount = incidents.filter(
    (i) => i.status === "in_progress",
  ).length;
  const resolvedCount = incidents.filter((i) => i.status === "resolved").length;
  const highSeverityCount = incidents.filter(
    (i) => i.severity === "high",
  ).length;

  const stats: StatConfig[] = [
    {
      label: "Open",
      count: openCount,
      colorClass: "text-red-500",
      bgClass: "bg-red-50",
      icon: "pi pi-exclamation-circle",
    },
    {
      label: "In Progress",
      count: inProgressCount,
      colorClass: "text-orange-400",
      bgClass: "bg-orange-50",
      icon: "pi pi-clock",
    },
    {
      label: "Resolved",
      count: resolvedCount,
      colorClass: "text-emerald-500",
      bgClass: "bg-emerald-50",
      icon: "pi pi-check-square",
    },
    {
      label: "High Severity",
      count: highSeverityCount,
      colorClass: "text-red-500",
      bgClass: "bg-red-50",
      icon: "pi pi-exclamation-triangle",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="border border-gray-100"
          pt={{
            content: { className: "p-0!" },
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <div
                className={`p-2 w-fit rounded-xl ${stat.bgClass} ${stat.colorClass}`}
              >
                <i className={`${stat.icon} text-xl!`} />
              </div>
            </div>
            <span className={`text-3xl font-semibold ${stat.colorClass}`}>
              {stat.count}
            </span>
          </div>
          <span className="block text-sm mt-2 text-gray-500">{stat.label}</span>
        </Card>
      ))}
    </div>
  );
}
