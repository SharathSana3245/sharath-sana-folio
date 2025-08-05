import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "M365 Pages",
      company: "Tech Mahindra",
      client: "Microsoft",
      period: "Dec 2023 - Present",
      description: "Working on Microsoft 365 web platform development, focusing on modern frontend architecture and user experience optimization.",
      technologies: ["React", "TypeScript", "Microsoft Graph API"],
      status: "ongoing"
    },
    {
      title: "CODX Platform",
      company: "The Math Company",
      client: "Internal",
      period: "June 2022 - Dec 2023",
      description: "Developed a comprehensive data analytics platform with interactive dashboards and real-time data visualization capabilities.",
      technologies: ["React", "Node.js", "GraphQL", "D3.js"],
      status: "completed"
    },
    {
      title: "Echojoy Gift Card Platform",
      company: "Echojoy",
      client: "E-commerce",
      period: "Dec 2020 - June 2022",
      description: "Built a complete gift card management system with payment integration and user-friendly interface for seamless transactions.",
      technologies: ["JavaScript", "REST APIs", "CSS", "Payment Gateway"],
      status: "completed"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "ongoing" 
      ? "bg-tech-teal/20 text-tech-teal border-tech-teal/30" 
      : "bg-muted/20 text-muted-foreground border-muted/30";
  };

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key projects that showcase my experience in full-stack development
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm shadow-card-custom hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getStatusColor(project.status)}`}
                    >
                      {project.status === "ongoing" ? "Active" : "Completed"}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building className="w-4 h-4" />
                      <span>{project.company}</span>
                      {project.client !== "Internal" && (
                        <>
                          <span>•</span>
                          <span className="text-primary font-medium">Client: {project.client}</span>
                        </>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary" 
                        className="text-xs bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Hover effect gradient */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};