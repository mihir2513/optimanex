import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/data/services";
import { Metadata } from "next";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.name} Services | Optimanex`,
    description: service.subheading,
  };
}

const approachSteps = [
  { title: "Discovery", description: "Requirement gathering and business analysis." },
  { title: "Architecture", description: "System design and technology selection." },
  { title: "Agile Development", description: "Iterative sprints with regular demos." },
  { title: "QA & Testing", description: "Automated and manual testing for quality assurance." },
  { title: "Deployment", description: "CI/CD automated release to production." },
  { title: "Ongoing Support", description: "Monitoring, maintenance, and future enhancements." }
];

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  const otherServices = services.filter(s => s.slug !== service.slug);

  return (
    <>
      {/* Breadcrumb & Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm font-semibold mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{service.name}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 leading-tight">
              {service.heading}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
              {service.subheading}
            </p>
            <Button asChild size="lg" className="rounded-full shadow-primary hover:-translate-y-0.5 transition-transform text-base px-8 h-14">
              <Link href="/contact">
                Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading 
              eyebrow="CAPABILITIES" 
              title="What's Included" 
              centered
              className="mb-16"
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {service.capabilities.map((cap, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} className="h-full">
                <FeatureCard 
                  index={idx + 1} 
                  title={cap.name} 
                  description={cap.description || "Comprehensive engineering and strategic implementation to drive maximum value."} 
                  className="h-full"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach & Technologies */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Approach */}
            <div>
              <FadeIn>
                <h2 className="text-3xl font-montserrat font-bold text-foreground mb-8">Our Approach</h2>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                  {approachSteps.map((step, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                      <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] bg-white p-4 rounded-xl shadow-sm border border-border/50">
                        <h4 className="font-bold text-foreground mb-1 font-montserrat text-sm">{step.title}</h4>
                        <p className="text-muted-foreground text-xs">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Technologies */}
            <div>
              <FadeIn>
                <h2 className="text-3xl font-montserrat font-bold text-foreground mb-8">Technologies</h2>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-white border border-border/50 text-foreground font-semibold px-4 py-2 rounded-full shadow-sm flex items-center gap-2 hover:border-primary hover:text-primary transition-colors cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {tech}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title={`Ready to Build Your ${service.name} Solution?`}
        subtitle="Our team brings hands-on domain experience to every engagement. Let's discuss your project."
        buttonText="Get a Free Consultation"
        buttonHref="/contact"
      />

      {/* Explore More */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl font-montserrat font-bold text-foreground mb-8">Explore Other Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {otherServices.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="text-muted-foreground hover:text-primary font-semibold transition-colors">
                  {s.name}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
