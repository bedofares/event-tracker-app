import type { Incident } from "../../../types/types";

export interface DayGroup {
  label: string;
  isoDate: string;
  incidents: Incident[];
}

export function groupByDay(incidents: Incident[]): DayGroup[] {
  const map = new Map<string, Incident[]>();

  incidents.forEach((incident) => {
    const key = new Date(incident.date).toISOString().slice(0, 10);

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key)!.push(incident);
  });

  return Array.from(map.entries())
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([isoDate, items]) => ({
      isoDate,
      label: new Date(isoDate).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      incidents: items.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    }));
}
