import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: "1",
      title: "Bazar - بازار",
      description: "+100K Download A feature-rich multi-vendor marketplace app with a modern UI and advanced social commerce features. Bazar combines traditional e-commerce with interactive content like reels to enhance user engagement.",
      technologies: ["Flutter", "Dart", "Socket.IO", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP", "CloudFlare"],
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
      technologies: ["Flutter", "Dart", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP", "CloudFlare"],
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
      technologies: ["Laravel", "Next.js", "React.js", "WordPress", "CloudFlare", "HTML", "CSS", "JavaScript", "PHP", "MySQL", "Tailwind CSS", "Figma", "PhpMyAdmin", "Postman", ''],
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
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mazij.app&hl=en",
      websiteUrl: null,
      features: ["Itinerary Planning", "Expense Tracking", "Offline Maps", "Weather Integration"]
    },
    {
      id: "6",
      title: "Sarfha - صرّفها",
      description: "Sarfha is your all-in-one platform for auctions, classified ads, and earning rewards. Whether you're selling, promoting, or engaging with an audience — Sarfha makes it easy and rewarding.",
      technologies: ["Flutter", "Dart", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP", "CloudFlare"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mazij.app&hl=en",
      websiteUrl: null,
      features: [
        "Auctions",
        "Classified Ads",
        "Earning Rewards",
        "Vendor Authentication",
        "Product Browsing & Search",
        "Shopping Cart & Order Placement",
        "Multi-Vendor Marketplace",
        "Filtering System",
        "Real-time Push Notifications",
        "Ratings & Reviews System",
        "Follow Vendors & Users",
        "Like Products & Reels",
        "Interactive Social Feed",
        "Order History",
        "Secure RESTful API Integration",
        "Cloudflare Optimization"
      ]
    },

    {
      id: "7",
      title: "Dieaya Plus - دعاية بلس",
      date: "Aug 13, 2024",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dieayaplus.user&hl=en",
      description: "Discover local markets and shop a wide selection of products with exclusive discounts—all in one easy‑to‑use app.",
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: "https://dieaya-plus.com/",
      features: [
        "Browse local stores and markets nearby",
        "Access exclusive discounts and seasonal offers",
        "Explore a wide variety of product categories (home, beauty, fashion, food, children, and more)",
        "Enjoy a simple, intuitive user interface and fast search",
        "Save favorite items or stores to your wishlist",
        "Shop anytime—24/7 access",
        "Benefit from competitive prices and daily bargains",
        "Support local businesses in your community",
        "Data privacy: location/contact data collected but not linked to identity, no third‑party sharing"
      ]
    },
    {
      id: "8",
      title: "دعاية بلس أعمال",
      date: "Aug 13, 2024",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dieayaplus.market&hl=en",
      description: "Discover local markets and shop a wide selection of products with exclusive discounts—all in one easy‑to‑use app.",
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: "https://dieaya-plus.com/",
      features: [
        "Browse local stores and markets nearby",
        "Access exclusive discounts and seasonal offers",
        "Explore a wide variety of product categories (home, beauty, fashion, food, children, and more)",
        "Enjoy a simple, intuitive user interface and fast search",
        "Save favorite items or stores to your wishlist",
        "Shop anytime—24/7 access",
        "Benefit from competitive prices and daily bargains",
        "Support local businesses in your community",
        "Data privacy: location/contact data collected but not linked to identity, no third‑party sharing"
      ]
    },
    {
      id: "10",
      title: "Taivay",
      date: "Oct 18, 2024",
      appStoreUrl: "https://apps.apple.com/us/app/id6739472701",
      description: "Taivay (تيفاي) is a free, open marketplace app designed for online buying and selling in Mauritania, offering an easy, convenient, and secure e‑commerce experience.",
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      websiteUrl: "https://taivay.net/",
      features: ["Post your first ad for free (up to 3 days)",
        "Negotiations for quick sales",
        "Subscription plans for more daily ads and comment removal",
        "Extensive categories including Mauritanian handicrafts and home products",
        "Flexible payment options (including bank transfer)",
        "Built‑in buyer/seller rating system for a safe experience",
        "User‑friendly interface designed for ease of use"]
    },
    
    {
      id: "11",
      title: "معك",
      date: "Oct 19, 2024",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.maak.sa",
      description: "Maak is a full-featured healthcare app offering remote medical and psychological consultations, easy appointment booking, and prescription refills for stable conditions — all from the comfort of your home.",
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: null,
      features: [
        "Remote consultations with licensed family doctors and specialists via audio/video",
        "Mental health support from certified psychiatrists and psychologists",
        "Prescription refills for stable medical conditions under medical supervision",
        "Instant or scheduled appointment booking",
        "Updated and user-friendly interface (Feb 2025)",
        "Strict privacy policy — no user data collection",
        "Encrypted data transmission for secure communication",
        "Completely free to use and download"]
    },
    {
      id: "12",
      title: "Cool Car - كول كار",
      date: "Nov 8, 2024",
      description: "Premium car protection & insulation products at your fingertips",
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      features: [
        "Browse a wide range of high‑quality car protection products",
        "Insulation solutions to enhance appearance and performance",
        "Easily discover protective options for daily wear and tear",
        "Product details and images for informed choices",
        "Maintain vehicle value with durable protective gear",
        "Simple and intuitive shopping interface",
        "Supports multiple car brands and models"
      ], appStoreUrl: "https://apps.apple.com/ae/app/id6737987479?platform=iphone",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.cool.car.sa",
      websiteUrl: "coolcar.com.sa",
      figmaUrl: "https://www.figma.com/design/9w8a1dBELXpirfDLeIsJ2N/Buy-your-dream-car-(Community)?node-id=0-1&p=f&t=gD2G5wGzEZGldjmK-0"
    },
    {
      id: "13",
      title: "دليل وجهتك",
      date: "Nov 19, 2024",
      appStoreUrl: "https://apps.apple.com/kw/app/id6738397663?platform=iphone",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.dalilwejhtak",
      description: "Up to date on the latest events,popular places, holidays and book unique experience with ease in the Kingdom of Saudi Arabia",
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      websiteUrl: null,
      features: [
        "Explore popular destinations and cultural landmarks across Saudi Arabia",
        "Stay updated with current and upcoming events through an interactive calendar",
        "Discover highlights during national holidays and special occasions",
        "Get personalized recommendations based on your interests and location",
        "Book unique local experiences directly from the app",
        "Search places and events by category, location, or activity type",
        "Enjoy multilingual support including Arabic and English",
        "Receive real-time updates to stay informed about the latest offerings"
      ]
    },
    {
      id: "14",
      title: "Damin",
      date: "Jan 20, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.damin.sa&hl=en",
      description: "An innovative escrow‑style app that safeguards buying and selling transactions by holding payments in trust until deals complete successfully.",
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: null,
      features: [
        "Escrow‑style payment withholding until deal completion",
        "In‑app messaging between buyer and seller",
        "Order management and status overview",
        "Real‑time transaction tracking and updates",
        "Secure and trusted environment for trading",
        "Regular updates and performance enhancements",
        "Transparent data policy with no third‑party sharing"
      ]
    },
    {
      id: "15",
      title: "Tissue wishen - مناديل واشن",
      date: "Feb 1, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.tissue&hl=en",
      description: "Tissue Wishen is your go‑to app for buying high‑quality tissue products with ease and convenience. Whether you need facial tissues, paper tissues, or paper towels, you can browse a wide selection, place your order, and have it delivered directly to your door.", technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: null,
      features: [
        "Easy ordering with a clean, simple user interface",
        "Wide variety of tissue products (facial, paper, towels)",
        "Fast and reliable delivery service",
        "Real‑time order tracking"
      ]

    },
    {
      id: "16",
      title: "Heaven Valley",
      date: "Feb 11, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.heaven_vally&hl=en",
      description: "Your all‑in‑one beauty companion: salon services, premium cosmetics shopping, and expert medical consultations — all in one app.",
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: null,
      features: [
        "Extensive salon services: haircuts, beauty, skin treatments & spa sessions with easy online booking.",
        "Curated selection of premium cosmetic products for skincare and beauty enhancement.",
        "Direct access to specialized medical and aesthetic consultations.",
        "Modern, user‑friendly interface designed for fast browsing and seamless experience.",
        "Secure data handling: no data collected or shared with third parties; encrypted in transit.",
        "Free to download and use.",
        "Compatible with Android 5.0+ (and iOS 14.0+ on Apple devices)."
      ]
    },
    {
      id: "17",
      title: "Heaven Valley Admin",
      date: "Feb 13, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.heaven_admin&hl=en",
      description: "A smart, secure Heaven Admin admin app designed to streamline your workday: organize tasks, schedule appointments, and stay connected with clients efficiently.",
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: null,
      features: ["Task management for organizing daily to-dos",
        "Appointment scheduling with clients",
        "In-app client communication",
        "Real-time notifications for updates and changes",
        "Secure, modern, and intuitive user interface",
        "No data collection or third-party sharing",
        "Encrypted data transfer for privacy protection"]
    },
    {
      id: "18",
      title: "Noot",
      date: "Mar 4, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.noot&hl=en",
      description: "Discover the best real estate rental options across Saudi Arabia with Noot — your ultimate solution for renting apartments, villas, offices, and commercial spaces. Whether you're seeking housing or commercial property, the app offers precise filters for location, price, and amenities to help you find the perfect match. It delivers a transparent, secure user experience with direct communication between renters and property owners, detailed listings, and clear images. Enjoy innovative rental solutions combining comfort, technology, and trust.",
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: null,
      features: ["Search for apartments, villas, offices, and commercial spaces across Saudi Arabia",
        "Filter results by location, price range, and property features",
        "View detailed listings with high‑quality photos and full property information",
        "Contact property owners directly through the app",
        "Experience a safe and transparent rental process"]
    },
    {
      id: "19",
      title: "Noot Owner",
      date: "Mar 4, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.noot_owner&hl=en",
      description: "Noot Owner is your trusted partner in the property rental journey, offering a seamless, transparent, and secure experience. Discover a comprehensive marketplace tailored to tenants and business users across Saudi Arabia—search apartments, villas, offices, and commercial spaces with precision using powerful filters like price range, location, and amenities. Our app empowers you with clear property details and high‑quality images, helping you make informed decisions quickly and confidently. Directly communicate with landlords and complete rental transactions through our built‑in messaging system, all while ensuring safe, encrypted data exchange. Whether you're searching for a long‑term residence or a commercial lease, Noot Owner combines innovation with simplicity to streamline your rental experience from start to finish.",
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: null,
      features: ["Extensive Property Listings: Explore apartments, villas, offices, retail stores, and more across Saudi Arabia with detailed descriptions.",
        "Advanced Search Filters: Narrow down options by city, price, property type, and amenities.",
        "High‑Quality Listings: View clear photos and comprehensive property information to make informed choices.",
        "Secure In‑App Messaging: Contact property owners directly within the app in a trusted and private environment.",
        "Transparent Rental Process: Navigate listings and transactions with clarity and confidence built into the experience.",
        "Cross‑Platform Availability: Designed for Android 5.0+ devices, ensuring wide compatibility.",
        "Regular Updates & Support: Latest versions bring improvements and bug fixes (e.g. version 1.0.9 released March 11, 2025)."
      ]
    },
    {
      id: "20",
      title: "ROZ - روز",
      date: "Mar 13, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.roz.sa",
      description: "ROZ makes Halal installments purchasing and selling products easy and accessible for everyone. Shop anytime, anywhere and earn with every purchase.",
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: null,
      features: ["Effortless product browsing and shopping",
        "Earn rewards with every purchase",
        "Intuitive, mobile‑friendly interface",
        "Developer‑provided data privacy with personal info collected and no third‑party sharing"]
    },
    {
      id: "21",
      title: "Breeze - بريز",
      date: "Apr 12, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.breeze.sa&hl=en",
      description: "Mazij is an application that includes the largest stores, whether they are regular shops, wholesale outlets, or factories. It simplifies the shopping process by offering a solution to the challenges of quickly and easily finding nearby stores with their ratings and prices.",
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: null,
      features: ["Itinerary Planning", "Expense Tracking", "Offline Maps", "Weather Integration"]
    },
    {
      id: "22",
      title: "Breeze Admin",
      date: "Apr 12, 2025",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.breeze_delivery&hl=en",
      description: "Mazij is an application that includes the largest stores, whether they are regular shops, wholesale outlets, or factories. It simplifies the shopping process by offering a solution to the challenges of quickly and easily finding nearby stores with their ratings and prices.",
      technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
      image: "/images/daffa/logo.png",
      appStoreUrl: "https://apps.apple.com/us/app/mazij/id6502800190?l=ar&platform=iphone",
      websiteUrl: null,
      features: ["Itinerary Planning", "Expense Tracking", "Offline Maps", "Weather Integration"]
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
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={true}
          className="my-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.title} className="h-full">
              <Link to={`/project/${project.id}`} className="h-full block">
                <Card
                  className="h-full flex flex-col justify-between bg-card-gradient border-border/50 shadow-elegant hover:shadow-glow-accent transition-all duration-300 group animate-fade-in overflow-hidden cursor-pointer"
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

                  <CardContent className="p-6 flex flex-col flex-grow">
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

                    <div className="mt-auto flex gap-3" onClick={(e) => e.stopPropagation()}>
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
                          <i className="ri-google-play-fill"></i>
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
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div> */}
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