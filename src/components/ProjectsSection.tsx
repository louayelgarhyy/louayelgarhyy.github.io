import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: "1",
      title: "Bazar - بازار",
      description: "A feature-rich multi-vendor marketplace app with a modern UI and advanced social commerce features. Bazar combines traditional e-commerce with interactive content like reels to enhance user engagement.",
      technologies: ["Flutter", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP", "CloudFlare"],
      image: "/images/bazar/logo_banner.png",
      appStoreUrl: "https://apps.apple.com/app/6720723099",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.market.bazar",
      websiteUrl: "https://bazar.coms.sa",
      features: [
        "User & Vendor Authentication",
        "Multi-Vendor Marketplace",
        "Product Browsing & Search",
        "Filtering System",
        "Shopping Cart & Order Placement",
        "Real-time Push Notifications",
        "Ratings & Reviews System",
        "Follow Vendors & Users",
        "Like Products & Reels",
        "Reels with Videos & Photos",
        "Interactive Social Feed",
        "Vendor Profiles",
        "Order History",
        "Secure RESTful API Integration",
        "Cloudflare Optimization"
      ]
    },
    {
      id: "2",
      title: "Bazar Market - متاجر بازار",
      description: "A comprehensive Bazar market management app with analytics, post scheduling, and multi-platform integration.",
      technologies: ["Flutter", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP", "CloudFlare"],
      image: "/images/bazar/logo_banner.png",
      appStoreUrl: "https://apps.apple.com/app/6723871374?platform=iphone",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.market.bazar",
      websiteUrl: "https://bazar.coms.sa",
      features: [
        "Vendor Authentication",
        "Filtering System",
        "Real-time Push Notifications",
        "Ratings & Reviews System",
        "Follow Vendors & Users",
        "Like Products & Reels",
        "Reels with Videos & Photos",
        "Interactive Social Feed",
        "Vendor Profiles",
        "Order History",
        "Secure RESTful API Integration",
        "Cloudflare Optimization"
      ]
    },
    {
      id: "3",
      title: "(Saudi Government) Salam for Cultural Communication - سلام للتواصل الحضاري",
      description: "A comprehensive fitness app with workout tracking, nutrition logging, progress analytics, and social features.",
      technologies: ["Flutter", "SQLite", "Charts", "Camera", "Health APIs"],
      image: "/images/salam/logo/logo_salam.png",
      appStoreUrl: null,
      playStoreUrl: null,
      websiteUrl: 'https://salam4cc.org/',
      features: ["Workout Tracking", "Nutrition Logging", "Progress Charts", "Social Features"]
    },
    {
      id: "4",
      title: "DAFFA for Abayat",
      description: "An intuitive travel planning application with itinerary management, expense tracking, and offline maps integration.",
      technologies: ["Flutter", "Google Maps", "Local Storage", "API Integration"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://play.google.com/store/apps/details?id=com.daffa.app",
      playStoreUrl: "https://apps.apple.com/us/app/daffa/id1502627950?platform=iphone",
      websiteUrl: null,
      features: ["Itinerary Planning", "Expense Tracking", "Offline Maps", "Weather Integration"]
    },
    {
      id: "5",
      title: "Mazij - مزيج",
      description: "Mazij is an application that includes the largest stores, whether they are regular shops, wholesale outlets, or factories. It simplifies the shopping process by offering a solution to the challenges of quickly and easily finding nearby stores with their ratings and prices.",
      technologies: ["Flutter", "Google Maps","API Integration","Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mazij.app&hl=en",
      websiteUrl: null,
      features: ["Itinerary Planning", "Expense Tracking", "Offline Maps", "Weather Integration"]
    },
    {
      id: "6",
      title: "Sarfha - صرّفها",
      description: "Mazij is an application that includes the largest stores, whether they are regular shops, wholesale outlets, or factories. It simplifies the shopping process by offering a solution to the challenges of quickly and easily finding nearby stores with their ratings and prices.",
      technologies: ["Flutter", "Google Maps","API Integration","Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mazij.app&hl=en",
      websiteUrl: null,
      features: ["Itinerary Planning", "Expense Tracking", "Offline Maps", "Weather Integration"]
    },
    {
      id: "7",
      title: "دعاية بلس أعمال",
      date: "Aug 13, 2024",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dieayaplus.market&hl=en"
    },
    {
      id: "8",
      title: "Bazar - بازار",
      date: "Oct 1, 2024",
      downloads: "+100K downloads",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.user.bazar"
    },
    {
      id: "9",
      title: "متاجر بازار",
      date: "Oct 1, 2024",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.market.bazar"
    },
    {
      id: "10",
      title: "Taivay",
      date: "Oct 18, 2024",
      appStoreUrl: "https://apps.apple.com/us/app/%D8%AA%D9%8A%D9%81%D8%A7%D9%8A/id6739472701"
    },
    {
      id: "11",
      title: "معك",
      date: "Oct 19, 2024",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.maak.sa"
    },
    {
      id: "12",
      title: "Cool Car - كول كار",
      date: "Nov 8, 2024",
      appStoreUrl: "https://apps.apple.com/ae/app/cool-car-%D9%83%D9%88%D9%84-%D9%83%D8%A7%D8%B1/id6737987479?platform=iphone",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.cool.car.sa",
      websiteUrl: "coolcar.com.sa",
      figmaUrl: "https://www.figma.com/design/9w8a1dBELXpirfDLeIsJ2N/Buy-your-dream-car-(Community)?node-id=0-1&p=f&t=gD2G5wGzEZGldjmK-0"
    },
    {
      id: "13",
      title: "دليل وجهتك",
      date: "Nov 19, 2024",
      appStoreUrl: "https://apps.apple.com/kw/app/%D8%AF%D9%84%D9%8A%D9%84-%D9%88%D8%AC%D9%87%D8%AA%D9%83/id6738397663?platform=iphone",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.dalilwejhtak"
    },
    {
      id: "14",
      title: "Damin",
      date: "Jan 20, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.damin.sa&hl=en"
    },
    {
      id: "15",
      title: "Tissue wishen - مناديل واشن",
      date: "Feb 1, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.tissue&hl=en"
    },
    {
      id: "16",
      title: "Heaven Valley",
      date: "Feb 11, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.heaven_vally&hl=en"
    },
    {
      id: "17",
      title: "Heaven Valley Admin",
      date: "Feb 13, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.heaven_admin&hl=en"
    },
    {
      id: "18",
      title: "Noot",
      date: "Mar 4, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.noot&hl=en"
    },
    {
      id: "19",
      title: "Noot Owner",
      date: "Mar 4, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.noot_owner&hl=en"
    },
    {
      id: "20",
      title: "ROZ - روز",
      date: "Mar 13, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.roz.sa"
    },
    {
      id: "21",
      title: "Breeze - بريز",
      date: "Apr 12, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.breeze.sa&hl=en"
    },
    {
      id: "22",
      title: "Breeze Admin",
      date: "Apr 12, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.breeze_delivery&hl=en"
    }

  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link key={project.title} to={`/project/${project.id}`}>
              <Card
                className="bg-card-gradient border-border/50 shadow-elegant hover:shadow-glow-accent transition-all duration-300 group animate-fade-in overflow-hidden cursor-pointer"
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

                  <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                    {project.appStoreUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 flex-1"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.appStoreUrl, '_blank');
                      }}
                    >
                      <i className="ri-apple-fill"></i>
                      {t('projects.appStore')}
                    </Button>
                    )}
                    {project.playStoreUrl && (
                      <Button
                        size="sm"
                        className="gap-2 flex-1"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.playStoreUrl, '_blank');
                        }}
                      >
                        <i className="ri-google-play-fill "></i>
                        {t('projects.googlePlay')}
                      </Button>
                    )}

                    {project.websiteUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 flex-1"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.websiteUrl, '_blank');
                        }}
                      >
                        <i className="ri-global-fill"></i>
                        {t('projects.website')}
                      </Button>
                    )}

                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        {/* 
        <div className="text-center mt-12">
          <Button variant="outline" className="gap-2">
            <Smartphone className="w-4 h-4" />
            View All Apps on Store
          </Button>
        </div> */}
      </div>
    </section >
  );
};

export default ProjectsSection;