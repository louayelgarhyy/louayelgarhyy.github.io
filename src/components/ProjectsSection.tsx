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
      description: "+100K Download, A feature-rich multi-vendor marketplace app with a modern UI and advanced social commerce features.",
      technologies: ["Flutter", "Dart", "Firebase", "Laravel", "Socket.IO", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP", "CloudFlare"],
      image: "/images/bazar/logo.png",
      category: "ecommerce",
      featured: true,
      appStoreUrl: "https://apps.apple.com/app/6720723099",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.user.bazar",
      websiteUrl: "https://bazar.coms.sa",
    },
    {
      id: "2",
      title: "(Saudi Government) Salam for Cultural Communication",
      description: "A comprehensive platform for cultural communication and understanding in Saudi Arabia.",
      technologies: ["Laravel", "Next.js", "React.js", "WordPress", "CloudFlare", "HTML", "CSS", "JavaScript", "PHP", "MySQL", "Tailwind CSS", "Figma", "PhpMyAdmin", "Postman"],
      image: "/images/salam/logo/ic_logo_green_dark.svg",
      category: "web",
      featured: true,
      websiteUrl: 'https://salam4cc.org/',
    },
    {
      id: "3",
      title: "Bazar Market - متاجر بازار",
      description: "A comprehensive Bazar market management app with analytics, post scheduling, and multi-platform integration.",
      technologies: ["Flutter", "Dart", "Firebase", "Laravel", "Socket.IO", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP", "CloudFlare"],
      image: "/images/bazar_market/bazarlogo.png",
      category: "ecommerce",
      featured: false,
      appStoreUrl: "https://apps.apple.com/app/6723871374?platform=iphone",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.market.bazar",
      websiteUrl: "https://bazar.coms.sa",
    },
    {
      id: "4",
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
      id: "5",
      title: "Cool Car - كول كار",
      description: "Premium car protection & insulation products at your fingertips",
      technologies: ["Flutter", "Firebase", "Laravel"],
      image: "/images/cool_car/logo.png",
      category: "utility",
      featured: false,
      appStoreUrl: "https://apps.apple.com/ae/app/id6737987479",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.cool.car.sa",
      websiteUrl: "https://coolcar.com.sa",
    },
    {
      id: "6",
      title: "Sarfha - صرّفها",
      description: "Sarfha is your all-in-one platform for auctions, classified ads, and earning rewards. Whether you're selling, promoting, or engaging with an audience — Sarfha makes it easy and rewarding.",
      technologies: ["Flutter", "Laravel", "Firebase", "CloudFlare"],
      image: "/images/taivay/logo.png",
      category: "marketplace",
      featured: false,
      appStoreUrl: "https://apps.apple.com/kw/app/6544787418",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.sarfha&hl=ar",
      websiteUrl: null,
    },
    {
      id: "7",
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
      id: "8",
      title: "Heaven Valley",
      description: "Your all‑in‑one beauty companion: salon services, premium cosmetics shopping, and expert consultations.",
      technologies: ["Flutter", "Firebase", "Laravel"],
      image: "/images/heaven_valley/logo.png",
      category: "beauty",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.heaven_vally",
    },
    {
      id: "9",
      title: "Heaven Valley Admin",
      description: "Your all‑in‑one beauty companion: salon services, premium cosmetics shopping, and expert consultations.",
      technologies: ["Flutter", "Firebase", "Laravel"],
      image: "/images/heaven_valley_admin/logo.png",
      category: "beauty",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.heaven_vally",
    },
    {
      id: "10",
      title: "Dieaya Plus - دعاية بلس",
      description: "Discover local markets and shop a wide selection of products with exclusive discounts—all in one easy‑to‑use app.",
      technologies: ["Flutter", "Firebase", "Laravel"],
      image: "/images/d3aia/logo.png",
      category: "deals",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dieayaplus.user&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: "https://dieaya-plus.com/",
    },
    {
      id: "11",
      title: "Dieaya Plus Business - دعاية بلس اعمال",
      description: "Discover local markets and shop a wide selection of products with exclusive discounts—all in one easy‑to‑use app.",
      technologies: ["Flutter", "Firebase", "Laravel"],
      image: "/images/d3aia_market/logo.png",
      category: "deals",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dieayaplus.market&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: "https://dieaya-plus.com/",
    },
    {
      id: "12",
      title: "Maak - معك",
      description: "Maak is a full-featured healthcare app offering remote medical and psychological consultations, easy appointment booking, and prescription refills for stable conditions — all from the comfort of your home.",
      technologies: ["Flutter", "Firebase", "Laravel"],
      image: "/images/maak/logo.png",
      category: "healthcare",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dieayaplus.user&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: "https://dieaya-plus.com/",
    },
    {
      id: "13",
      title: "GlamGo",
      description: "Maak is a full-featured healthcare app offering remote medical and psychological consultations, easy appointment booking, and prescription refills for stable conditions — all from the comfort of your home.",
      technologies: ["Flutter", "Firebase", "Laravel"],
      image: "/images/glamgo/logo.png",
      category: "beauty",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.glamgo.apps.android&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: null,
    },
    {
      id: "14",
      title: "GlamGo Provider",
      description: "Maak is a full-featured healthcare app offering remote medical and psychological consultations, easy appointment booking, and prescription refills for stable conditions — all from the comfort of your home.",
      technologies: ["Flutter", "Firebase", "Laravel"],
      image: "/images/glamgo_provider/logo.png",
      category: "beauty",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.glamgo.apps.provider&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: null,
    },
    {
      id: "15",
      title: "Tissue Wishen - مناديل واشن",
      description: "Maak is a full-featured healthcare app offering remote medical and psychological consultations, easy appointment booking, and prescription refills for stable conditions — all from the comfort of your home.",
      technologies: ["Flutter", "Firebase", "Laravel"],
      image: "/images/glamgo_provider/logo.png",
      category: "marketplace",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.glamgo.apps.provider&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: null,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'marketplace', label: 'Marketplace' },
    { id: 'web', label: 'Web' },
    { id: 'utility', label: 'Utility' },
    { id: 'beauty', label: 'Beauty' },
    { id: 'deals', label: 'Deals & Coupons' },
    { id: 'healthcare', label: 'Healthcare Support' }

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