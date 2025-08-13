export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  category: string;
  featured: boolean;
  appStoreUrl?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
  date: string;
  features: string[];
  stats?: {
    downloads?: string;
    rating?: string;
    reviews?: string;
  };
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    titleKey: "projectsList.bazar.title",
    descriptionKey: "projectsList.bazar.description",
    longDescription: `Bazar is a full-featured multi-vendor marketplace mobile application built with Flutter, Laravel and React.js. It reimagines online shopping by combining the functionality of a traditional e-commerce platform with modern social engagement features — offering users a seamless, interactive, and engaging experience.

    The app allows users to browse products from multiple vendors, place orders, and interact with content-rich reels showcasing products through both photos and videos. Users can follow their favorite vendors, like products and reels, and leave ratings and reviews to help others make informed decisions.
        
    Vendors can create profiles, list products with media-rich content, and engage directly with potential buyers through social-like features, making the selling experience more dynamic and personalized. Reels serve as a powerful marketing tool inside the app, where sellers can creatively promote their items.
        
    Push notifications are integrated using Firebase, ensuring users stay updated with order statuses, new product listings, promotional reels, and social activity. The backend is powered by a secure Laravel API, optimized behind Cloudflare for enhanced performance and protection.

    The UI is fast, responsive, and built for both Android and iOS using Flutter, offering a consistent experience across platforms.`,
    technologies: ["Flutter", "Dart", "Firebase", "Laravel", "Socket.IO", "Clean Architecture", "Provider", "REST API", "Push Notifications", "HTML", "CSS", "JavaScript", "PHP", "CloudFlare"],
    image: "/images/bazar/logo.png",
    category: "ecommerce",
    featured: true,
    appStoreUrl: "https://apps.apple.com/app/6720723099",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.user.bazar",
    websiteUrl: "https://bazar.coms.sa",
    date: "2024-12",
    features: ["Multi-vendor marketplace", "Social commerce", "Real-time chat", "Payment gateway integration", "Push notifications", "Admin dashboard"],
    stats: {
      downloads: "100K+"
    },
    screenshots: [
      "/images/bazar/frame1.jpg",
      "/images/bazar/Frame 4.jpg",
      "/images/bazar/Frame 5.jpg",
      "/images/bazar/Frame 6.jpg"
    ]
  },
  {
    id: "2",
    titleKey: "projectsList.salam.title",
    descriptionKey: "projectsList.salam.description",
    longDescription: "A comprehensive government platform designed to facilitate cultural communication and understanding across Saudi Arabia. This web-based solution integrates multiple technologies to create an engaging and informative experience for users seeking to learn about Saudi culture, traditions, and heritage.",
    technologies: ["Laravel", "Next.js", "React.js", "WordPress", "CloudFlare", "HTML", "CSS", "JavaScript", "PHP", "MySQL", "Tailwind CSS", "Figma", "PhpMyAdmin", "Postman"],
    image: "/images/salam/logo/ic_logo_green_dark.svg",
    category: "web",
    featured: true,
    websiteUrl: 'https://salam4cc.org/',
    date: "2024-11",
    features: ["Government platform", "Cultural communication", "Multi-language support", "Content management", "User engagement", "Responsive design"],
    stats: {
      // downloads: "50K+"
    },
    screenshots: [
      "/images/salam/frame1.png",
      "/images/salam/frame2.png",
      "/images/salam/frame3.png"
    ]
  },
  {
    id: "3",
    titleKey: "projectsList.bazarMarket.title",
    descriptionKey: "projectsList.bazarMarket.description",
    longDescription: "A comprehensive market management application designed specifically for Bazar vendors to efficiently manage their business operations. This app provides powerful analytics, post scheduling capabilities, and seamless multi-platform integration to help vendors grow their business.",
    technologies: ["Flutter", "Dart", "Firebase", "Laravel", "Socket.IO", "Clean Architecture", "Provider", "REST API", "Push Notifications", "HTML", "CSS", "JavaScript", "PHP", "CloudFlare"],
    image: "/images/bazar_market/bazarlogo.png",
    category: "ecommerce",
    featured: false,
    appStoreUrl: "https://apps.apple.com/app/6723871374?platform=iphone",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.market.bazar",
    websiteUrl: "https://bazar.coms.sa",
    date: "2024-12",
    features: ["Market management", "Analytics dashboard", "Post scheduling", "Multi-platform integration", "Vendor tools", "Sales tracking"],
    stats: {
      // downloads: "25K+"
    },
    screenshots: [
      "/images/bazar_market/appstore.png",
      "/images/bazar_market/splash.mov",
      "/images/bazar_market/bazarlogo.png"
    ]
  },
  {
    id: "4",
    titleKey: "projectsList.daffa.title",
    descriptionKey: "projectsList.daffa.description",
    longDescription: "An elegant e-commerce application specifically designed for traditional clothing, particularly Abayas. This app combines traditional fashion with modern e-commerce features to provide a seamless shopping experience for customers seeking authentic traditional attire.",
    technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Payment Gateway"],
    image: "/images/daffa/logo.png",
    category: "ecommerce",
    featured: false,
    appStoreUrl: "https://apps.apple.com/us/app/daffa/id1502627950",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.daffa.app",
    date: "2024-10",
    features: ["Traditional clothing store", "Modern UI/UX", "Location services", "Secure payments", "Wishlist", "Order tracking"],
    stats: {
      // downloads: "75K+"
    },
    screenshots: [
      "/images/daffa/frame1.png",
      "/images/daffa/frame2.png",
      "/images/daffa/frame3.png",
      "/images/daffa/frame4.png",
      "/images/daffa/frame5.png"
    ]
  },
  {
    id: "5",
    titleKey: "projectsList.coolCar.title",
    descriptionKey: "projectsList.coolCar.description",
    longDescription: "A comprehensive mobile application for car protection and insulation products. This app provides easy access to premium automotive care products and services, helping car owners maintain and protect their vehicles with professional-grade solutions.",
    technologies: ["Flutter", "Firebase", "Laravel", "Payment Integration"],
    image: "/images/cool_car/logo.png",
    category: "utility",
    featured: false,
    appStoreUrl: "https://apps.apple.com/ae/app/id6737987479",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.cool.car.sa",
    websiteUrl: "https://coolcar.com.sa",
    date: "2024-11",
    features: ["Car protection products", "Service booking", "Location tracking", "Payment integration", "Customer support", "Product catalog"],
    stats: {
      // downloads: "30K+"
    },
    screenshots: [
      "/images/cool_car/frame1.png",
      "/images/cool_car/frame2.png",
      "/images/cool_car/frame3.png",
      "/images/cool_car/frame4.png"
    ]
  },
  {
    id: "6",
    titleKey: "projectsList.sarfha.title",
    descriptionKey: "projectsList.sarfha.description",
    longDescription: "An innovative platform that combines auctions, classified ads, and reward systems in one comprehensive application. Sarfha provides users with multiple ways to buy, sell, and earn rewards while engaging with a vibrant community of users.",
    technologies: ["Flutter", "Laravel", "Firebase", "CloudFlare", "Real-time Bidding"],
    image: "/images/sarfha/logo.png",
    category: "marketplace",
    featured: false,
    appStoreUrl: "https://apps.apple.com/kw/app/6544787418",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.sarfha&hl=ar",
    websiteUrl: null,
    date: "2024-09",
    features: ["Auction platform", "Classified ads", "Reward system", "Real-time bidding", "User engagement", "Social features"],
    stats: {
      downloads: "45K+"
    },
    screenshots: [
      "/images/sarfha/sarfha 1.png",
      "/images/sarfha/sarfha2.png",
      "/images/sarfha/sarfha 33.png",
    ]
  },
  {
    id: "7",
    titleKey: "projectsList.taivay.title",
    descriptionKey: "projectsList.taivay.description",
    longDescription: "A specialized marketplace application designed for the Mauritanian market, facilitating easy buying and selling with built-in negotiation tools and reward systems. This app caters specifically to local commerce needs and cultural preferences.",
    technologies: ["Flutter", "Laravel", "Firebase", "GPS Integration"],
    image: "/images/taivay/logo.png",
    category: "marketplace",
    featured: false,
    appStoreUrl: "https://apps.apple.com/us/app/id6739472701",
    websiteUrl: "https://taivay.net/",
    date: "2024-10",
    features: ["Free marketplace", "Buy and sell", "Location-based search", "User profiles", "Chat system", "Local commerce"],
    stats: {
      // downloads: "20K+"
    },
    screenshots: [
      "/images/taivay/Frame 2.jpg",
      "/images/taivay/Frame 31.jpg",
      "/images/taivay/Frame 32.jpg",
      "/images/taivay/Frame 5 (1).jpg",
      "/images/taivay/Frame 6 (1).jpg",
      "/images/taivay/frame1.jpg"
    ]
  },
  {
    id: "8",
    titleKey: "projectsList.heavenValley.title",
    descriptionKey: "projectsList.heavenValley.description",
    longDescription: "A comprehensive beauty platform that combines salon services, premium cosmetics shopping, and expert consultations in one convenient application. This app serves as a complete beauty companion for users seeking professional beauty services and products.",
    technologies: ["Flutter", "Firebase", "Laravel", "Booking System"],
    image: "/images/heaven_valley/logo.png",
    category: "beauty",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.heaven_vally",
    date: "2024-08",
    features: ["Beauty services", "Salon booking", "Product shopping", "Expert consultations", "Appointment management", "Payment processing"],
    stats: {
      // downloads: "35K+"
    },
    screenshots: [
      "/images/heaven_valley/frame1.png",
      "/images/heaven_valley/frame2.png",
      "/images/heaven_valley/frame3.png",
      "/images/heaven_valley/frame4.png",
      "/images/heaven_valley/frame5.png",
      "/images/heaven_valley/frame6.png",
      "/images/heaven_valley/frame7.png",
      "/images/heaven_valley/frame8.png"
    ]
  },
  {
    id: "9",
    titleKey: "projectsList.heavenValleyAdmin.title",
    descriptionKey: "projectsList.heavenValleyAdmin.description",
    longDescription: "A comprehensive admin application designed specifically for Heaven Valley service providers to efficiently manage their business operations, appointments, and client relationships. This app streamlines administrative tasks and improves overall business efficiency.",
    technologies: ["Flutter", "Firebase", "Laravel", "Admin Dashboard"],
    image: "/images/heaven_valley_admin/logo.png",
    category: "beauty",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.heaven_vally_admin",
    date: "2024-08",
    features: ["Admin dashboard", "Service management", "Booking analytics", "Staff management", "Revenue tracking", "Customer insights"],
    stats: {
      // downloads: "5K+"
    },
    screenshots: [
      "/images/heaven_valley_admin/frame1.jpg",
      "/images/heaven_valley_admin/frame2.jpg",
      "/images/heaven_valley_admin/frame3.jpg",
      "/images/heaven_valley_admin/frame4.jpg"
    ]
  },
  {
    id: "10",
    titleKey: "projectsList.dieayaPlus.title",
    descriptionKey: "projectsList.dieayaPlus.description",
    longDescription: "A comprehensive local market discovery and shopping application that connects users with local businesses offering exclusive discounts and deals. This app helps users discover hidden gems in their local markets while saving money through special offers.",
    technologies: ["Flutter", "Firebase", "Laravel", "Location Services"],
    image: "/images/d3aia/logo.png",
    category: "deals",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.dieayaplus.user&hl=en",
    appStoreUrl: "https://apps.apple.com/us/app/dieaya-plus/id6502800190",
    websiteUrl: "https://dieaya-plus.com/",
    date: "2024-07",
    features: ["Local market discovery", "Exclusive discounts", "Product catalog", "Location-based offers", "User reviews", "Wishlist"],
    stats: {
      // downloads: "40K+"
    },
    screenshots: [
      "/images/d3aia/frame1.png",
      "/images/d3aia/frame2.png",
      "/images/d3aia/frame3.png"
    ]
  },
  {
    id: "11",
    titleKey: "projectsList.dieayaPlusBusiness.title",
    descriptionKey: "projectsList.dieayaPlusBusiness.description",
    longDescription: "A comprehensive business management platform designed specifically for Dieaya Plus merchants to efficiently manage their offers, track analytics, and engage with customers. This app provides powerful tools for business growth and customer relationship management.",
    technologies: ["Flutter", "Firebase", "Laravel", "Analytics"],
    image: "/images/d3aia_market/logo.png",
    category: "deals",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.dieayaplus.market&hl=en",
    appStoreUrl: "https://apps.apple.com/us/app/dieaya-plus-business/id6502800191",
    websiteUrl: "https://dieaya-plus.com/",
    date: "2024-07",
    features: ["Business dashboard", "Offer management", "Customer analytics", "Sales tracking", "Inventory management", "Promotion tools"],
    stats: {
      // downloads: "8K+"
    },
    screenshots: [
      "/images/d3aia_market/frame1.png",
      "/images/d3aia_market/frame2.png",
      "/images/d3aia_market/frame3.png"
    ]
  },
  {
    id: "12",
    titleKey: "projectsList.maak.title",
    descriptionKey: "projectsList.maak.description",
    longDescription: "A comprehensive healthcare application that brings medical and psychological consultations directly to users' homes. This app provides remote healthcare services, appointment booking, and prescription management, making healthcare more accessible and convenient.",
    technologies: ["Flutter", "Firebase", "Laravel", "Video Calling", "AI"],
    image: "/images/maak/logo.png",
    category: "healthcare",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.maak.health&hl=en",
    appStoreUrl: "https://apps.apple.com/us/app/maak/id6502800192",
    websiteUrl: "https://maak-health.com/",
    date: "2024-06",
    features: ["Telemedicine", "Appointment booking", "Prescription management", "Video consultations", "Health records", "AI health assistant"],
    stats: {
      // downloads: "60K+"
    },
    screenshots: [
      "/images/maak/frame1.png",
      "/images/maak/frame2.png",
      "/images/maak/frame3.png",
      "/images/maak/frame4.png"
    ]
  },
  {
    id: "13",
    titleKey: "projectsList.glamgo.title",
    descriptionKey: "projectsList.glamgo.description",
    longDescription: "An on-demand beauty services platform that connects customers with professional beauty specialists for both home and salon services. This app revolutionizes the beauty industry by providing convenient access to professional beauty services at users' preferred locations.",
    technologies: ["Flutter", "Firebase", "Laravel", "Real-time Tracking"],
    image: "/images/glamgo/logo.png",
    category: "beauty",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.glamgo.apps.android&hl=en",
    appStoreUrl: "https://apps.apple.com/us/app/glamgo/id6502800193",
    websiteUrl: "https://glamgo.app/",
    date: "2024-05",
    features: ["On-demand beauty services", "Home services", "Professional network", "Real-time tracking", "Service booking", "Reviews and ratings"],
    stats: {
      // downloads: "55K+"
    },
    screenshots: [
      "/images/glamgo/frame1.png",
      "/images/glamgo/frame2.png",
      "/images/glamgo/frame3.png",
      "/images/glamgo/frame4.png",
      "/images/glamgo/frame5.png",
      "/images/glamgo/frame6.png",
      "/images/glamgo/frame7.png",
      "/images/glamgo/frame8.png"
    ]
  },
  {
    id: "14",
    titleKey: "projectsList.glamgoProvider.title",
    descriptionKey: "projectsList.glamgoProvider.description",
    longDescription: "A professional application designed specifically for beauty service providers to efficiently manage their bookings, track earnings, and grow their beauty business. This app provides comprehensive tools for service providers to streamline their operations and maximize their business potential.",
    technologies: ["Flutter", "Firebase", "Laravel", "Calendar Integration"],
    image: "/images/glamgo_provider/logo.png",
    category: "beauty",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.glamgo.apps.provider&hl=en",
    appStoreUrl: "https://apps.apple.com/us/app/glamgo-provider/id6502800194",
    websiteUrl: "https://glamgo.app/provider",
    date: "2024-05",
    features: ["Provider dashboard", "Booking management", "Earnings tracking", "Schedule management", "Client communication", "Portfolio showcase"],
    stats: {
      // downloads: "12K+"
    },
    screenshots: [
      "/images/glamgo_provider/frame1.png",
      "/images/glamgo_provider/frame2.png",
      "/images/glamgo_provider/frame3.png",
      "/images/glamgo_provider/frame4.png",
      "/images/glamgo_provider/frame5.png"
    ]
  },
  {
    id: "15",
    titleKey: "projectsList.tissueWishen.title",
    descriptionKey: "projectsList.tissueWishen.description",
    longDescription: "A specialized marketplace for premium tissue and paper products, offering subscription services and bulk ordering options for both businesses and households. This app provides convenient access to high-quality paper products with flexible ordering options.",
    technologies: ["Flutter", "Firebase", "Laravel", "Subscription System"],
    image: "/images/manadil/logo.png",
    category: "marketplace",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.tissue&hl=en",
    appStoreUrl: "https://apps.apple.com/us/app/id6741335020",
    // websiteUrl: "https://tissuewishen.com/",
    date: "2024-04",
    features: ["Premium tissue products", "Subscription service", "Bulk ordering", "Business solutions", "Delivery tracking", "Eco-friendly options"],
    stats: {
      // downloads: "18K+"
    },
    screenshots: [
      "/images/manadil/frame1.jpg",
      "/images/manadil/frame2.jpg",
      "/images/manadil/frame3.jpg",
      "/images/manadil/frame4.jpg",
    ]
  },
  {
    id: "16",
    titleKey: "projectsList.roz.title",
    descriptionKey: "projectsList.roz.description",
    longDescription: "A Halal installment-based shopping platform that makes purchasing and selling products accessible to everyone. This app provides flexible payment options while ensuring compliance with Islamic financial principles, allowing users to shop and earn rewards with every purchase.",
    technologies: ["Flutter", "Firebase", "Laravel", "AI Recommendations"],
    image: "/images/rose/logo.png",
    category: "beauty",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.rose.beauty&hl=en",
    appStoreUrl: "https://apps.apple.com/us/app/rose-beauty/id6502800196",
    websiteUrl: "https://rosebeauty.sa/",
    date: "2024-03",
    features: ["Luxury beauty products", "AI recommendations", "Skincare analysis", "Expert consultations", "Beauty routines", "Premium brands"],
    stats: {
      // downloads: "25K+"
    },
    screenshots: [
      "/images/rose/frame1.png",
      "/images/rose/frame2.png",
      "/images/rose/frame3.png",
      "/images/rose/frame4.png"
    ]
  },
  {
    id: "17",
    titleKey: "projectsList.dalilWijhitak.title",
    descriptionKey: "projectsList.dalilWijhitak.description",
    longDescription: "Your ultimate travel guide and destination discovery app for the Kingdom of Saudi Arabia. This comprehensive platform provides up-to-date information on events, popular places, holidays, and unique experiences, all enhanced with local insights and cultural experiences to help travelers make the most of their Saudi Arabian adventure.",
    technologies: ["Flutter", "Firebase", "Laravel", "Maps Integration", "AR"],
    image: "/images/dalilwijhitak/logo.png",
    category: "travel",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.dalilwijhitak.app&hl=en",
    appStoreUrl: "https://apps.apple.com/us/app/dalil-wijhitak/id6502800197",
    websiteUrl: "https://dalilwijhitak.com/",
    date: "2024-02",
    features: ["Travel guide", "Destination discovery", "Local insights", "Cultural experiences", "AR navigation", "Trip planning"],
    stats: {
      // downloads: "35K+"
    },
    screenshots: [
      "/images/dalilwijhitak/Frame 1.jpg",
      "/images/dalilwijhitak/Frame 2.jpg",
      "/images/dalilwijhitak/Frame 3.jpg",
      "/images/dalilwijhitak/Frame 30.jpg",
      "/images/dalilwijhitak/Frame 5.jpg",
      "/images/dalilwijhitak/Frame 6.jpg"
    ]
  },
  {
    id: "18",
    titleKey: "projectsList.akareya.title",
    descriptionKey: "projectsList.akareya.description",
    longDescription: "A comprehensive real estate platform that revolutionizes property buying, selling, and renting through advanced features like virtual tours and smart matching algorithms. This platform provides users with innovative tools to make informed real estate decisions.",
    technologies: ["Flutter", "Firebase", "Laravel", "VR/AR", "Machine Learning"],
    image: "/images/akareya/logo.png",
    category: "real_estate",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.akareya.app&hl=en",
    appStoreUrl: "https://apps.apple.com/us/app/akareya/id6502800198",
    websiteUrl: "https://akareya.sa/",
    date: "2024-01",
    features: ["Property marketplace", "Virtual tours", "Smart matching", "Investment analysis", "Mortgage calculator", "Legal support"],
    stats: {
      // downloads: "28K+"
    },
    screenshots: [
      "/images/akareya/login.png",
      "/images/akareya/logo.png",
      "/images/akareya/logoSvg.svg"
    ]
  },
  {
    id: "19",
    titleKey: "projectsList.damin.title",
    descriptionKey: "projectsList.damin.description",
    longDescription: "An innovative escrow-style application that provides secure buying and selling transactions by holding payments in trust until deals are successfully completed. This app ensures safe and transparent transactions for all parties involved.",
    technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
    image: "/images/damin/logo.png",
    category: "marketplace",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.damin.sa&hl=en",
    appStoreUrl: "https://apps.apple.com/il/app/6743303228?platform=iphone",
    websiteUrl: null,
    date: "2025-01",
    features: ["Escrow‑style payment withholding until deal completion", "In‑app messaging between buyer and seller", "Order management and status overview", "Real‑time transaction tracking and updates", "Secure and trusted environment for trading", "Regular updates and performance enhancements", "Transparent data policy with no third‑party sharing"],
    stats: {
      downloads: "15K+"
    },
    screenshots: [
      "/images/damin/frame1.png",
      "/images/damin/frame2.png",
      "/images/damin/frame3.png",
      "/images/damin/frame4.png"
    ]
  },
  {
    id: "20",
    titleKey: "projectsList.noot.title",
    descriptionKey: "projectsList.noot.description",
    longDescription: "Your ultimate solution for discovering the best real estate rental options across Saudi Arabia. Whether you're seeking housing or commercial property, Noot offers precise filters for location, price, and amenities to help you find the perfect match. The app delivers a transparent, secure user experience with direct communication between renters and property owners, detailed listings, and clear images.",
    technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
    image: "/images/noot/logo.png",
    category: "real_estate",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.noot&hl=en",
    appStoreUrl: "https://apps.apple.com/kw/app/noot/id6744273000?l=ar&platform=iphone",
    websiteUrl: null,
    date: "2025-03",
    features: ["Search for apartments, villas, offices, and commercial spaces across Saudi Arabia", "Filter results by location, price range, and property features", "View detailed listings with high‑quality photos and full property information", "Contact property owners directly through the app", "Experience a safe and transparent rental process"],
    stats: {
      // downloads: "22K+"
    },
    screenshots: [
      "/images/noot/frame1.png",
      "/images/noot/frame2.png",
      "/images/noot/frame3.png",
    ]
  },
  {
    id: "21",
    titleKey: "projectsList.nootOwner.title",
    descriptionKey: "projectsList.nootOwner.description",
    longDescription: "Your trusted partner in the property rental journey, offering a seamless, transparent, and secure experience. Discover a comprehensive marketplace tailored to tenants and business users across Saudi Arabia—search apartments, villas, offices, and commercial spaces with precision using powerful filters like price range, location, and amenities. Our app empowers you with clear property details and high‑quality images, helping you make informed decisions quickly and confidently.",
    technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
    image: "/images/noot_owner/logo.png",
    category: "real_estate",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.noot_owner&hl=en",
    appStoreUrl: "https://apps.apple.com/kw/app/noot-owner/id6744275474?l=ar&platform=iphone",
    websiteUrl: null,
    date: "2025-03",
    features: ["Extensive Property Listings: Explore apartments, villas, offices, retail stores, and more across Saudi Arabia with detailed descriptions.", "Advanced Search Filters: Narrow down options by city, price, property type, and amenities.", "High‑Quality Listings: View clear photos and comprehensive property information to make informed choices.", "Secure In‑App Messaging: Contact property owners directly within the app in a trusted and private environment.", "Transparent Rental Process: Navigate listings and transactions with clarity and confidence built into the experience.", "Cross‑Platform Availability: Designed for Android 5.0+ devices, ensuring wide compatibility.", "Regular Updates & Support: Latest versions bring improvements and bug fixes (e.g. version 1.0.9 released March 11, 2025)."],
    stats: {
      downloads: "8K+"
    },
    screenshots: [
      "/images/noot_owner/frame1.png",
      "/images/noot_owner/frame2.png",
      "/images/noot_owner/frame3.png",
    ]
  },
  {
    id: "22",
    titleKey: "projectsList.breeze.title",
    descriptionKey: "projectsList.breeze.description",
    longDescription: "A comprehensive application that includes the largest stores, whether they are regular shops, wholesale outlets, or factories. It simplifies the shopping process by offering a solution to the challenges of quickly and easily finding nearby stores with their ratings and prices.",
    technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
    image: "/images/breeze/logo.png",
    category: "utility",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.breeze.sa&hl=en",
    appStoreUrl: "https://apps.apple.com/kw/app/6744358772",
    websiteUrl: null,
    date: "2025-04",
    features: ["Itinerary Planning", "Expense Tracking", "Offline Maps", "Weather Integration"],
    stats: {
      // downloads: "12K+"
    },
    screenshots: [
      "/images/breeze/frame1.png",
      "/images/breeze/frame2.png",
      "/images/breeze/frame3.png",
    ]
  },
  {
    id: "23",
    titleKey: "projectsList.breezeAdmin.title",
    descriptionKey: "projectsList.breezeAdmin.description",
    longDescription: "An administrative application for managing the Breeze platform, including the largest stores, whether they are regular shops, wholesale outlets, or factories. It simplifies the shopping process by offering a solution to the challenges of quickly and easily finding nearby stores with their ratings and prices.",
    technologies: ["Flutter", "Google Maps", "API Integration", "Firebase", "Clean Architecture", "Provider", "REST API", "Push Notifications", "Laravel", "HTML", "CSS", "JavaScript", "PHP"],
    image: "/images/breeze_admin/logo.png",
    category: "utility",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.breeze_delivery&hl=en",
    websiteUrl: null,
    date: "2025-04",
    features: ["Itinerary Planning", "Expense Tracking", "Offline Maps", "Weather Integration"],
    stats: {
      // downloads: "3K+"
    },
    screenshots: [
      "/images/breeze_admin/frame1.png",
      "/images/breeze_admin/frame2.png",
      "/images/breeze_admin/frame3.png"
    ]
  },
  {
    id: "24",
    titleKey: "projectsList.mazij.title",
    descriptionKey: "projectsList.mazij.description",
    longDescription: "Mazij is a free shopping app aggregating multiple sellers across categories like clothing, electronics, home appliances, and beauty products—facilitating a seamless, all-in-one shopping experience with diverse payment options, order tracking, and exclusive offers.",
    technologies: ["Flutter", "Laravel", "Dart", "API Integration", "Data Privacy Compliance"],
    image: "/images/mazij/logo.png",
    category: "shopping",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mazij.app&hl=en",
    appStoreUrl: "https://apps.apple.com/kw/app/mazij/id6502800190",
    // websiteUrl: "https://mazijapp.com",
    date: "2024-08",
    features: ["Wide product range", "Smooth UI", "Secure/Multi payment options", "Order tracking", "Exclusive discounts"],
    stats: {
      // downloads: "5+ (Google Play) / App Store free"
    },
    screenshots: [
      "/images/mazij/Mazij thumNail.png",
      "/images/mazij/frame1.png",
      "/images/mazij/frame2.png",
      "/images/mazij/frame3.png",
    ]
  }


];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
}; 