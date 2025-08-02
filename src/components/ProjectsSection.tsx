import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: "1",
      title: "Bazar - بازار",
      description: "+100K Download A feature-rich multi-vendor marketplace app with a modern UI and advanced social commerce features.",
      technologies: ["Flutter", "Dart", "Firebase", "Laravel"],
      image: "/images/bazar/logo_banner.png",
      category: "ecommerce",
      featured: true,
      appStoreUrl: "https://apps.apple.com/app/6720723099",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.market.bazar",
      websiteUrl: "https://bazar.coms.sa",
    },
    {
      id: "2",
      title: "Salam for Cultural Communication",
      description: "A comprehensive platform for cultural communication and understanding in Saudi Arabia.",
      technologies: ["Laravel", "Next.js", "React.js", "WordPress"],
      image: "/images/salam/logo/logo_salam.png",
      category: "web",
      featured: true,
      websiteUrl: 'https://salam4cc.org/',
    },
    {
      id: "3",
      title: "DAFFA for Abayat",
      description: "An elegant e-commerce application for traditional clothing with modern features.",
      technologies: ["Flutter", "Google Maps", "API Integration"],
      image: "/images/daffa/logo.png",
      category: "ecommerce",
      featured: false,
      appStoreUrl: "https://apps.apple.com/us/app/daffa/id1502627950",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.daffa.app",
    },
    {
      id: "4",
      title: "Cool Car - كول كار",
      description: "Premium car protection & insulation products at your fingertips",
      technologies: ["Flutter", "Firebase", "Laravel"],
      image: "/images/cool_car/logo.png",
      category: "utility",
      featured: false,
      appStoreUrl: "https://apps.apple.com/ae/app/id6737987479",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.cool.car.sa",
      websiteUrl: "coolcar.com.sa",
    },
    {
      id: "5",
      title: "Taivay",
      description: "A free, open marketplace app for online buying and selling in Mauritania.",
      technologies: ["Flutter", "Laravel", "Firebase"],
      image: "/images/taivay/logo.png",
      category: "marketplace",
      featured: false,
      appStoreUrl: "https://apps.apple.com/us/app/id6739472701",
      websiteUrl: "https://taivay.net/",
    },
    {
      id: "6",
      title: "Heaven Valley",
      description: "Your all‑in‑one beauty companion: salon services, premium cosmetics shopping, and expert consultations.",
      technologies: ["Flutter", "Firebase", "Laravel"],
      image: "/images/daffa/logo.png",
      category: "beauty",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.heaven_vally",
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'marketplace', label: 'Marketplace' },
    { id: 'web', label: 'Web' },
    { id: 'utility', label: 'Utility' },
    { id: 'beauty', label: 'Beauty' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {t('projects.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('projects.description')}
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Featured Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Card 
                  key={project.id} 
                  className="group hover-lift bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                        <div className="flex space-x-3">
                          <Link to={`/project/${project.id}`}>
                            <Button size="sm" className="text-xs">
                              View Details
                            </Button>
                          </Link>
                          {project.playStoreUrl && (
                            <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" variant="outline" className="text-xs">
                                <Smartphone className="w-3 h-3 mr-1" />
                                Store
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category.id)}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* All Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id}
                className="group hover-lift bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted mb-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link to={`/project/${project.id}`} className="flex-1">
                      <Button size="sm" className="w-full text-xs">
                        Details
                      </Button>
                    </Link>
                    {(project.playStoreUrl || project.appStoreUrl) && (
                      <a 
                        href={project.playStoreUrl || project.appStoreUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="outline" className="text-xs">
                          <Smartphone className="w-3 h-3" />
                        </Button>
                      </a>
                    )}
                    {project.websiteUrl && (
                      <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="text-xs">
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;