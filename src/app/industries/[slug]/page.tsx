import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { industries } from "@/data/industries";
import { Metadata } from "next";

export function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = industries.find(i => i.slug === params.slug);
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: `${industry.name} Software Solutions | Optimanex`,
    description: industry.subheading,
  };
}

export default function IndustryDetail({ params }: { params: { slug: string } }) {
  const industry = industries.find(i => i.slug === params.slug);
  const currentIndex = industries.findIndex(i => i.slug === params.slug);
  
  if (!industry || currentIndex === -1) {
    notFound();
  }

  const prevIndustry = industries[currentIndex === 0 ? industries.length - 1 : currentIndex - 1];
  const nextIndustry = industries[currentIndex === industries.length - 1 ? 0 : currentIndex + 1];

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm font-semibold mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{industry.name}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 leading-tight">
              {industry.name} Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
              {industry.subheading}
            </p>
            <Button asChild size="lg" className="rounded-full shadow-primary hover:-translate-y-0.5 transition-transform text-base px-8 h-14">
              <Link href="/contact">
                Start a Project <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading 
              eyebrow="SOLUTIONS" 
              title="How We Help" 
              centered
              className="mb-16"
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industry.solutions.map((sol, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} className="h-full">
                <FeatureCard 
                  title={sol.title} 
                  description={sol.description || "Scalable, secure, and custom-built to address industry-specific challenges."} 
                  className="h-full"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <SectionHeading
              eyebrow="PROCESS"
              title="Our Approach"
              centered
              className="mb-16"
            />
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {(industry.approachSteps || [
                { title: "Discovery", description: "Requirement gathering and business analysis." },
                { title: "Architecture", description: "System design and technology selection." },
                { title: "Agile Development", description: "Iterative sprints with regular demos." },
                { title: "QA & Testing", description: "Automated and manual testing for quality assurance." },
                { title: "Deployment", description: "CI/CD automated release to production." },
                { title: "Ongoing Support", description: "Monitoring, maintenance, and future enhancements." }
              ]).map((step, idx) => (
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
      </section>

      <CTASection 
        title={`Ready to build in ${industry.name}?`}
        subtitle="Let's discuss your project. Our team brings hands-on domain experience to every engagement."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />

      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <FadeIn className="flex flex-col items-center md:items-start" direction="right">
            <span className="text-sm font-semibold text-muted-foreground mb-2">Previous Industry</span>
            <Link href={`/industries/${prevIndustry.slug}`} className="text-xl font-bold font-montserrat hover:text-primary transition-colors">
              {prevIndustry.name}
            </Link>
          </FadeIn>
          <FadeIn className="flex flex-col items-center md:items-end" direction="left">
            <span className="text-sm font-semibold text-muted-foreground mb-2">Next Industry</span>
            <Link href={`/industries/${nextIndustry.slug}`} className="text-xl font-bold font-montserrat hover:text-primary transition-colors">
              {nextIndustry.name}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
