"use client";

interface CornerMarksProps {
  children: React.ReactNode;
  className?: string;
}

export default function CornerMarks({ children, className = "" }: CornerMarksProps) {
  return (
    <div className={`corner-marks relative ${className}`}>
      <span className="corner-mark-tr" aria-hidden="true" />
      <span className="corner-mark-bl" aria-hidden="true" />
      {children}
    </div>
  );
}
