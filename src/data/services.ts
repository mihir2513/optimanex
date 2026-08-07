export interface Service {
  slug: string;
  name: string;
  heading: string;
  subheading: string;
  capabilities: { name: string; description?: string }[];
  technologies: string[];
  approachSteps?: { title: string; description: string }[];
}

export const services: Service[] = [
  // {
  //   slug: "digital-product-engineering",
  //   name: "Digital Product Engineering",
  //   heading: "Build Scalable Digital Products",
  //   subheading: "From idea to production — we engineer full-cycle digital products that scale.",
  //   capabilities: [
  //     { name: "Web Application Development" },
  //     { name: "SaaS Product Development" },
  //     { name: "Enterprise Software" },
  //     { name: "API Development & Integration" },
  //     { name: "Legacy System Modernization" },
  //     { name: "MVP Development" },
  //     { name: "Microservices Architecture" },
  //     { name: "Progressive Web Apps" }
  //   ],
  //   technologies: ["Spring Boot", "Django", "React", "Next.js", "Vue.js", "TypeScript", "GraphQL", "Node.js"]
  // },
  // {
  //   slug: "cloud-devops-engineering",
  //   name: "Cloud & DevOps Engineering",
  //   heading: "Cloud & DevOps Engineering",
  //   subheading: "Adopt, optimize, and modernize your cloud infrastructure. We help you migrate, automate, and scale confidently on AWS, Azure, and Google Cloud with industry best practices.",
  //   capabilities: [
  //     { name: "AWS / Azure / GCP Setup", description: "Complete cloud environment provisioning, IAM, networking, and security configuration" },
  //     { name: "CI/CD Pipeline Automation", description: "GitHub Actions, GitLab CI, Jenkins pipelines for rapid, dependable releases" },
  //     { name: "Kubernetes & Docker", description: "Container orchestration with Helm charts and production-ready K8s clusters" },
  //     { name: "Infrastructure as Code", description: "Terraform and Pulumi for reproducible, version-controlled infrastructure" },
  //     { name: "Cloud Migration", description: "Lift-and-shift, re-platform, and refactor migrations with zero-downtime execution" },
  //     { name: "DevSecOps", description: "Security scanning, secrets management, and compliance integrated into CI/CD workflows" },
  //     { name: "Cost Optimization", description: "Right-sizing resources, reserved instances, and financial operations best practices" },
  //     { name: "Multi-cloud Strategy", description: "Vendor-independent architectures preventing lock-in and enhancing resilience" }
  //   ],
  //   technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]
  // },
  {
    slug: "transport-management",
    name: "Transport Management",
    heading: "Simplify Every Transport Operation",
    subheading: "Manage trips, drivers, vehicles, expenses, billing, and operations from one intelligent platform designed to streamline your transport business and drive growth.",
    capabilities: [
      {
        name: "Trip Management",
        description: "Create, assign, and monitor trips with complete real-time visibility from dispatch to delivery."
      },
      {
        name: "Driver Management",
        description: "Manage driver profiles, documents, attendance, performance, and trip assignments in one place."
      },
      {
        name: "Vehicle Management",
        description: "Track vehicles, fitness, permits, insurance, maintenance schedules, and availability."
      },
      {
        name: "Expense Management",
        description: "Record fuel, toll, repair, and operational expenses with complete financial tracking."
      },
      {
        name: "Billing & Invoicing",
        description: "Generate invoices, manage payments, customer ledgers, and automate billing workflows."
      },
      {
        name: "Live Tracking",
        description: "Monitor vehicle locations and trip progress in real time with integrated map tracking."
      },
      {
        name: "Reports & Analytics",
        description: "Gain actionable insights with dashboards, trip reports, expense analysis, and business performance metrics."
      },
      {
        name: "Notifications & Alerts",
        description: "Receive instant alerts for trips, maintenance, renewals, payments, and important operational events."
      }
    ],
    technologies: [
      "Flutter",
      "Node.js",
      "PostgreSQL",
      "Firebase",
      "Google Maps API"
    ]
  },
  // {
  //   slug: "ai-ml-development",
  //   name: "AI/ML Development",
  //   heading: "Intelligent Solutions at Scale",
  //   subheading: "Leverage artificial intelligence and machine learning to automate processes, predict outcomes, and innovate faster.",
  //   capabilities: [
  //     { name: "Generative AI Integration", description: "Integration of GPT-4, Claude, and Gemini for automation purposes" },
  //     { name: "Custom ML Models", description: "Domain-specific models trained on proprietary data for improved accuracy" },
  //     { name: "NLP & Computer Vision", description: "Text classification, entity extraction, OCR, object detection, image segmentation" },
  //     { name: "AI Chatbots & Assistants", description: "Conversational agents featuring RAG, memory, and tool capabilities" },
  //     { name: "Predictive Analytics", description: "Forecasting, churn prediction, demand sensing, and anomaly detection" },
  //     { name: "LLM Fine-tuning", description: "Customization of open-source language models on client data" },
  //     { name: "AI Workflow Automation", description: "Agentic pipelines for multi-step business process automation" },
  //     { name: "Recommendation Engines", description: "Collaborative and content-based filtering systems" }
  //   ],
  //   technologies: ["Python", "PyTorch", "TensorFlow", "LangChain", "OpenAI API"]
  // },
  {
    slug: "web-development",
    name: "Web Development",
    heading: "Powerful Web Experiences That Scale",
    subheading: "Build fast, secure, and scalable web applications that deliver seamless experiences across every device and platform.",
    capabilities: [
      {
        name: "Custom Website Development",
        description: "High-performance, responsive websites tailored to your brand, business goals, and user needs"
      },
      {
        name: "Web Application Development",
        description: "Scalable and feature-rich web applications built for complex business workflows and digital products"
      },
      {
        name: "Frontend Development",
        description: "Modern, responsive interfaces with intuitive UX and smooth interactions across devices"
      },
      {
        name: "Backend Development",
        description: "Secure and scalable server-side systems, APIs, databases, and business logic"
      },
      {
        name: "E-Commerce Development",
        description: "Conversion-focused online stores with product management, payments, orders, and third-party integrations"
      },
      {
        name: "API & Third-Party Integrations",
        description: "Seamless integration with payment gateways, CRMs, ERPs, analytics platforms, and external services"
      },
      {
        name: "CMS Development",
        description: "Flexible content management solutions using custom or headless CMS architectures"
      },
      {
        name: "Web Performance & Optimization",
        description: "Improved speed, SEO, accessibility, security, and overall website performance"
      }
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB"
    ]
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    heading: "Apps Your Users Will Love",
    subheading: "Native and cross-platform mobile applications for iOS and Android — built for performance, usability, and long-term scale.",
    capabilities: [
      { name: "iOS App Development", description: "Swift and SwiftUI apps for Apple ecosystem integration" },
      { name: "Android App Development", description: "Kotlin apps following Material Design 3 and Jetpack practices" },
      { name: "React Native / Flutter", description: "Single codebase with near-native performance" },
      { name: "Mobile UI/UX Design", description: "Platform-aware interfaces maximizing user engagement" },
      { name: "App Maintenance & Support", description: "OS updates, crash fixes, and performance monitoring" },
      { name: "Cross-platform Solutions", description: "Shared logic with platform-specific UI rendering" },
      { name: "Push Notifications", description: "Targeted campaigns via FCM/APNs with deep-link routing" },
      { name: "Offline-first Apps", description: "Reliable functionality with local-first sync strategies" }
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"]
  },
  {
    slug: "ai-image-generation",
    name: "AI Image Generation",
    heading: "Creative Intelligence, Powered by AI",
    subheading: "Transform ideas into stunning, production-ready visuals with AI-powered image generation tailored to your brand and business needs.",
    capabilities: [
      {
        name: "AI-Powered Image Generation",
        description: "Generate high-quality, photorealistic, and creative visuals from simple text prompts"
      },
      {
        name: "Custom AI Visuals",
        description: "Create unique branded imagery tailored to your products, campaigns, and visual identity"
      },
      {
        name: "Product Image Generation",
        description: "Generate professional product visuals, lifestyle scenes, mockups, and promotional assets"
      },
      {
        name: "AI Image Editing",
        description: "Remove backgrounds, replace objects, enhance details, expand images, and transform existing visuals"
      },
      {
        name: "Character & Concept Generation",
        description: "Create consistent characters, environments, concepts, and visual storytelling assets"
      },
      {
        name: "Marketing & Ad Creatives",
        description: "Produce engaging social media creatives, campaign visuals, banners, and advertising concepts at scale"
      },
      {
        name: "Style & Brand Customization",
        description: "Generate visuals aligned with specific artistic styles, brand guidelines, colors, and creative directions"
      },
      {
        name: "AI Creative Automation",
        description: "Automate large-scale visual content production for catalogs, campaigns, social media, and digital platforms"
      }
    ],
    technologies: [
      "OpenAI",
      "Midjourney",
      "Stable Diffusion",
      "Flux",
      "ComfyUI"
    ]
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    heading: "Design That Drives Engagement",
    subheading: "User-centered design that creates delightful experiences and measurable improvements in engagement and conversion.",
    capabilities: [
      { name: "Product Strategy & Discovery", description: "Jobs analysis, opportunity mapping, and roadmap alignment" },
      { name: "Wireframing & Prototyping", description: "Low and high-fidelity Figma prototypes for testing and handoff" },
      { name: "User Research", description: "Interviews, surveys, usability tests, and heatmap analysis" },
      { name: "Design Systems", description: "Token-based, component-driven systems scaling across products" },
      { name: "Interaction Design", description: "Micro-animations, transitions, and feedback states" },
      { name: "Usability Testing", description: "Moderated and unmoderated tests identifying friction points" },
      { name: "Brand Identity", description: "Logo, color palette, typography, and guidelines" },
      { name: "Motion & Animation", description: "Lottie animations and motion design guiding user attention" }
    ],
    technologies: ["Figma", "FigJam", "Adobe XD", "Lottie", "Zeroheight"]
  }, {
    slug: "n8n-workflow-automation",
    name: "n8n Workflow Automation",
    heading: "Automate Workflows, Accelerate Growth",
    subheading: "Connect your tools, automate repetitive processes, and build intelligent workflows that save time, reduce errors, and scale your operations.",
    capabilities: [
      {
        name: "Custom Workflow Automation",
        description: "Design and automate complex business processes tailored to your specific operational requirements"
      },
      {
        name: "API & App Integrations",
        description: "Connect CRMs, ERPs, databases, payment gateways, communication tools, and third-party APIs seamlessly"
      },
      {
        name: "AI-Powered Workflows",
        description: "Integrate LLMs, AI agents, and intelligent decision-making into automated business processes"
      },
      {
        name: "Lead & Sales Automation",
        description: "Automate lead capture, qualification, follow-ups, notifications, CRM updates, and sales workflows"
      },
      {
        name: "Data Processing & Transformation",
        description: "Collect, transform, validate, enrich, and synchronize data across multiple platforms automatically"
      },
      {
        name: "Webhook & Event Automation",
        description: "Trigger real-time workflows using webhooks, events, schedules, and application-based triggers"
      },
      {
        name: "Business Process Automation",
        description: "Automate repetitive tasks across operations, marketing, finance, customer support, and internal workflows"
      },
      {
        name: "Monitoring & Error Handling",
        description: "Build reliable workflows with validation, conditional logic, error handling, alerts, and execution monitoring"
      }
    ],
    technologies: [
      "n8n",
      "JavaScript",
      "REST APIs",
      "Webhooks",
      "OpenAI"
    ]
  }
];
