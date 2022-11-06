export const getFormattedDate = (unixTimestampMs: number) => {
  const date = new Date(unixTimestampMs);
  return date.toLocaleString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};
