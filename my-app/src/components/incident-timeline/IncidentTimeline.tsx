import type { Incident } from "../../types/types";
import { DayTimeline } from "./DayTimeline";
import { useTimelineKeyboardNavigation } from "./hooks/useTimelineKeyboardNavigation";
import { groupByDay } from "./utils/groupByDay";

interface IncidentTimelineProps {
  data: Incident[];
}

export function IncidentTimeline({ data }: IncidentTimelineProps) {
  const groups = groupByDay(data);

  const totalItems = groups.reduce(
    (sum, group) => sum + group.incidents.length,
    0,
  );

  const { focusedIndex, setFocusedIndex, handleKeyDown, itemRefs } =
    useTimelineKeyboardNavigation(totalItems);

  if (groups.length === 0) {
    return (
      <p className="text-center text-gray-500">No incidents to display.</p>
    );
  }

  return (
    <div role="feed" onKeyDown={handleKeyDown} className="flex flex-col">
      {groups.map((group, groupIndex) => {
        const startIndex = groups
          .slice(0, groupIndex)
          .reduce((sum, g) => sum + g.incidents.length, 0);

        return (
          <DayTimeline
            key={group.isoDate}
            group={group}
            startIndex={startIndex}
            focusedIndex={focusedIndex}
            onFocusChange={setFocusedIndex}
            handleKeyDown={handleKeyDown}
            itemRefs={itemRefs}
          />
        );
      })}
    </div>
  );
}
