import { projects } from "@/data/projects";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="px-6 md:px-16 lg:px-24 py-20"
      style={{ position: "relative" }}
    >
      <SectionLabel number="02" title="PROJECTS" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Footer annotation */}
      <div
        className="mt-16 flex items-center gap-4"
        style={{ opacity: 0.35 }}
      >
        <div className="flex-1" style={{ borderTop: "1px solid #1a3a5c" }} />
        <p className="annotation" style={{ fontSize: "0.6rem" }}>
          DYLAN STEWART · MEng AEROSPACE ENGINEERING · QUB 2025
        </p>
        <div className="flex-1" style={{ borderTop: "1px solid #1a3a5c" }} />
      </div>
    </section>
  );
}
