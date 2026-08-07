import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

export function CTASection({ title, subtitle, buttonText, buttonHref }: CTASectionProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-secondary">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Button asChild size="lg" className="rounded-full shadow-primary hover:-translate-y-0.5 transition-transform text-base px-8 h-14">
          <Link href={buttonHref}>
            {buttonText} <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
