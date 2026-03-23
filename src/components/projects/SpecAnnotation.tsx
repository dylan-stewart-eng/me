import { ProjectSpec } from "@/types/project";

export default function SpecAnnotation({ label, value, unit }: ProjectSpec) {
  return (
    <div className="flex items-end w-full">
      <span
        className="annotation shrink-0"
        style={{ fontSize: "0.7rem", color: "#6b8fb0" }}
      >
        {label}
      </span>
      <span className="spec-leader" />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "#e8f4fd",
          fontWeight: 500,
          letterSpacing: "0.02em",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </span>
      {unit && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "#ffd166",
            marginLeft: "3px",
          }}
        >
          {unit}
        </span>
      )}
    </div>
  );
}
