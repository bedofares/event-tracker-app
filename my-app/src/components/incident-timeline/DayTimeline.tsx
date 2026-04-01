import { Timeline } from "primereact/timeline";
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
    <section className="mb-8">
      <Timeline
        value={[group]}
        marker={() => <TimelineMarker count={group.incidents.length} />}
        opposite={() => (
          <TimelineHeader isoDate={group.isoDate} label={group.label} />
        )}
        content={() => (
          <div className="flex flex-col gap-2 pb-4">
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
        )}
      />
    </section>
  );
}
