export interface ProjectSpec {
  label: string;
  value: string;
  unit?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  specs: ProjectSpec[];
  tools: string[];
  category: string;
  status: "Complete" | "Ongoing" | "Research";
  drawingNumber: string;
}
