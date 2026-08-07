import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { FloatingStats } from "@/components/ui/FloatingStats";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { TechOrbit } from "@/components/sections/TechOrbit";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

const whyChooseUs = [
  { title: "Domain Expertise", description: "Deep understanding of healthcare, fintech, real estate, and SaaS ecosystems." },
  { title: "Full-Stack Capability", description: "React, Vue.js, Laravel, Spring Boot, Node.js, Kafka, Python — we cover it all." },
  { title: "Proven Global Delivery", description: "Projects delivered on time across US, Canada, Australia, Africa, India & Europe." },
  { title: "AI-Augmented Development", description: "GitHub Copilot, Cursor AI, and Claude AI for faster, higher-quality development." },
  { title: "Scalable Architecture", description: "Microservices, cloud-native patterns, and modern DevOps for future-proof solutions." },
  { title: "Agile Methodology", description: "Sprint-based delivery with continuous feedback loops and transparent communication." }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 bg-[linear-gradient(110deg,#1c2b4c_0%,#363057_70%,#d84950_100%)] overflow-hidden">
        
        {/* Decorative Wave Overlay Placeholder */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1440 600%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath fill=%22none%22 stroke=%22rgba(255,255,255,0.2)%22 stroke-width=%222%22 d=%22M0,300 C320,100 420,500 720,300 C1020,100 1120,500 1440,300%22/%3E%3Cpath fill=%22none%22 stroke=%22rgba(255,255,255,0.1)%22 stroke-width=%221%22 d=%22M0,350 C300,150 450,450 750,350 C1050,250 1150,550 1440,350%22/%3E%3C/svg%3E')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 leading-[1.15] tracking-tight">
                Engineering the <span className="text-[#F05941]">Next</span><br className="hidden md:block" />
                <span className="text-[#F05941]">Generation</span> of Digital<br className="hidden md:block" /> Solutions
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                We consult, engineer, and design AI-powered technology solutions to tackle complex business challenges — with precision, speed, and scale.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <MagneticWrapper className="inline-block">
                <Button asChild size="lg" className="rounded-full shadow-lg hover:-translate-y-0.5 transition-transform text-base px-10 h-16 bg-[#F05941] hover:bg-[#F05941]/90 text-white border-none">
                  <Link href="/contact">
                    Book a Consultation <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </MagneticWrapper>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Band */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <FloatingStats />
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2 space-y-6">
              <SectionHeading 
                eyebrow="ABOUT US" 
                title={
                  <>Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00adef]">Technology Partner</span></>
                }
              />
              <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
                <p>
                  Based in Ahmedabad, India, Optimanex has been delivering end-to-end software solutions for over 12 years. We specialise in building scalable, robust applications across <strong className="text-foreground">Healthcare, FinTech, Real Estate, SaaS & Enterprise, Tourism, Telecom, Oil & Gas,</strong> and <strong className="text-foreground">Logistics</strong> domains.
                </p>
                <p>
                  Our team combines deep domain expertise with cutting-edge technology — including AI-augmented development — to deliver solutions that drive real business value for clients across the US, Canada, Australia, Africa, and Europe.
                </p>
              </div>
              <div className="pt-6">
                <MagneticWrapper className="inline-block">
                  <Button asChild size="lg" className="rounded-full shadow-primary hover:-translate-y-0.5 transition-transform text-base px-8 h-14">
                    <Link href="/about">Learn More About Us <ArrowRight className="w-5 h-5 ml-2" /></Link>
                  </Button>
                </MagneticWrapper>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading 
              eyebrow="WHAT WE OFFER" 
              title="End-to-End Software Engineering Services" 
              subtitle="From concept to deployment — comprehensive technology solutions tailored to your business needs."
              centered
              className="mb-16"
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <FadeIn 
                key={service.slug} 
                delay={idx * 0.1}
                className={cn(
                  "h-full",
                  idx === 0 ? "md:col-span-2 lg:row-span-2" : "",
                  idx === 3 ? "lg:col-span-2" : "",
                  idx === 4 || idx === 5 ? "lg:col-span-2" : ""
                )}
              >
                <ServiceCard service={service} index={idx} className="h-full" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading 
              eyebrow="INDUSTRIES WE SERVE" 
              title="Domain-Specific Expertise Across Verticals" 
            />
            <Button asChild variant="link" className="text-primary font-bold hidden md:inline-flex shrink-0">
              <Link href="/industries">View All Industries <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.slice(0, 10).map((industry, idx) => (
              <FadeIn key={industry.slug} delay={idx * 0.05} className="h-full">
                <IndustryCard industry={industry} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="link" className="text-primary font-bold">
              <Link href="/industries">View All Industries <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading 
              eyebrow="WHY CHOOSE US" 
              title="Why Optimanex?" 
              subtitle="Six reasons why 28+ clients trust us to build their most critical software."
              centered
              className="mb-16"
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <FeatureCard index={idx + 1} title={reason.title} description={reason.description} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Master Section */}
      <section className="py-24 bg-white overflow-hidden relative border-t border-border">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-6 border border-primary/10">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Tech Stack
                </div>
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6 leading-tight">
                  Technologies We <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00adef]">Master</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We leverage the latest and most powerful frameworks, languages, and platforms to build secure, scalable, and high-performance digital solutions tailored to your business needs.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">Frontend</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">Backend</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">Cloud</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">DevOps</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">Mobile</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">Databases</span>
                </div>
              </FadeIn>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
              <FadeIn delay={0.2}>
                <TechOrbit />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Start Your Project?" 
        subtitle="Let's discuss how we can bring your vision to life — from idea to production."
        buttonText="Book a Call"
        buttonHref="/contact"
      />
    </>
  );
}
