"use client";

export default function NavBar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
      style={{
        height: "48px",
        backgroundColor: "rgba(10, 22, 40, 0.85)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #1a3a5c",
      }}
    >
      <span
        className="annotation"
        style={{ color: "#4fc3f7", fontSize: "0.7rem" }}
      >
        D.STEWART
      </span>

      <div className="flex items-center gap-8">
        <a
          href="#about"
          className="annotation transition-colors duration-150"
          style={{ color: "#6b8fb0" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#4fc3f7")}
          onMouseLeave={e => (e.currentTarget.style.color = "#6b8fb0")}
        >
          ABOUT
        </a>
        <a
          href="#projects"
          className="annotation transition-colors duration-150"
          style={{ color: "#6b8fb0" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#4fc3f7")}
          onMouseLeave={e => (e.currentTarget.style.color = "#6b8fb0")}
        >
          PROJECTS
        </a>
      </div>
    </nav>
  );
}
