interface SpecBadgeProps {
  tool: string;
}

export default function SpecBadge({ tool }: SpecBadgeProps) {
  return <span className="tool-badge">{tool}</span>;
}
