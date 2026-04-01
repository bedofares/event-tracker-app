interface TimelineMarkerProps {
  count: number;
}
export function TimelineMarker({ count }: Readonly<TimelineMarkerProps>) {
  return (
    <span className="w-8 h-8 rounded-full bg-(--primary-color) flex items-center justify-center text-white font-bold text-sm">
      {count}
    </span>
  );
}
