import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "A full-featured e-commerce application with user authentication, product catalog, shopping cart, and payment integration using Stripe.",
      technologies: ["Flutter", "Firebase", "Stripe", "Provider", "REST API"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      features: ["User Authentication", "Shopping Cart", "Payment Gateway", "Order Tracking"]
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive social media management app with analytics, post scheduling, and multi-platform integration.",
      technologies: ["Flutter", "GraphQL", "BLoC", "Hive", "Push Notifications"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      features: ["Analytics Dashboard", "Post Scheduling", "Real-time Updates", "Multi-platform"]
    },
    {
      title: "Fitness Tracking App",
      description: "A comprehensive fitness app with workout tracking, nutrition logging, progress analytics, and social features.",
      technologies: ["Flutter", "SQLite", "Charts", "Camera", "Health APIs"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      features: ["Workout Tracking", "Nutrition Logging", "Progress Charts", "Social Features"]
    },
    {
      title: "Travel Planning App",
      description: "An intuitive travel planning application with itinerary management, expense tracking, and offline maps integration.",
      technologies: ["Flutter", "Google Maps", "Local Storage", "API Integration"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      features: ["Itinerary Planning", "Expense Tracking", "Offline Maps", "Weather Integration"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent Flutter applications and mobile development work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card-gradient border-border/50 shadow-elegant hover:shadow-glow-accent transition-all duration-300 group animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-muted-foreground">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-1">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2 flex-1">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2 flex-1">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="gap-2">
            <Github className="w-4 h-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;