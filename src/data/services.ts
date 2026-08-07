export interface Service {
  slug: string;
  name: string;
  heading: string;
  subheading: string;
  capabilities: { name: string; description?: string }[];
  technologies: string[];
}

export const services: Service[] = [
  {
    slug: "digital-product-engineering",
    name: "Digital Product Engineering",
    heading: "Build Scalable Digital Products",
    subheading: "From idea to production — we engineer full-cycle digital products that scale.",
    capabilities: [
      { name: "Web Application Development" },
      { name: "SaaS Product Development" },
      { name: "Enterprise Software" },
      { name: "API Development & Integration" },
      { name: "Legacy System Modernization" },
      { name: "MVP Development" },
      { name: "Microservices Architecture" },
      { name: "Progressive Web Apps" }
    ],
    technologies: ["Spring Boot", "Django", "React", "Next.js", "Vue.js", "TypeScript", "GraphQL", "Node.js"]
  },
  {
    slug: "cloud-devops-engineering",
    name: "Cloud & DevOps Engineering",
    heading: "Cloud & DevOps Engineering",
    subheading: "Adopt, optimize, and modernize your cloud infrastructure. We help you migrate, automate, and scale confidently on AWS, Azure, and Google Cloud with industry best practices.",
    capabilities: [
      { name: "AWS / Azure / GCP Setup", description: "Complete cloud environment provisioning, IAM, networking, and security configuration" },
      { name: "CI/CD Pipeline Automation", description: "GitHub Actions, GitLab CI, Jenkins pipelines for rapid, dependable releases" },
      { name: "Kubernetes & Docker", description: "Container orchestration with Helm charts and production-ready K8s clusters" },
      { name: "Infrastructure as Code", description: "Terraform and Pulumi for reproducible, version-controlled infrastructure" },
      { name: "Cloud Migration", description: "Lift-and-shift, re-platform, and refactor migrations with zero-downtime execution" },
      { name: "DevSecOps", description: "Security scanning, secrets management, and compliance integrated into CI/CD workflows" },
      { name: "Cost Optimization", description: "Right-sizing resources, reserved instances, and financial operations best practices" },
      { name: "Multi-cloud Strategy", description: "Vendor-independent architectures preventing lock-in and enhancing resilience" }
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]
  },
  {
    slug: "data-engineering",
    name: "Data Engineering",
    heading: "Turn Data Into Insights",
    subheading: "Build AI-ready data platforms and analytics pipelines that convert raw data into actionable business intelligence — at any scale, in real time.",
    capabilities: [
      { name: "Data Pipeline Development", description: "Reliable, testable pipelines that ingest, transform, and load data across systems" },
      { name: "ETL / ELT Architecture", description: "Batch and streaming ETL with dbt, Airflow, and cloud-native services" },
      { name: "Real-time Analytics", description: "Low-latency event streaming with Kafka, Flink, and Spark Streaming" },
      { name: "Data Warehouse Design", description: "Snowflake, BigQuery, Redshift schemas optimised for analytical workloads" },
      { name: "Business Intelligence", description: "Dashboards and self-serve analytics with Metabase, Tableau, or Power BI" },
      { name: "Big Data Processing", description: "Distributed processing with Apache Spark for petabyte-scale datasets" },
      { name: "Data Governance", description: "Lineage, cataloguing, and access control ensuring data quality and compliance" },
      { name: "Stream Processing", description: "Real-time event-driven architectures for fraud detection, recommendations, and more" }
    ],
    technologies: ["Apache Kafka", "Apache Spark", "dbt", "Airflow", "Snowflake"]
  },
  {
    slug: "ai-ml-development",
    name: "AI/ML Development",
    heading: "Intelligent Solutions at Scale",
    subheading: "Leverage artificial intelligence and machine learning to automate processes, predict outcomes, and innovate faster.",
    capabilities: [
      { name: "Generative AI Integration", description: "Integration of GPT-4, Claude, and Gemini for automation purposes" },
      { name: "Custom ML Models", description: "Domain-specific models trained on proprietary data for improved accuracy" },
      { name: "NLP & Computer Vision", description: "Text classification, entity extraction, OCR, object detection, image segmentation" },
      { name: "AI Chatbots & Assistants", description: "Conversational agents featuring RAG, memory, and tool capabilities" },
      { name: "Predictive Analytics", description: "Forecasting, churn prediction, demand sensing, and anomaly detection" },
      { name: "LLM Fine-tuning", description: "Customization of open-source language models on client data" },
      { name: "AI Workflow Automation", description: "Agentic pipelines for multi-step business process automation" },
      { name: "Recommendation Engines", description: "Collaborative and content-based filtering systems" }
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "LangChain", "OpenAI API"]
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
  }
];
