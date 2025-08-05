import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "Tech Mahindra",
      position: "Full Stack Developer",
      period: "Dec 2023 - Present",
      client: "Microsoft",
      project: "M365 Pages",
      description: "Frontend development for Microsoft 365 platform",
      current: true
    },
    {
      company: "The Math Company",
      position: "Software Developer",
      period: "June 2022 - Dec 2023",
      client: "Internal",
      project: "CODX Platform",
      description: "Full-stack development of data analytics platform",
      current: false
    },
    {
      company: "Echojoy",
      position: "Frontend Developer",
      period: "Dec 2020 - June 2022",
      client: "E-commerce",
      project: "Gift Card Platform",
      description: "Frontend development and payment integration",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My career progression in software development
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

            {/* Experience items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.company} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-4 h-4 rounded-full border-2 ${exp.current ? 'bg-tech-teal border-tech-teal' : 'bg-background border-primary'} relative z-10`}>
                      {exp.current && (
                        <div className="absolute inset-0 bg-tech-teal rounded-full animate-ping opacity-75"></div>
                      )}
                    </div>
                  </div>

                  {/* Experience card */}
                  <Card className="flex-1 border-border/50 bg-card/80 backdrop-blur-sm shadow-card-custom hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-primary font-medium mb-2">
                            {exp.company}
                          </p>
                          <p className="text-muted-foreground">
                            {exp.description}
                          </p>
                        </div>
                        
                        <div className="flex flex-col items-start md:items-end gap-2">
                          <Badge 
                            variant="outline" 
                            className={`whitespace-nowrap ${exp.current ? 'bg-tech-teal/20 text-tech-teal border-tech-teal/30' : 'bg-muted/20 text-muted-foreground border-muted/30'}`}
                          >
                            {exp.period}
                          </Badge>
                          {exp.current && (
                            <Badge variant="secondary" className="bg-tech-teal/20 text-tech-teal text-xs">
                              Current
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {exp.project}
                        </Badge>
                        {exp.client !== "Internal" && (
                          <Badge variant="outline" className="text-xs">
                            Client: {exp.client}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Career stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-tech-blue mb-1">3</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-tech-purple mb-1">3</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-tech-teal mb-1">∞</div>
              <div className="text-sm text-muted-foreground">Lines of Code</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};