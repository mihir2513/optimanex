import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Industry } from "@/data/industries";

interface IndustryCardProps {
  industry: Industry;
}

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <Link 
      href={`/industries/${industry.slug}`}
      className="group flex flex-col justify-between bg-white rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 h-full"
    >
      <div>
        <h3 className="text-lg font-bold font-montserrat text-foreground mb-2 group-hover:text-primary transition-colors">
          {industry.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          {industry.tagline}
        </p>
      </div>
      
      <div className="flex items-center text-primary font-semibold text-sm mt-auto">
        Learn More 
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
