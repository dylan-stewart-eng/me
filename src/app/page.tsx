import NavBar from "@/components/layout/NavBar";
import HeroSection from "@/components/hero/HeroSection";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
