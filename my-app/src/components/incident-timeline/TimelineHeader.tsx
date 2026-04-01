interface TimelineHeaderProps {
  isoDate: string;
  label: string;
}

export function TimelineHeader({
  isoDate,
  label,
}: Readonly<TimelineHeaderProps>) {
  return (
    <time
      dateTime={isoDate}
      className="font-semibold text-sm whitespace-nowrap"
    >
      {label}
    </time>
  );
}
