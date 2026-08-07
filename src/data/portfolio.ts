export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  tag: "Web" | "App" | "AI";
  thumbnail: string;
  client: string;
  timeline: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  gallery: string[]; // Placeholder URLs for the user to replace
}

export const portfolioData: PortfolioItem[] = [
  {
    slug: "modern-ecommerce-platform",
    title: "E-Commerce & Retail Platform",
    category: "Web Development",
    tag: "Web",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    client: "RetailBrand Inc.",
    timeline: "3 Months",
    description: "A high-performance eCommerce platform built for scale, featuring real-time inventory synchronization, dynamic pricing, and a seamless checkout experience.",
    challenge: "The client was struggling with a legacy monolithic architecture that caused slow page load times and frequent crashes during high-traffic holiday sales events.",
    solution: "We migrated their entire storefront to a modern headless commerce architecture using Next.js and a microservices backend. We implemented optimized caching strategies and an edge network for global low latency.",
    results: [
      "400% improvement in page load speeds",
      "35% increase in mobile conversion rates",
      "Zero downtime during peak Black Friday sales"
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe API"],
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "saas-dashboard-interface",
    title: "SaaS Dashboard Interface",
    category: "Web Development",
    tag: "Web",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    client: "TechFlow Analytics",
    timeline: "4 Months",
    description: "A comprehensive B2B analytics dashboard providing real-time data visualization, custom reporting, and user access management for enterprise clients.",
    challenge: "Existing reporting tools were fragmented and required manual data compilation. Users needed a unified view with advanced filtering capabilities.",
    solution: "Designed and developed a highly interactive React-based SPA. We integrated complex charting libraries and built a robust API layer to aggregate data from multiple third-party sources seamlessly.",
    results: [
      "Reduced report generation time from hours to seconds",
      "Increased daily active users by 150%",
      "Seamless integration with 10+ data sources"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Express"],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "fintech-mobile-banking",
    title: "FinTech Mobile Banking",
    category: "Application",
    tag: "App",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    client: "FinServe Bank",
    timeline: "6 Months",
    description: "A secure and intuitive mobile banking application allowing users to manage accounts, transfer funds, and track their financial health effortlessly.",
    challenge: "The bank needed to attract younger demographics by offering a modern, frictionless digital banking experience without compromising strict financial security compliance.",
    solution: "Developed a cross-platform mobile application using Flutter, heavily prioritizing UX/UI. We implemented biometric authentication, end-to-end encryption, and a modern micro-interactions system.",
    results: [
      "Achieved 4.8 star rating on App Store and Google Play",
      "Over 100,000 downloads in the first month",
      "Voted best UX in digital banking 2023"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Node.js", "Bank APIs"],
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "healthcare-tracking-app",
    title: "Healthcare Tracking App",
    category: "Application",
    tag: "App",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    client: "MediCare Plus",
    timeline: "5 Months",
    description: "A patient-centric health monitoring app that integrates with wearables to track vitals and enables direct telemedicine consultations.",
    challenge: "Patients found it difficult to consistently track their health metrics and share them securely with their physicians between physical visits.",
    solution: "Built a robust mobile app that syncs automatically with Apple Health and Google Fit. We added a secure messaging and video call layer for HIPAA-compliant doctor consultations.",
    results: [
      "Increased patient engagement by 60%",
      "Reduced unnecessary clinic visits by 30%",
      "Successfully processed 50,000+ telemedicine sessions"
    ],
    techStack: ["React Native", "WebRTC", "HealthKit", "AWS HIPAA", "GraphQL"],
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "creative-ad-campaign",
    title: "Creative Ad Campaign",
    category: "AI Image Generation",
    tag: "AI",
    thumbnail: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
    client: "Global Marketing Agency",
    timeline: "2 Weeks",
    description: "Generation of hyper-realistic, AI-powered product visuals for a multi-channel digital advertising campaign, saving time and production costs.",
    challenge: "The agency needed high-quality lifestyle product shots in diverse environments but lacked the budget and timeline for a traditional multi-location photoshoot.",
    solution: "Utilized advanced AI generation models (Midjourney, Stable Diffusion) combined with expert prompting and post-production techniques to create photorealistic ad creatives.",
    results: [
      "Saved 80% on standard photography production costs",
      "Delivered 50+ unique ad creatives in just 14 days",
      "22% higher engagement rate on social media ads"
    ],
    techStack: ["Midjourney", "Stable Diffusion", "Photoshop", "Figma"],
    gallery: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "architectural-concept",
    title: "Architectural Concept",
    category: "AI Image Generation",
    tag: "AI",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    client: "Prime Real Estate",
    timeline: "3 Weeks",
    description: "Visionary AI-generated architectural concepts and interior designs used to market off-plan luxury real estate properties.",
    challenge: "The developer needed to pre-sell luxury apartments before construction began but traditional 3D rendering was too slow and expensive for multiple design variations.",
    solution: "Created highly detailed, atmospheric interior and exterior AI visualizations, allowing the client to showcase various lighting, furniture, and design options to potential buyers.",
    results: [
      "Accelerated the pre-sale phase by 2 months",
      "Provided 4 unique interior style options per unit",
      "Highly praised by investors for realism and aesthetics"
    ],
    techStack: ["Midjourney", "DALL-E 3", "Upscaler", "Lightroom"],
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09be1587?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18efc2069?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];
