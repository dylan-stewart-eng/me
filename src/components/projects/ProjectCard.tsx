"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";
import CornerMarks from "@/components/ui/CornerMarks";
import SpecAnnotation from "./SpecAnnotation";
import SpecBadge from "./SpecBadge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusColors: Record<Project["status"], { text: string; border: string }> = {
  Complete: { text: "#4fc3f7", border: "rgba(79,195,247,0.25)" },
  Ongoing:  { text: "#ffd166", border: "rgba(255,209,102,0.25)" },
  Research: { text: "#6b8fb0", border: "rgba(107,143,176,0.25)" },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const status = statusColors[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
    >
      <CornerMarks className="spec-card p-5 h-full flex flex-col gap-4">

        {/* Header row */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span
            className="annotation"
            style={{ fontSize: "0.6rem", color: "#6b8fb0" }}
          >
            {project.drawingNumber}
          </span>
          <div className="flex items-center gap-2">
            <span
              className="annotation"
              style={{ fontSize: "0.6rem", color: "#6b8fb0" }}
            >
              {project.category}
            </span>
            <span
              className="annotation"
              style={{
                fontSize: "0.6rem",
                color: status.text,
                border: `1px solid ${status.border}`,
                padding: "1px 6px",
              }}
            >
              {project.status.toUpperCase()}
            </span>
          </div>
        </div>

        <hr className="bp-rule" />

        {/* Title */}
        <div>
          <h3
            className="font-display font-semibold leading-snug mb-1"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.05rem",
              color: "#e8f4fd",
            }}
          >
            {project.title}
          </h3>
          <p
            className="annotation"
            style={{ fontSize: "0.65rem", color: "#4fc3f7" }}
          >
            {project.subtitle}
          </p>
        </div>

        <hr className="bp-rule" />

        {/* Key specifications */}
        <div>
          <p
            className="annotation mb-2"
            style={{ fontSize: "0.6rem", color: "#6b8fb0" }}
          >
            KEY SPECIFICATIONS
          </p>
          <div className="flex flex-col gap-1.5">
            {project.specs.map((spec) => (
              <SpecAnnotation key={spec.label} {...spec} />
            ))}
          </div>
        </div>

        <hr className="bp-rule" />

        {/* Description */}
        <p
          className="flex-1"
          style={{
            color: "#6b8fb0",
            fontSize: "0.82rem",
            lineHeight: "1.65",
            fontFamily: "var(--font-display)",
          }}
        >
          {project.description}
        </p>

        <hr className="bp-rule" />

        {/* Tool badges */}
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <SpecBadge key={tool} tool={tool} />
          ))}
        </div>

      </CornerMarks>
    </motion.div>
  );
}
