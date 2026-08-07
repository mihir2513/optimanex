export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  subheading: string;
  solutions: { title: string; description?: string }[];
  approachSteps?: { title: string; description: string }[];
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "HIPAA-Compliant Platforms",
    subheading: "We engineer HIPAA-compliant digital health platforms that modernize care delivery, improve patient outcomes, and connect care teams — from solo practices to large hospital networks.",
    solutions: [
      { title: "Telemedicine" },
      { title: "Drug Discovery Support" },
      { title: "Life Science Platforms" },
      { title: "Patient Management" },
      { title: "Healthcare Workforce Optimization" },
      { title: "Health Data Management" },
      { title: "Disease Forecasting" },
      { title: "Medical Research Support" }
    ],
    approachSteps: [
      { title: "Discovery & Compliance", description: "Analyzing requirements with a focus on HIPAA & PHI compliance." },
      { title: "Architecture Design", description: "Designing secure, scalable health data infrastructure." },
      { title: "Development", description: "Building the platform with secure coding practices." },
      { title: "Security & QA", description: "Rigorous testing for vulnerabilities and data integrity." },
      { title: "Deployment", description: "Seamless rollout with zero downtime." },
      { title: "Maintenance", description: "Continuous monitoring and compliance updates." }
    ]
  },
  {
    slug: "fintech",
    name: "FinTech & Banking",
    tagline: "Payments & Digital Lending",
    subheading: "We build secure, regulation-ready fintech platforms — from instant payment systems and digital lending to compliance automation.",
    solutions: [
      { title: "Fraud Detection" },
      { title: "Risk Assessment" },
      { title: "Algorithmic Trading" },
      { title: "Payment Processing" },
      { title: "Digital Wallets & Crypto" },
      { title: "Core Banking APIs" },
      { title: "Wealth Management" },
      { title: "KYC / AML Compliance" }
    ],
    approachSteps: [
      { title: "Requirement & Regulation", description: "Gathering business needs while ensuring financial compliance (PCI-DSS, KYC)." },
      { title: "System Architecture", description: "Designing high-availability transaction and ledger systems." },
      { title: "Agile Engineering", description: "Iterative development of secure financial modules." },
      { title: "Penetration Testing", description: "Deep security audits and QA testing." },
      { title: "Launch", description: "Staged deployment with continuous transaction monitoring." },
      { title: "Support", description: "24/7 support and security patching." }
    ]
  },
  {
    slug: "ecommerce",
    name: "eCommerce & Retail",
    tagline: "Scalable Retail Platforms",
    subheading: "From single-brand DTC stores to large multi-vendor marketplaces, we build eCommerce platforms designed for conversion, scalability, and seamless customer experiences.",
    solutions: [
      { title: "Multi-vendor Marketplaces" },
      { title: "Inventory Management" },
      { title: "Personalized Recommendations" },
      { title: "Dynamic Pricing" },
      { title: "Search & Discovery" },
      { title: "Headless Commerce" },
      { title: "Returns Management" },
      { title: "Omnichannel Integration" }
    ],
    approachSteps: [
      { title: "Market & User Research", description: "Understanding customer journeys and market demands." },
      { title: "Platform Architecture", description: "Designing scalable commerce engines and inventory systems." },
      { title: "Custom Development", description: "Building fast, responsive storefronts and admin panels." },
      { title: "Performance Testing", description: "Load testing for peak traffic events." },
      { title: "Go-Live", description: "Smooth transition and launch." },
      { title: "Optimization", description: "Continuous conversion rate optimization and maintenance." }
    ]
  },
  {
    slug: "education",
    name: "Education & eLearning",
    tagline: "EdTech & LMS Solutions",
    subheading: "Interactive learning platforms, virtual classrooms, and adaptive tools that engage students at scale — for K-12 schools, universities, corporate training programs, and EdTech startups.",
    solutions: [
      { title: "Learning Management Systems" },
      { title: "Virtual Classrooms" },
      { title: "Adaptive Learning Engines" },
      { title: "Student Analytics" },
      { title: "Gamification" },
      { title: "Assessment & Testing" },
      { title: "Course Marketplace" },
      { title: "Parent & Guardian Portals" }
    ],
    approachSteps: [
      { title: "Needs Analysis", description: "Identifying learning objectives and user roles." },
      { title: "UX/UI Design", description: "Creating engaging and accessible learning interfaces." },
      { title: "Platform Development", description: "Building scalable LMS and interactive modules." },
      { title: "Quality Assurance", description: "Testing across devices and learning environments." },
      { title: "Implementation", description: "Rolling out to institutions or users." },
      { title: "Ongoing Support", description: "Platform updates and performance monitoring." }
    ]
  },
  {
    slug: "real-estate",
    name: "Real Estate & PropTech",
    tagline: "PropTech & CRM Tools",
    subheading: "Smart property platforms, CRM tools, and tenant management systems that give real estate agents, landlords, and developers a digital-first advantage.",
    solutions: [
      { title: "Property Listing Portals" },
      { title: "CRM & Lead Management" },
      { title: "Virtual Tours & AR Staging" },
      { title: "Market Analytics" },
      { title: "Lease & Contract Automation" },
      { title: "Tenant Communication Portals" },
      { title: "Investment Analysis Tools" },
      { title: "Document Management" }
    ],
    approachSteps: [
      { title: "Business Discovery", description: "Mapping property workflows and user needs." },
      { title: "Solution Design", description: "Architecting property databases and integrations." },
      { title: "Development", description: "Building portals, CRMs, and listing engines." },
      { title: "User Testing", description: "Ensuring intuitive workflows for agents and buyers." },
      { title: "Deployment", description: "Launching the platform to the market." },
      { title: "Enhancements", description: "Adding new features based on market feedback." }
    ]
  },
  {
    slug: "saas",
    name: "SaaS & Enterprise",
    tagline: "Ops Management Platforms",
    subheading: "End-to-end SaaS platforms for operations-heavy businesses — from farm and hotel management to fleet tracking and invoice automation — built for real-world complexity.",
    solutions: [
      { title: "Farm & Agri Management" },
      { title: "Hotel & Hospitality Operations" },
      { title: "Fleet Tracking & Telematics" },
      { title: "Field Service Management" },
      { title: "Invoice & Billing Automation" },
      { title: "Subscription Billing Platforms" },
      { title: "Resource & Capacity Planning" },
      { title: "Workflow Automation" }
    ],
    approachSteps: [
      { title: "Product Strategy", description: "Defining MVP and long-term SaaS roadmap." },
      { title: "Multi-tenant Architecture", description: "Designing scalable, secure, isolated environments." },
      { title: "Agile Development", description: "Rapid iteration of core features and billing." },
      { title: "Rigorous QA", description: "Automated and manual testing for enterprise reliability." },
      { title: "Launch & Onboarding", description: "Smooth deployment and user onboarding flows." },
      { title: "Scaling & Support", description: "Infrastructure scaling and 24/7 SLA support." }
    ]
  },
  {
    slug: "logistics",
    name: "Logistics",
    tagline: "Supply Chain Solutions",
    subheading: "Real-time tracking, route optimization, and warehouse management systems that reduce operational costs and bring end-to-end visibility across the entire supply chain.",
    solutions: [
      { title: "Route Optimization" },
      { title: "Warehouse Management" },
      { title: "Last-mile Delivery Tracking" },
      { title: "Cold Chain Monitoring" },
      { title: "Freight Management" },
      { title: "Demand Forecasting" },
      { title: "Returns Processing" },
      { title: "Supplier Collaboration Portal" }
    ],
    approachSteps: [
      { title: "Operational Analysis", description: "Understanding supply chain bottlenecks and requirements." },
      { title: "System Architecture", description: "Designing real-time tracking and routing systems." },
      { title: "Development & Integration", description: "Building platforms and integrating with hardware/APIs." },
      { title: "Field Testing", description: "Real-world testing of routing and tracking accuracy." },
      { title: "Deployment", description: "Phased rollout to drivers and warehouses." },
      { title: "Continuous Optimization", description: "Performance tuning and ongoing support." }
    ]
  },
  // {
  //   slug: "oil-gas",
  //   name: "Oil & Gas",
  //   tagline: "Industrial Data Platforms",
  //   subheading: "Industrial-grade data platforms and real-time analytics engines built for the demanding requirements of upstream, midstream, and downstream energy operations.",
  //   solutions: [
  //     { title: "Industrial Data Platforms" },
  //     { title: "SCADA & Control Dashboards" },
  //     { title: "Asset Performance Management" },
  //     { title: "Pipeline Integrity Monitoring" },
  //     { title: "Compliance Reporting" },
  //     { title: "Environmental Analytics" },
  //     { title: "Production Optimization" },
  //     { title: "Safety & Permit Management" }
  //   ]
  // },
  // {
  //   slug: "tourism",
  //   name: "Tourism",
  //   tagline: "Booking & Travel Systems",
  //   subheading: "From adventure booking engines to full-service travel management systems, we craft digital experiences that delight travellers and streamline operations.",
  //   solutions: [
  //     { title: "Online Booking Engines" },
  //     { title: "Tour & Activity Management" },
  //     { title: "Channel Manager Integration" },
  //     { title: "Guest Experience Apps" },
  //     { title: "Dynamic Pricing & Revenue Management" },
  //     { title: "Itinerary Builder" },
  //     { title: "Multi-currency Payments" },
  //     { title: "Review & Reputation Management" }
  //   ]
  // },
  // {
  //   slug: "telecom",
  //   name: "Telecom",
  //   tagline: "Enterprise-Grade Solutions",
  //   subheading: "Enterprise-grade portals, BSS/OSS platforms, and media publishing systems for leading telecom providers — built for millions of concurrent users and zero-downtime requirements.",
  //   solutions: [
  //     { title: "Customer Self-service Portals" },
  //     { title: "BSS/OSS Platforms" },
  //     { title: "Network Analytics & Reporting" },
  //     { title: "IoT Device Management" },
  //     { title: "Revenue Assurance" },
  //     { title: "Media & Content Publishing" },
  //     { title: "Customer Data Platform" },
  //     { title: "Service Activation Automation" }
  //   ]
  // },
  // {
  //   slug: "social",
  //   name: "Social Platforms & Sports Tech",
  //   tagline: "Community-driven social platforms",
  //   subheading: "Community-driven social platforms and sports performance tracking apps that connect athletes, fans, and brands — driving engagement and delivering real athletic insights.",
  //   solutions: [
  //     { title: "Community & Social Networks" },
  //     { title: "Live Streaming Platforms" },
  //     { title: "Athlete Performance Tracking" },
  //     { title: "Gamification & Challenges" },
  //     { title: "Fan Engagement Tools" },
  //     { title: "Sports Analytics" },
  //     { title: "Content Moderation" },
  //     { title: "Event & Ticketing Management" }
  //   ]
  // }
];
