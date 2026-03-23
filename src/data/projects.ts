import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "supersonic-intake",
    title: "Mixed-Compression Supersonic Intake",
    subtitle: "Ramjet Inlet Design & CFD Validation",
    description:
      "Analytical design of a mixed-compression inlet for a ramjet operating at Mach 4.0, using oblique shock theory and isentropic flow relations. Validated against ANSYS Fluent density-based solver with pressure recovery and total pressure loss as primary performance metrics.",
    specs: [
      { label: "M∞", value: "4.0" },
      { label: "η_p", value: ">0.92" },
      { label: "Compression", value: "Mixed" },
      { label: "Solver", value: "Density-based" },
      { label: "Method", value: "CFD + Analytical" },
    ],
    tools: ["MATLAB", "ANSYS Fluent"],
    category: "Aerodynamics · Propulsion",
    status: "Complete",
    drawingNumber: "DWG-AE-001",
  },
  {
    id: "active-aero-control",
    title: "Active Aerodynamics Control System",
    subtitle: "Autonomous Rocket Stabilisation",
    description:
      "Embedded control system for active rocket stabilisation using servo-actuated canard fins. An MPU6050 IMU feeds a Kalman filter running on Arduino at ~200 Hz to estimate attitude and drive PID corrective deflection in real time.",
    specs: [
      { label: "f_ctrl", value: "~200", unit: "Hz" },
      { label: "Sensor", value: "MPU6050" },
      { label: "Filter", value: "Kalman" },
      { label: "Actuator", value: "Servo canards" },
      { label: "Platform", value: "Arduino" },
    ],
    tools: ["C++", "Arduino", "KiCad", "Python"],
    category: "Control Systems · Embedded",
    status: "Ongoing",
    drawingNumber: "DWG-AE-002",
  },
  {
    id: "nosecone-cfd-study",
    title: "Nosecone Parametric CFD Study",
    subtitle: "Geometry Optimisation Across Mach Regimes",
    description:
      "Systematic CFD comparison of five nosecone profiles — conical, tangent ogive, Von Kármán, power series, and elliptical — across the subsonic-to-supersonic range. Pressure drag, wave drag, and Cd extracted for each geometry and Mach condition.",
    specs: [
      { label: "M", value: "0.3 – 3.0" },
      { label: "Geometries", value: "5" },
      { label: "Cases", value: "15+" },
      { label: "Output", value: "Cd, Cp" },
      { label: "Analysis", value: "Wave drag" },
    ],
    tools: ["ANSYS Fluent", "MATLAB", "Python"],
    category: "Aerodynamics · CFD",
    status: "Complete",
    drawingNumber: "DWG-AE-003",
  },
];
