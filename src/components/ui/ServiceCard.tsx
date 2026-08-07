"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: Service;
  index?: number;
  className?: string;
}

export function ServiceCard({ service, index, className }: ServiceCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link 
      href={`/services/${service.slug}`}
      onMouseMove={handleMouseMove}
      className={cn(
        "group block bg-white dark:bg-card rounded-[2rem] p-8 md:p-10 shadow-soft border border-border/50 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 relative overflow-hidden",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 173, 239, 0.1), transparent 40%)`,
        }}
      />
      
      {/* Hover accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {index !== undefined && (
          <span className="text-primary font-bold text-sm bg-primary/10 px-4 py-1.5 rounded-full mb-8 w-fit inline-block border border-primary/10">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
        
        <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {service.name}
        </h3>
        
        <p className="text-muted-foreground text-base mb-8 line-clamp-3 md:line-clamp-4 flex-grow">
          {service.subheading}
        </p>
        
        <div className="flex items-center text-primary font-bold text-base mt-auto">
          Explore Service 
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}
