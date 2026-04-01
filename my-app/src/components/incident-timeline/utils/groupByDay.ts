import type { Incident } from "../../../types/types";

export interface DayGroup {
  label: string;
  isoDate: string;
  incidents: Incident[];
}

function getLocalDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function groupByDay(incidents: Incident[]): DayGroup[] {
  const map = new Map<string, Incident[]>();

  incidents.forEach((incident) => {
    const date = new Date(incident.date);
    const key = getLocalDateKey(date);

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key)!.push(incident);
  });

  return Array.from(map.entries())
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([isoDate, items]) => {
      const date = new Date(isoDate);

      return {
        isoDate,
        label: date.toLocaleDateString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        incidents: items.sort(
          (a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        ),
      };
    });
}