import { cn } from "@/lib/utils";

interface FeatureCardProps {
  index?: string | number;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ index, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn("bg-white rounded-xl p-6 md:p-8 shadow-card border border-border/50 hover:shadow-elevated transition-shadow duration-300 relative overflow-hidden group", className)}>
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      {index !== undefined && (
        <span className="inline-block text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full mb-4">
          {String(index).padStart(2, '0')}
        </span>
      )}
      <h3 className="text-xl font-bold font-montserrat text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
