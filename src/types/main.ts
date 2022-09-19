export type KeyStatsVariable =
  | "conversion-rate"
  | "invites-sent"
  | "of-feedback"
  | "pre-review-delays";

export type TimelineProperty = "days" | "weeks" | "months" | "years";

export type GranularItem = {
  value: string;
  year: number;
};

export type GranularValues = {
  [key in TimelineProperty]: GranularItem[];
};
