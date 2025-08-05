import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-tech-blue rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-tech-purple rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-tech-teal rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-1000">
            Sharath Kumar Sana
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            Full Stack Developer / Frontend Specialist
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-in slide-in-from-bottom-4 duration-1000 delay-400">
            Passionate about crafting beautiful, performant web applications with modern technologies. 
            Transforming ideas into digital experiences that matter.
          </p>

          {/* Social links */}
          <div className="flex justify-center space-x-4 mb-12 animate-in slide-in-from-bottom-4 duration-1000 delay-600">
            <Button variant="outline" size="lg" className="group">
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Contact
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-800">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};