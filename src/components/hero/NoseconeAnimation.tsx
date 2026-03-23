"use client";

import { motion } from "framer-motion";

export default function NoseconeAnimation() {
  return (
    <svg
      viewBox="0 0 220 80"
      width="220"
      height="80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Von Kármán nosecone profile */}
      <motion.path
        d="M 10,40 C 30,38 60,32 95,26 C 125,21 155,20 170,20 L 200,20 L 200,60 L 170,60 C 155,60 125,59 95,54 C 60,48 30,42 10,40 Z"
        stroke="#4fc3f7"
        strokeWidth="1.2"
        fill="rgba(79,195,247,0.04)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut", delay: 0.4 }}
      />

      {/* Body tube extension */}
      <motion.line
        x1="200" y1="20" x2="215" y2="20"
        stroke="#4fc3f7"
        strokeWidth="1.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 2.4 }}
      />
      <motion.line
        x1="200" y1="60" x2="215" y2="60"
        stroke="#4fc3f7"
        strokeWidth="1.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 2.4 }}
      />

      {/* Centreline (dashed) */}
      <motion.line
        x1="8" y1="40" x2="215" y2="40"
        stroke="#1e6a8a"
        strokeWidth="0.8"
        strokeDasharray="4 4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      {/* Leader line + label */}
      <motion.line
        x1="95" y1="26" x2="70" y2="8"
        stroke="#4fc3f7"
        strokeWidth="0.6"
        strokeDasharray="2 2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.4, delay: 2.6 }}
      />
      <motion.text
        x="8"
        y="6"
        fill="#6b8fb0"
        style={{ fontFamily: "var(--font-mono)", fontSize: "6px", letterSpacing: "0.08em" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 2.8 }}
      >
        VON KÁRMÁN PROFILE
      </motion.text>

      {/* Tip dot */}
      <motion.circle
        cx="10" cy="40" r="1.5"
        fill="#4fc3f7"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 2.3 }}
      />
    </svg>
  );
}
