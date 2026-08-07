import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatCounter } from "@/components/ui/StatCounter";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";

const coreValues = [
  { title: "Innovation First", description: "Continuously adopt emerging tech to solve complex challenges." },
  { title: "True Partnership", description: "Integrate into client teams with transparent communication." },
  { title: "Uncompromising Quality", description: "Rigorous peer review + automated testing." },
  { title: "On-Time Delivery", description: "Two-week sprints + proactive risk management." },
  { title: "Global Mindset", description: "Serve clients across North America, Europe, Africa, Middle East." },
  { title: "Client Success = Our Success", description: "Measure success by client outcomes." }
];

const expertise = [
  "Full-Stack Development", "Mobile App Development", "n8N Automation",
  "UI/UX Design", "Project Management"
];

const whatWeDo = [
  "Full-cycle Product Development",
  "AI & Machine Learning Integration", "Mobile App Development (iOS & Android)",
  "Data Engineering & Analytics", "UI/UX Design & Prototyping",
  "DevOps & CI/CD Automation", "API Design & Microservices",
  // "HIPAA & GDPR Compliance", "Ongoing Maintenance & Support", 
  "Legacy System Modernization", "Team Augmentation"
];

export const metadata: Metadata = {
  title: "About Us | Optimanex",
  description: "Learn about Optimanex, a leading software development agency with over 12 years of experience building scalable applications.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <FadeIn>
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6">
              Your Trusted Technology Partner
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
              12+ years of delivering end-to-end software solutions for businesses across Healthcare, FinTech, Real Estate, SaaS, and more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full shadow-primary hover:-translate-y-0.5 transition-transform text-base px-8 h-14">
                <Link href="/career">Work With Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent rounded-full text-base px-8 h-14 text-white border-white/20 hover:bg-white/10 hover:text-white">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-border -mt-8 relative z-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            <StatCounter
              value={4}
              suffix="+"
              label="Years of Experience"
            />

            <StatCounter
              value={8}
              suffix="+"
              label="Happy Clients"
            />

            <StatCounter
              value={15}
              suffix="+"
              label="Projects Delivered"
            />

            {/* <StatCounter value={9} label="Industry Verticals" /> */}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-6">
                A Software Studio Built on 4+ Years of Craft
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Optimanex is a full-service software development company based in Ahmedabad, India. Established in 2013, the firm has spent over a decade assisting organizations across four continents convert intricate concepts into dependable, scalable software products.
                </p>
                <p>
                  The team comprises 5+ engineers, designers, and product specialists with domain expertise across 11 industry sectors, using modern stacks (Flutter, React Native, UI/UX, Ai Image Genration, React, Node.js, n8N, Python) alongside AI-enhanced development to deliver real business value.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl shadow-card border border-border/50">
              <h3 className="text-xl font-bold font-montserrat text-foreground mb-6">What We Do</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whatWeDo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
            <FadeIn>
              <h3 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Our Mission</h3>
              <p className="text-2xl font-montserrat font-bold leading-tight text-white">
                &quot;To be the most reliable technology partner for ambitious businesses — delivering software that is built right, shipped on time, and designed to grow with your organization.&quot;
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h3 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Our Vision</h3>
              <p className="text-2xl font-montserrat font-bold leading-tight text-white">
                &quot;To become a globally recognized software engineering firm known for domain depth, engineering excellence, and genuine long-term client relationships.&quot;
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading
              eyebrow="CORE VALUES"
              title="What Drives Us"
              centered
              className="mb-16"
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <FeatureCard title={value.title} description={value.description} className="h-full bg-muted/20" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-10">Team Expertise</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {expertise.map((skill, idx) => (
                <span key={idx} className="bg-white border border-border/50 text-foreground font-semibold px-6 py-3 rounded-full shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Ready to build something great?"
        subtitle="Join 15+ businesses that trust Optimanex to deliver software that lasts. Let's start with a free 30-minute consultation."
        buttonText="Book a Free Consultation"
        buttonHref="/contact"
      />
    </>
  );
}
