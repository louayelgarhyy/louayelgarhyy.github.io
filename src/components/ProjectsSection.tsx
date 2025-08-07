import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import useEmblaCarousel from 'embla-carousel-react';
import { projects, getProjectsByCategory, getFeaturedProjects } from '@/data/projects';

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    direction: i18n.language === 'ar' ? 'rtl' : 'ltr'
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    const revealElements = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', revealElements);
    revealElements(); // Check on initial load
    
    return () => window.removeEventListener('scroll', revealElements);
  }, []);



  const categories = [
    { id: 'all', label: t('projects.categories.all') },
    { id: 'ecommerce', label: t('projects.categories.ecommerce') },
    { id: 'marketplace', label: t('projects.categories.marketplace') },
    { id: 'web', label: t('projects.categories.web') },
    { id: 'utility', label: t('projects.categories.utility') },
    { id: 'beauty', label: t('projects.categories.beauty') },
    { id: 'deals', label: t('projects.categories.deals') },
    { id: 'healthcare', label: t('projects.categories.healthcare') },
    { id: 'travel', label: t('projects.categories.travel') },
    { id: 'real_estate', label: t('projects.categories.real_estate') }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  // Group projects into chunks of 6
  const chunkedProjects = [];
  for (let i = 0; i < filteredProjects.length; i += 6) {
    chunkedProjects.push(filteredProjects.slice(i, i + 6));
  }

  return (
    <section id="projects" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              {t('projects.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              {t('projects.description')}
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16 scroll-reveal">
            <h3 className="text-2xl font-semibold text-foreground mb-8 animate-slide-in-left">
              {t('projects.featured')}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`group hover-lift bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={project.image}
                          alt={project.titleKey}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                                                   <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                           {t(project.titleKey)}
                         </h4>
                          {/* <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            {project.date}
                          </div> */}
                        </div>
                                                 <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                           {t(project.descriptionKey)}
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
                            <Button size="sm" className="text-xs" variant="gradient">
                              {t('projects.viewDetails')}
                            </Button>
                          </Link>
                          {(project.playStoreUrl || project.appStoreUrl) && (
                            <a href={project.playStoreUrl || project.appStoreUrl} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" variant="outline" className="text-xs">
                                <Smartphone className="w-3 h-3 mr-1" />
                                {t('projects.store')}
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
          <div className="flex flex-wrap gap-2 justify-center mb-12 scroll-reveal">
            {categories.map((category, index) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "gradient" : "outline"}
                size="sm"
                onClick={() => setFilter(category.id)}
                className={`transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Carousel */}
          {chunkedProjects.length > 0 && (
            <div className="scroll-reveal">
              <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    {chunkedProjects.map((chunk, chunkIndex) => (
                      <div key={chunkIndex} className="flex-none w-full">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                          {chunk.map((project, index) => (
                            <Card
                              key={project.id}
                              className={`group hover-lift bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300 animate-bounce-in`}
                              style={{ animationDelay: `${index * 0.1}s` }}
                            >
                              <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
                                    <img
                                      src={project.image}
                                      alt={project.title}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  {/* <div className="flex items-center text-xs text-muted-foreground">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {project.date}
                                  </div> */}
                                </div>

                                                                 <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                   {t(project.titleKey)}
                                 </h4>

                                                                 <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                   {t(project.descriptionKey)}
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
                                    <Button size="sm" className="w-full text-xs" variant="gradient">
                                      {t('projects.details')}
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
                    ))}
                  </div>
                </div>

                {/* Navigation arrows */}
                {chunkedProjects.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
                      onClick={scrollPrev}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
                      onClick={scrollNext}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}
              </div>

              {/* Pagination dots */}
              {chunkedProjects.length > 1 && (
                <div className="flex justify-center space-x-2 mt-8">
                  {chunkedProjects.map((_, index) => (
                    <button
                      key={index}
                      className="w-2 h-2 rounded-full bg-muted hover:bg-primary transition-colors"
                      onClick={() => emblaApi?.scrollTo(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;