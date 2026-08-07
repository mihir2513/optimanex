import { IndustryCard } from "@/components/ui/IndustryCard";
import { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { industries } from "@/data/industries";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Industries We Serve | Optimanex",
  description: "Domain-Specific Expertise Across Verticals including Healthcare, FinTech, and Real Estate.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <FadeIn>
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Industries</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6">
              Domain-Specific Expertise Across Verticals
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              We understand business domains across 11 verticals and engineer solutions to real challenges. Deep domain expertise ensures our technology maps perfectly to your business context.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <FadeIn key={industry.slug} delay={idx * 0.05} className="h-full">
                <IndustryCard industry={industry} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Don't see your industry?" 
        subtitle="We've worked across many more domains. Let's discuss your project and how our engineering team can help."
        buttonText="Discuss Your Project"
        buttonHref="/contact"
      />
    </>
  );
}
