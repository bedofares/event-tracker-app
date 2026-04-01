type Severity =
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "secondary"
  | "contrast";

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-GB");
};

export const capitalize = (value: string) =>
  value?.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());

export const getStatusColor = (status: string): Severity | null => {
  switch (status) {
    case "open":
      return "contrast";
    case "in_progress":
      return "info";
    case "resolved":
      return "success";
    default:
      return null;
  }
};

export const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "low":
      return "success";
    case "medium":
      return "warning";
    case "high":
      return "danger";
    default:
      return null;
  }
};
