"use client";

import { motion } from "framer-motion";
import NoseconeAnimation from "./NoseconeAnimation";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center min-h-screen px-6 md:px-16 lg:px-24 pt-12"
      style={{ overflow: "hidden" }}
    >
      {/* Large grid overlay */}
      <div className="blueprint-large-grid" />

      {/* Drawing title block — bottom-right decorative */}
      <div
        className="absolute bottom-8 right-8 text-right pointer-events-none select-none"
        style={{ opacity: 0.12 }}
      >
        <p className="annotation" style={{ fontSize: "0.55rem" }}>DWG NO. PORT-2025</p>
        <p className="annotation" style={{ fontSize: "0.55rem" }}>SCALE 1:1</p>
        <p className="annotation" style={{ fontSize: "0.55rem" }}>SHEET 1 OF 1</p>
      </div>

      {/* Nosecone — top right */}
      <div
        className="absolute top-24 right-8 md:right-16 lg:right-24 pointer-events-none"
        style={{ opacity: 0.55 }}
      >
        <NoseconeAnimation />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <motion.p
          className="annotation mb-4"
          style={{ color: "#4fc3f7", fontSize: "0.7rem" }}
          {...fadeUp(0.1)}
        >
          // PORTFOLIO — AEROSPACE ENGINEERING
        </motion.p>

        <motion.h1
          className="font-display font-bold leading-none tracking-tight mb-3"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            color: "#e8f4fd",
            fontFamily: "var(--font-display)",
          }}
          {...fadeUp(0.2)}
        >
          Dylan Stewart
        </motion.h1>

        <motion.h2
          className="font-display font-medium mb-3"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: "#4fc3f7",
            fontFamily: "var(--font-display)",
          }}
          {...fadeUp(0.3)}
        >
          MEng Aerospace Engineering
        </motion.h2>

        <motion.p
          className="annotation mb-6"
          style={{ fontSize: "0.68rem" }}
          {...fadeUp(0.4)}
        >
          Queen&apos;s University Belfast · Martin-Baker Aircraft
        </motion.p>

        <motion.p
          className="mb-8 leading-relaxed"
          style={{
            color: "#6b8fb0",
            fontSize: "0.95rem",
            maxWidth: "480px",
            fontFamily: "var(--font-display)",
          }}
          {...fadeUp(0.5)}
        >
          Engineering student specialising in aerodynamics, CFD simulation,
          and embedded control systems. I build things that fly and analyse
          things that move fast.
        </motion.p>

        <motion.a
          href="#projects"
          className="bp-btn"
          {...fadeUp(0.6)}
        >
          View Projects →
        </motion.a>
      </div>

      {/* Dashed leader to projects section */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 flex items-center px-6 md:px-16 lg:px-24 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div
          className="flex-1"
          style={{ borderTop: "1px dashed #1a3a5c" }}
        />
        <span
          className="annotation ml-4 shrink-0"
          style={{ fontSize: "0.6rem" }}
        >
          SECTION 2 — PROJECTS ›
        </span>
      </motion.div>
    </section>
  );
}
