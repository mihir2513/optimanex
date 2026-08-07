import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
  light = false
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4", centered ? "items-center text-center" : "items-start text-left", className)}>
      {eyebrow && (
        <span className="text-primary font-bold uppercase tracking-wider text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold", light ? "text-white" : "text-foreground")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg max-w-2xl", light ? "text-white/80" : "text-muted-foreground")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
