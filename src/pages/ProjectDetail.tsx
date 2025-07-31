import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Smartphone, Play, Star, Download, Users } from "lucide-react";
import { useTranslation } from 'react-i18next';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { t } = useTranslation();

  // Project data - in a real app, this would come from an API or context
  const projects = {
    "1": {
      title: "Bazar - بازار",
      description: "A feature-rich multi-vendor marketplace app with a modern UI and advanced social commerce features. Bazar combines traditional e-commerce with interactive content like reels to enhance user engagement.",
      longDescription: `Bazar is a full-featured multi-vendor marketplace mobile application built with Flutter, Laravel and React.js. It reimagines online shopping by combining the functionality of a traditional e-commerce platform with modern social engagement features — offering users a seamless, interactive, and engaging experience.

      The app allows users to browse products from multiple vendors, place orders, and interact with content-rich reels showcasing products through both photos and videos. Users can follow their favorite vendors, like products and reels, and leave ratings and reviews to help others make informed decisions.\n\
          
      Vendors can create profiles, list products with media-rich content, and engage directly with potential buyers through social-like features, making the selling experience more dynamic and personalized. Reels serve as a powerful marketing tool inside the app, where sellers can creatively promote their items.
          
      Push notifications are integrated using Firebase, ensuring users stay updated with order statuses, new product listings, promotional reels, and social activity. The backend is powered by a secure Laravel API, optimized behind Cloudflare for enhanced performance and protection.

      The UI is fast, responsive, and built for both Android and iOS using Flutter, offering a consistent experience across platforms.`,

      technologies: ["Flutter", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP", "CloudFlare"],
      image: "/images/bazar/logo_banner.png",
      appStoreUrl: "https://apps.apple.com/app/6720723099",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.market.bazar",
      websiteUrl: "https://bazar.coms.sa",
      features: [
        "✅ Cross-Platform Development: Built using Flutter, ensuring a smooth and consistent experience across both Android and iOS.",
        "⚙️ Laravel REST API Backend: A secure, scalable backend powering user management, product handling, and real-time data operations.",
        "🔔 Push Notifications (Firebase): Real-time alerts for orders, promotions, follows, likes, and app activity using Firebase Cloud Messaging.",
        "🌐 Cloudflare Integration: Accelerated content delivery and DDoS protection for backend APIs and static assets.",
        "🛒 Multi-Vendor Marketplace: Supports multiple sellers with individual storefronts and profile pages.",
        "📦 Product Management: Add, edit, delete products with support for media (images, videos), price, and detailed descriptions.",
        "📊 Order Management: Full lifecycle management from cart to checkout to order tracking.",
        "🛠️ Vendor Panel Features: Vendors can manage their own products, view orders, track stats, and publish reels.",
        "🎥 Reels with Video & Images: Each vendor can publish reels with photos and/or videos to showcase products in an engaging way.",
        "❤️ Like System: Users can like products and reels to express interest and save them for later.",
        "⭐ Ratings & Reviews: Buyers can rate and review products after purchase to build community trust.",
        "🔍 Smart Search & Filters: Advanced search across vendors and products with multiple filtering options.",
        "👤 User Profiles & Vendor Follow: Users can follow vendors and receive updates about their new products or content.",
        "📂 Social Feed Style Browsing: Scrollable feed of reels and promoted products for better discovery.",
        "💬 Multi-language Support: Prepared for internationalization and localization (i18n) using Flutter's localization system.",
        "🌙 Dark Mode Ready: Fully adaptive UI for both light and dark themes.",
        "🔐 Secure Authentication: Email/password or social login authentication (extendable).",
        "🔄 Real-time UI Updates: State management using Provider or Riverpod to keep UI reactive.",
        "📈 Performance Optimized: Lightweight UI, lazy loading images, and efficient network calls.",
        "📱 Modern UI/UX: Clean, intuitive, mobile-first design focused on engagement and ease-of-use."
      ],

      stats: {
        downloads: "100K+",
        // rating: "4.8",
        // reviews: "2.1K"
      },
      screenshots: [
        "/images/bazar/frame1.jpg",
        "/images/bazar/Frame 4.jpg",
        "/images/bazar/Frame 5.jpg",
        "/images/bazar/Frame 6.jpg"
      ]
    },
    "2": {
      title: "Social Media Dashboard",
      description: "A comprehensive social media management app with analytics, post scheduling, and multi-platform integration.",
      longDescription: "This powerful social media management tool helps businesses and content creators manage their social presence across multiple platforms. With advanced analytics, automated posting, engagement tracking, and team collaboration features, it's designed to streamline social media workflows.",
      technologies: ["Flutter", "GraphQL", "BLoC", "Hive", "Push Notifications", "Analytics"],
      appStoreUrl: "https://apps.apple.com/app/id123456790",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.socialmedia",
      websiteUrl: null,
      features: [
        "Multi-platform Integration",
        "Post Scheduling & Automation",
        "Analytics Dashboard",
        "Real-time Engagement Tracking",
        "Team Collaboration Tools",
        "Content Calendar",
        "Hashtag Suggestions",
        "Performance Reports"
      ],
      stats: {
        downloads: "25K+",
        rating: "4.6",
        reviews: "1.5K"
      },
      screenshots: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=600&fit=crop",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=600&fit=crop&sat=-100",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=600&fit=crop&sat=-100"
      ]
    },
    "fitness": {
      title: "Fitness Tracking App",
      description: "A comprehensive fitness app with workout tracking, nutrition logging, progress analytics, and social features.",
      longDescription: "A complete fitness companion that helps users achieve their health goals through comprehensive tracking, personalized workout plans, nutrition guidance, and community support. The app integrates with various health devices and provides detailed analytics to track progress over time.",
      technologies: ["Flutter", "SQLite", "Charts", "Camera", "Health APIs", "ML Kit"],
      appStoreUrl: "https://apps.apple.com/app/id123456791",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.fitness",
      websiteUrl: null,
      features: [
        "Workout Planning & Tracking",
        "Nutrition Logging & Calorie Counter",
        "Progress Analytics & Charts",
        "Social Features & Challenges",
        "Health Device Integration",
        "Custom Exercise Library",
        "Goal Setting & Achievements",
        "Personal Trainer Chat"
      ],
      stats: {
        downloads: "100K+",
        rating: "4.9",
        reviews: "5.2K"
      },
      screenshots: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019614711-43c92e4a45ce?w=300&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=600&fit=crop&sat=-100",
        "https://images.unsplash.com/photo-1571019614711-43c92e4a45ce?w=300&h=600&fit=crop&sat=-100"
      ]
    },
    "travel": {
      title: "Travel Planning App",
      description: "An intuitive travel planning application with itinerary management, expense tracking, and offline maps integration.",
      longDescription: "The ultimate travel companion that helps users plan, organize, and track their trips from start to finish. With offline capabilities, expense tracking, and collaborative planning features, it's perfect for both solo travelers and groups.",
      technologies: ["Flutter", "Google Maps", "Local Storage", "API Integration", "Offline Support"],
      appStoreUrl: "https://apps.apple.com/app/id123456792",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.travel",
      websiteUrl: null,
      features: [
        "Trip Planning & Itinerary Management",
        "Expense Tracking & Budget Management",
        "Offline Maps & Navigation",
        "Weather Integration",
        "Photo Journal & Memories",
        "Group Travel Collaboration",
        "Flight & Hotel Booking",
        "Local Recommendations"
      ],
      stats: {
        downloads: "75K+",
        rating: "4.7",
        reviews: "3.8K"
      },
      screenshots: [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=600&fit=crop",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=600&fit=crop",
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=600&fit=crop&sat=-100",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=600&fit=crop&sat=-100"
      ]
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t('projectDetail.backToProjects')}
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Project Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {project.description}
          </p>

          {/* App Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Download className="w-4 h-4 text-primary" />
                <span className="font-bold text-lg">{project.stats.downloads}</span>
              </div>
              <span className="text-sm text-muted-foreground">{t('projectDetail.stats.downloads')}</span>
            </div>
            {/* <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-bold text-lg">{project.stats.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">{t('projectDetail.stats.rating')}</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users className="w-4 h-4 text-accent" />
                <span className="font-bold text-lg">{project.stats.reviews}</span>
              </div>
              <span className="text-sm text-muted-foreground">{t('projectDetail.stats.reviews')}</span>
            </div> */}
          </div>

          {/* Store Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="gap-2"
              onClick={() => window.open(project.appStoreUrl, '_blank')}
            >
              <i className="ri-apple-fill"></i>
              {t('projectDetail.appStore')}
            </Button>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => window.open(project.playStoreUrl, '_blank')}
            >
              <i className="ri-google-play-fill "></i>
              {t('projectDetail.googlePlay')}
            </Button>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => window.open(project.websiteUrl, '_blank')}
            >
              <i className="ri-global-line "></i>
              {t('projectDetail.website')}
            </Button>
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">{t('projectDetail.screenshots')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <Card
                key={index}
                className="bg-card-gradient border-border/50 shadow-elegant hover:shadow-glow-primary transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-2">
                  <img
                    src={screenshot}
                    alt={`${project.title} Screenshot ${index + 1}`}
                    // className="w-full h-64 object-cover rounded-lg"
                    className="w-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Description */}
          <Card className="bg-card-gradient border-border/50 shadow-elegant animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">{t('projectDetail.overview')}</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </p>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="bg-card-gradient border-border/50 shadow-elegant animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">{t('projectDetail.features')}</h3>
              <div className="grid grid-cols-1 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technologies */}
        <Card className="mt-12 bg-card-gradient border-border/50 shadow-elegant animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">Technologies Used</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-secondary/50 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors px-4 py-2 text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail;