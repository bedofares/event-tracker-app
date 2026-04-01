import { useRef, useState } from "react";

export function useTimelineKeyboardNavigation(totalItems: number) {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    let newIndex = focusedIndex;

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      newIndex = Math.min(focusedIndex + 1, totalItems - 1);
    }

    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      newIndex = Math.max(focusedIndex - 1, 0);
    }

    if (e.key === "Home") {
      e.preventDefault();
      newIndex = 0;
    }

    if (e.key === "End") {
      e.preventDefault();
      newIndex = totalItems - 1;
    }

    if (newIndex !== focusedIndex) {
      setFocusedIndex(newIndex);
      itemRefs.current[newIndex]?.focus();
    }
  };

  return {
    focusedIndex,
    setFocusedIndex,
    handleKeyDown,
    itemRefs,
  };
}
