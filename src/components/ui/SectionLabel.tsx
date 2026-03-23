interface SectionLabelProps {
  number: string;
  title: string;
}

export default function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span
        className="annotation shrink-0"
        style={{ color: "#4fc3f7" }}
      >
        [ {number} ]
      </span>
      <div
        className="flex-1 h-px"
        style={{ backgroundColor: "#1a3a5c" }}
      />
      <span className="annotation shrink-0">{title}</span>
    </div>
  );
}
