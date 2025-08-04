import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import useEmblaCarousel from 'embla-carousel-react';

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

  const projects = [
    {
      id: "1",
      title: "Bazar - بازار",
      description: "+100K Download, A feature-rich multi-vendor marketplace app with a modern UI and advanced social commerce features.",
      technologies: ["Flutter", "Dart", "Firebase", "Laravel", "Socket.IO", "Clean Architecture", "Provider", "REST API", "Push Notifications", "HTML", "CSS", "JavaScript", "PHP", "CloudFlare"],
      image: "/images/bazar/logo.png",
      category: "ecommerce",
      featured: true,
      appStoreUrl: "https://apps.apple.com/app/6720723099",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.user.bazar",
      websiteUrl: "https://bazar.coms.sa",
      date: "2024-12",
      features: ["Multi-vendor marketplace", "Social commerce", "Real-time chat", "Payment gateway integration", "Push notifications", "Admin dashboard"],
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
      date: "2024-11",
      features: ["Government platform", "Cultural communication", "Multi-language support", "Content management", "User engagement", "Responsive design"],
    },
    {
      id: "3",
      title: "Bazar Market - متاجر بازار",
      description: "A comprehensive Bazar market management app with analytics, post scheduling, and multi-platform integration.",
      technologies: ["Flutter", "Dart", "Firebase", "Laravel", "Socket.IO", "Clean Architecture", "Provider", "REST API", "Push Notifications", "HTML", "CSS", "JavaScript", "PHP", "CloudFlare"],
      image: "/images/bazar_market/bazarlogo.png",
      category: "ecommerce",
      featured: false,
      appStoreUrl: "https://apps.apple.com/app/6723871374?platform=iphone",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.market.bazar",
      websiteUrl: "https://bazar.coms.sa",
      date: "2024-12",
      features: ["Market management", "Analytics dashboard", "Post scheduling", "Multi-platform integration", "Vendor tools", "Sales tracking"],
    },
    {
      id: "4",
      title: "DAFFA for Abayat",
      description: "An elegant e-commerce application for traditional clothing with modern features.",
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Payment Gateway"],
      image: "/images/daffa/logo.png",
      category: "ecommerce",
      featured: false,
      appStoreUrl: "https://apps.apple.com/us/app/daffa/id1502627950",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.daffa.app",
      date: "2024-10",
      features: ["Traditional clothing store", "Modern UI/UX", "Location services", "Secure payments", "Wishlist", "Order tracking"],
    },
    {
      id: "5",
      title: "Cool Car - كول كار",
      description: "Premium car protection & insulation products at your fingertips",
      technologies: ["Flutter", "Firebase", "Laravel", "Payment Integration"],
      image: "/images/cool_car/logo.png",
      category: "utility",
      featured: false,
      appStoreUrl: "https://apps.apple.com/ae/app/id6737987479",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.cool.car.sa",
      websiteUrl: "https://coolcar.com.sa",
      date: "2024-11",
      features: ["Car protection products", "Service booking", "Location tracking", "Payment integration", "Customer support", "Product catalog"],
    },
    {
      id: "6",
      title: "Sarfha - صرّفها",
      description: "Sarfha is your all-in-one platform for auctions, classified ads, and earning rewards. Whether you're selling, promoting, or engaging with an audience — Sarfha makes it easy and rewarding.",
      technologies: ["Flutter", "Laravel", "Firebase", "CloudFlare", "Real-time Bidding"],
      image: "/images/taivay/logo.png",
      category: "marketplace",
      featured: false,
      appStoreUrl: "https://apps.apple.com/kw/app/6544787418",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.sarfha&hl=ar",
      websiteUrl: null,
      date: "2024-09",
      features: ["Auction platform", "Classified ads", "Reward system", "Real-time bidding", "User engagement", "Social features"],
    },
    {
      id: "7",
      title: "Taivay",
      description: "A free, open marketplace app for online buying and selling in Mauritania.",
      technologies: ["Flutter", "Laravel", "Firebase", "GPS Integration"],
      image: "/images/taivay/logo.png",
      category: "marketplace",
      featured: false,
      appStoreUrl: "https://apps.apple.com/us/app/id6739472701",
      websiteUrl: "https://taivay.net/",
      date: "2024-10",
      features: ["Free marketplace", "Buy and sell", "Location-based search", "User profiles", "Chat system", "Local commerce"],
    },
    {
      id: "8",
      title: "Heaven Valley",
      description: "Your all‑in‑one beauty companion: salon services, premium cosmetics shopping, and expert consultations.",
      technologies: ["Flutter", "Firebase", "Laravel", "Booking System"],
      image: "/images/heaven_valley/logo.png",
      category: "beauty",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.heaven_vally",
      date: "2024-08",
      features: ["Beauty services", "Salon booking", "Product shopping", "Expert consultations", "Appointment management", "Payment processing"],
    },
    {
      id: "9",
      title: "Heaven Valley Admin",
      description: "Administrative panel for Heaven Valley beauty services management and analytics.",
      technologies: ["Flutter", "Firebase", "Laravel", "Admin Dashboard"],
      image: "/images/heaven_valley_admin/logo.png",
      category: "beauty",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.heaven_vally_admin",
      date: "2024-08",
      features: ["Admin dashboard", "Service management", "Booking analytics", "Staff management", "Revenue tracking", "Customer insights"],
    },
    {
      id: "10",
      title: "Dieaya Plus - دعاية بلس",
      description: "Discover local markets and shop a wide selection of products with exclusive discounts—all in one easy‑to‑use app.",
      technologies: ["Flutter", "Firebase", "Laravel", "Location Services"],
      image: "/images/d3aia/logo.png",
      category: "deals",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dieayaplus.user&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/dieaya-plus/id6502800190",
      websiteUrl: "https://dieaya-plus.com/",
      date: "2024-07",
      features: ["Local market discovery", "Exclusive discounts", "Product catalog", "Location-based offers", "User reviews", "Wishlist"],
    },
    {
      id: "11",
      title: "Dieaya Plus Business - دعاية بلس اعمال",
      description: "Business management platform for Dieaya Plus merchants to manage offers, analytics, and customer engagement.",
      technologies: ["Flutter", "Firebase", "Laravel", "Analytics"],
      image: "/images/d3aia_market/logo.png",
      category: "deals",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dieayaplus.market&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/dieaya-plus-business/id6502800191",
      websiteUrl: "https://dieaya-plus.com/",
      date: "2024-07",
      features: ["Business dashboard", "Offer management", "Customer analytics", "Sales tracking", "Inventory management", "Promotion tools"],
    },
    {
      id: "12",
      title: "Maak - معك",
      description: "Maak is a full-featured healthcare app offering remote medical and psychological consultations, easy appointment booking, and prescription refills for stable conditions — all from the comfort of your home.",
      technologies: ["Flutter", "Firebase", "Laravel", "Video Calling", "AI"],
      image: "/images/maak/logo.png",
      category: "healthcare",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.maak.health&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/maak/id6502800192",
      websiteUrl: "https://maak-health.com/",
      date: "2024-06",
      features: ["Telemedicine", "Appointment booking", "Prescription management", "Video consultations", "Health records", "AI health assistant"],
    },
    {
      id: "13",
      title: "GlamGo",
      description: "On-demand beauty services app connecting customers with professional beauty specialists for home and salon services.",
      technologies: ["Flutter", "Firebase", "Laravel", "Real-time Tracking"],
      image: "/images/glamgo/logo.png",
      category: "beauty",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.glamgo.apps.android&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/glamgo/id6502800193",
      websiteUrl: "https://glamgo.app/",
      date: "2024-05",
      features: ["On-demand beauty services", "Home services", "Professional network", "Real-time tracking", "Service booking", "Reviews and ratings"],
    },
    {
      id: "14",
      title: "GlamGo Provider",
      description: "Professional app for beauty service providers to manage bookings, track earnings, and grow their beauty business.",
      technologies: ["Flutter", "Firebase", "Laravel", "Calendar Integration"],
      image: "/images/glamgo_provider/logo.png",
      category: "beauty",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.glamgo.apps.provider&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/glamgo-provider/id6502800194",
      websiteUrl: "https://glamgo.app/provider",
      date: "2024-05",
      features: ["Provider dashboard", "Booking management", "Earnings tracking", "Schedule management", "Client communication", "Portfolio showcase"],
    },
    {
      id: "15",
      title: "Tissue Wishen - مناديل واشن",
      description: "Premium tissue and paper products marketplace with subscription services and bulk ordering for businesses and households.",
      technologies: ["Flutter", "Firebase", "Laravel", "Subscription System"],
      image: "/images/rose/logo.png",
      category: "marketplace",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.tissuewishen.app&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/tissue-wishen/id6502800195",
      websiteUrl: "https://tissuewishen.com/",
      date: "2024-04",
      features: ["Premium tissue products", "Subscription service", "Bulk ordering", "Business solutions", "Delivery tracking", "Eco-friendly options"],
    },
    {
      id: "16",
      title: "Rose Beauty - روز بيوتي",
      description: "Luxury beauty products and skincare marketplace with expert recommendations and personalized beauty routines.",
      technologies: ["Flutter", "Firebase", "Laravel", "AI Recommendations"],
      image: "/images/rose/logo.png",
      category: "beauty",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.rose.beauty&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/rose-beauty/id6502800196",
      websiteUrl: "https://rosebeauty.sa/",
      date: "2024-03",
      features: ["Luxury beauty products", "AI recommendations", "Skincare analysis", "Expert consultations", "Beauty routines", "Premium brands"],
    },
    {
      id: "17",
      title: "Dalil Wijhitak - دليل وجهتك",
      description: "Your ultimate travel guide and destination discovery app for the Middle East with local insights and cultural experiences.",
      technologies: ["Flutter", "Firebase", "Laravel", "Maps Integration", "AR"],
      image: "/images/dalilwijhitak/logo.png",
      category: "travel",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dalilwijhitak.app&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/dalil-wijhitak/id6502800197",
      websiteUrl: "https://dalilwijhitak.com/",
      date: "2024-02",
      features: ["Travel guide", "Destination discovery", "Local insights", "Cultural experiences", "AR navigation", "Trip planning"],
    },
    {
      id: "18",
      title: "Akareya Platform - منصة العقارية",
      description: "Comprehensive real estate platform for buying, selling, and renting properties with virtual tours and smart matching.",
      technologies: ["Flutter", "Firebase", "Laravel", "VR/AR", "Machine Learning"],
      image: "/images/akareya/logo.png",
      category: "real_estate",
      featured: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.akareya.app&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/akareya/id6502800198",
      websiteUrl: "https://akareya.sa/",
      date: "2024-01",
      features: ["Property marketplace", "Virtual tours", "Smart matching", "Investment analysis", "Mortgage calculator", "Legal support"],
    },
  ];

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
                          alt={project.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h4>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            {project.date}
                          </div>
                        </div>
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
                                  <div className="flex items-center text-xs text-muted-foreground">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {project.date}
                                  </div>
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