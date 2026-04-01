import { IncidentCard } from "./IncidentCard";
import { TimelineHeader } from "./TimelineHeader";
import { TimelineMarker } from "./TimelineMarker";
import type { DayGroup } from "./utils/groupByDay";

interface DayTimelineProps {
  group: DayGroup;
  startIndex: number;
  focusedIndex: number;
  onFocusChange: (index: number) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  itemRefs: React.RefObject<(HTMLDivElement | null)[]>;
}

export function DayTimeline({
  group,
  startIndex,
  focusedIndex,
  onFocusChange,
  handleKeyDown,
  itemRefs,
}: Readonly<DayTimelineProps>) {
  return (
    <section
      aria-label={`Incidents on ${group.label}`}
      className="flex gap-4 mb-10"
    >
      <div className="w-40 shrink-0 text-right pt-1">
        <TimelineHeader isoDate={group.isoDate} label={group.label} />
      </div>

      <div className="relative flex flex-col items-center">
        <TimelineMarker count={group.incidents.length} />
        <div className="flex-1 w-[2px] bg-gray-200 mt-1" />
      </div>

      <div className="flex-1 flex flex-col gap-3 pb-4 min-w-0">
        {group.incidents.map((incident, index) => {
          const globalIndex = startIndex + index;

          return (
            <IncidentCard
              key={incident.id}
              incident={incident}
              tabIndex={globalIndex === focusedIndex ? 0 : -1}
              onFocus={() => onFocusChange(globalIndex)}
              onKeyDown={handleKeyDown}
              ref={(el) => {
                itemRefs.current[globalIndex] = el;
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
