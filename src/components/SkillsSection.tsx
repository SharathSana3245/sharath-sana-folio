import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", category: "core" },
    { name: "React", category: "frontend" },
    { name: "TypeScript", category: "core" },
    { name: "CSS", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Next.js", category: "framework" },
    { name: "GraphQL", category: "api" },
    { name: "REST APIs", category: "api" },
    { name: "UI Libraries", category: "frontend" }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "core": return "bg-tech-blue/20 text-tech-blue border-tech-blue/30";
      case "frontend": return "bg-tech-purple/20 text-tech-purple border-tech-purple/30";
      case "backend": return "bg-tech-teal/20 text-tech-teal border-tech-teal/30";
      case "framework": return "bg-primary/20 text-primary border-primary/30";
      case "api": return "bg-accent/20 text-accent border-accent/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section heading */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills grid */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skills.map((skill, index) => (
              <Badge 
                key={skill.name}
                variant="outline"
                className={`px-6 py-3 text-base font-medium border transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-default ${getCategoryColor(skill.category)}`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {skill.name}
              </Badge>
            ))}
          </div>

          {/* Category legend */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-tech-blue rounded-full"></div>
              <span className="text-muted-foreground">Core Languages</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-tech-purple rounded-full"></div>
              <span className="text-muted-foreground">Frontend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-tech-teal rounded-full"></div>
              <span className="text-muted-foreground">Backend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">Frameworks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-muted-foreground">APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};