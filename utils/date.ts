type DateTimeFormatOptionKey = 'MEDIUM';

const DateTimeFormatOptions: Record<DateTimeFormatOptionKey, Intl.DateTimeFormatOptions> = {
  MEDIUM: {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  },
};

export const formatJpTimestamp = (
  unixTimestampMs: number,
  optionKey?: DateTimeFormatOptionKey
) => {
  const date = new Date(unixTimestampMs);

  if (!optionKey) {
    return date.toLocaleString("ja-JP");
  }

  const options = DateTimeFormatOptions[optionKey]
  return date.toLocaleString("ja-JP", options);
};
