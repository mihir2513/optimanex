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
    slug: "goecoware",
    title: "GoEcoware - Sustainable Eco-Products",
    category: "Web Development",
    tag: "Web",
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    client: "GoEcoware",
    timeline: "2 Months",
    description: "A custom e-commerce and brand platform built for GoEcoware, offering high-quality sustainable and eco-friendly products with a seamless shopping experience.",
    challenge: "The client needed an environmentally conscious brand identity paired with a high-performance, conversion-optimized storefront that effectively tells their sustainability story.",
    solution: "We designed and developed a bespoke web platform featuring an elegant, nature-inspired UI, smooth animations, and a highly optimized e-commerce checkout flow.",
    results: [
      "Beautiful, responsive, and eco-centric design",
      "Fast page load speeds improving SEO and user retention",
      "Seamless and secure checkout experience"
    ],
    techStack: ["WordPress", "Elementor", "WooCommerce", "PHP", "Custom CSS"],
    gallery: [
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80"
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
    slug: "schoolconomy",
    title: "Schoolconomy - Educational Finance App",
    category: "Application",
    tag: "App",
    thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    client: "Schoolconomy",
    timeline: "4 Months",
    description: "An innovative educational app designed to teach students financial literacy, managing points, rewards, and school-based economies in a gamified environment.",
    challenge: "Schools lacked an engaging, digital way to teach students real-world financial skills and manage classroom reward systems without relying on physical tokens or complex spreadsheets.",
    solution: "We built a cross-platform mobile application that allows teachers to award virtual currency, and students to track their earnings, savings, and spend them in a customized school store.",
    results: [
      "Successfully launched on Google Play Store",
      "Highly engaging gamified financial learning",
      "Streamlined classroom reward management for teachers"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Node.js", "REST APIs"],
    gallery: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    slug: "mover-fleet-management",
    title: "Mover - Fleet Management",
    category: "Application",
    tag: "App",
    thumbnail: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
    client: "Optimanex (Internal Product)",
    timeline: "Ongoing",
    description: "Mover is our proprietary Transport & Fleet Management solution, engineered to give businesses real-time visibility, smarter routing, and complete control over their fleet operations.",
    challenge: "Modern fleet operators struggle with fragmented systems, leading to inefficient routing, high fuel costs, and poor visibility into driver behavior and vehicle maintenance.",
    solution: "We built Mover as a comprehensive, scalable platform featuring real-time GPS tracking, automated intelligent dispatching, predictive maintenance alerts, and a dedicated driver mobile app.",
    results: [
      "Real-time tracking with sub-second latency",
      "Optimized routing saving up to 20% in fuel costs",
      "Seamless management of end-to-end fleet operations"
    ],
    techStack: ["React Native", "Node.js", "MongoDB", "Google Maps API", "WebSockets"],
    gallery: [
      "https://images.unsplash.com/photo-1586191582046-6014e4eb1525?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"
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
  },
  {
    slug: "badi-bahen-finance",
    title: "Badi Bahen - Finance App",
    category: "Application",
    tag: "App",
    thumbnail: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80",
    client: "Badi Bahen",
    timeline: "5 Months",
    description: "A secure and intuitive financial empowerment app designed to provide micro-lending, financial guidance, and support, acting as a trusted 'Big Sister' for users' financial health.",
    challenge: "The client needed to build a trustworthy and accessible platform for digital lending and financial advice that felt approachable to users who might be intimidated by traditional banking apps.",
    solution: "We developed a cross-platform mobile application with a highly intuitive, vernacular-first UI/UX. We integrated robust automated KYC workflows, secure payment gateways, and a simplified loan management system.",
    results: [
      "Secure and scalable micro-lending infrastructure",
      "Seamless and automated user onboarding (e-KYC)",
      "High user retention driven by a friendly UX"
    ],
    techStack: ["Flutter", "Node.js", "MongoDB", "Razorpay", "e-KYC APIs"],
    gallery: [
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];
