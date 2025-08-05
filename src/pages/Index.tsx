import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © 2024 Sharath Kumar Sana. Built with React, TypeScript, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
