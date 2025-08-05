import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <Card className="relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm shadow-card-custom">
            <CardContent className="p-8 md:p-12">
              <div className="relative z-10">
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
                  Originally trained as a <span className="text-primary font-medium">Civil Engineer</span>, I discovered my passion for software development after graduating in 2020. Since then, I've transitioned into full-stack development with a strong focus on frontend engineering.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                  I'm driven by a love for <span className="text-tech-blue font-medium">clean, intuitive UI</span>, modern web technologies, and building meaningful digital experiences that solve real-world problems. Every line of code I write is an opportunity to create something that makes a difference.
                </p>
              </div>

              {/* Background decoration */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-secondary opacity-10 rounded-full blur-2xl"></div>
            </CardContent>
          </Card>

          {/* Journey highlight */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-muted/50 rounded-full border border-border/50">
              <span className="text-sm font-medium text-muted-foreground">Journey</span>
              <span className="text-sm font-mono text-primary">Civil Engineering → Software Development</span>
              <span className="w-2 h-2 bg-tech-teal rounded-full animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};