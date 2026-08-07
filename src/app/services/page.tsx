import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/data/services";

const process = [
  { title: "Discovery & Planning", description: "We deep-dive into your goals, constraints, and users to define the right scope and roadmap." },
  { title: "Design & Architecture", description: "System design, database modelling, and UX prototyping — before a single line of code." },
  { title: "Agile Development", description: "Two-week sprints with continuous delivery, live demos, and tight feedback loops." },
  { title: "Launch & Support", description: "CI/CD-powered deployment, full documentation, and ongoing post-launch support." }
];

const techStack = [
  { category: "Frontend", tools: "React, Next.js, Vue.js, Angular, TypeScript, Tailwind CSS" },
  { category: "Backend", tools: "Node.js, Spring Boot, Laravel, Django, FastAPI, GraphQL" },
  { category: "Mobile", tools: "React Native, Flutter, Swift, Kotlin, Expo" },
  { category: "Cloud", tools: "AWS, Azure, GCP, Docker, Kubernetes, Terraform" },
  { category: "Data & AI", tools: "Python, Kafka, Spark, Airflow, TensorFlow, PostgreSQL" },
  { category: "Tools", tools: "GitHub Actions, Jenkins, Figma, Grafana, Datadog, Jira" }
];

export const metadata: Metadata = {
  title: "Our Services | Optimanex",
  description: "End-to-End Software Engineering Services from concept to deployment.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <FadeIn>
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6">
              End-to-End Software Engineering Services
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              From product ideation to cloud deployment and AI integration — we deliver technology solutions that are built right, shipped on time, and designed to scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full shadow-primary hover:-translate-y-0.5 transition-transform text-base px-8 h-14">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent rounded-full text-base px-8 h-14 text-white border-white/20 hover:bg-white/10 hover:text-white">
                <a href="#services-list">Explore Services</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-center">
            <div className="font-montserrat font-bold text-2xl text-foreground">35+ <span className="text-base font-poppins text-muted-foreground font-normal ml-2">Projects Delivered</span></div>
            <div className="font-montserrat font-bold text-2xl text-foreground">98% <span className="text-base font-poppins text-muted-foreground font-normal ml-2">On-time Delivery</span></div>
            <div className="font-montserrat font-bold text-2xl text-foreground">28+ <span className="text-base font-poppins text-muted-foreground font-normal ml-2">Happy Clients</span></div>
            <div className="font-montserrat font-bold text-2xl text-foreground">12+ <span className="text-base font-poppins text-muted-foreground font-normal ml-2">Years Experience</span></div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section id="services-list" className="py-24 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <FadeIn key={service.slug} delay={idx * 0.1}>
                <ServiceCard service={service} index={idx} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading 
              eyebrow="OUR PROCESS" 
              title="How We Build Software" 
              centered
              className="mb-16"
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up">
                <FeatureCard index={idx + 1} title={step.title} description={step.description} className="h-full" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading 
              eyebrow="TECH STACK" 
              title="Modern Engineering Stack" 
              centered
              light
              className="mb-16"
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {techStack.map((tech, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-bold font-montserrat text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {tech.category}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{tech.tools}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Ready to start your project?" 
        subtitle="Tell us what you're building and get a free consultation from our engineering team within 24 hours."
        buttonText="Get a Free Consultation"
        buttonHref="/contact"
      />
    </>
  );
}
