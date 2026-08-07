import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { portfolioData } from "@/data/portfolio";
import type { Metadata } from "next";

interface PortfolioDetailProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return portfolioData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PortfolioDetailProps): Promise<Metadata> {
  const item = portfolioData.find((p) => p.slug === params.slug);
  if (!item) return { title: "Project Not Found" };
  
  return {
    title: `${item.title} | Optimanex Portfolio`,
    description: item.description,
  };
}

export default function PortfolioDetail({ params }: PortfolioDetailProps) {
  const item = portfolioData.find((p) => p.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      {/* Hero Header with Image */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={item.thumbnail} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-black/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <FadeIn>
            <Button asChild variant="link" className="text-primary hover:text-primary/80 px-0 mb-6 font-semibold">
              <Link href="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
            </Button>
            
            <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              {item.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-foreground mb-6 leading-tight">
              {item.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {item.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <FadeIn>
                <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">The Challenge</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p>{item.challenge}</p>
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Our Solution</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p>{item.solution}</p>
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Key Results</h2>
                <ul className="space-y-4">
                  {item.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-4 bg-muted/50 p-4 rounded-2xl border border-border/50">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-lg font-medium text-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* Sidebar Metadata */}
            <div className="lg:col-span-1">
              <FadeIn className="bg-muted rounded-[2rem] p-8 sticky top-32 border border-border">
                <h3 className="text-xl font-bold font-montserrat text-foreground mb-8">Project Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <span className="text-sm text-muted-foreground font-medium block mb-1">Client</span>
                    <strong className="text-foreground text-lg">{item.client}</strong>
                  </div>
                  
                  <div>
                    <span className="text-sm text-muted-foreground font-medium block mb-1">Timeline</span>
                    <strong className="text-foreground text-lg">{item.timeline}</strong>
                  </div>
                  
                  <div>
                    <span className="text-sm text-muted-foreground font-medium block mb-1">Technologies</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.techStack.map((tech, idx) => (
                        <span key={idx} className="bg-background text-foreground text-sm font-semibold px-3 py-1.5 rounded-full border border-border/50 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-12 text-center">Project Gallery</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {item.gallery.map((img, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow aspect-video bg-muted relative">
                  <img src={img} alt={`${item.title} screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Inspired by this project?"
        subtitle="Let's build something extraordinary together. Contact our team to discuss your next big idea."
        buttonText="Start Your Project"
        buttonHref="/contact"
      />
    </>
  );
}
