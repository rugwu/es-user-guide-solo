import React from "react";

function toYYYYMMDD(value) {
  // If it's already a string like "2026-02-26", just return it
  if (typeof value === "string") {
    // optionally trim
    return value.trim();
  }

  // If YAML parsed it as a Date, format in UTC to avoid timezone shifts
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const y = value.getUTCFullYear();
    const m = String(value.getUTCMonth() + 1).padStart(2, "0");
    const d = String(value.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  return String(value);
}

export default function ReleaseDate({ date, label = "Release Date" }) {
  const formatted = toYYYYMMDD(date);

  return (
    <p style={{ marginTop: "0.25rem", marginBottom: "1rem", opacity: 0.85 }}>
      <strong>{label}:</strong> {formatted}
    </p>
  );
}
