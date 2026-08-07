"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";

const CATEGORIES = ["All", "Web", "App", "AI"];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? portfolioData
    : portfolioData.filter(item => item.tag === activeCategory);

  return (
    <section className="py-24 bg-white relative border-t border-border">
      <div className="container mx-auto px-4">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <SectionHeading
            eyebrow="OUR WORK"
            title="Featured Portfolio"
            subtitle="Explore some of our latest projects across web, mobile, and AI."
          />

          <div className="flex flex-wrap gap-2 bg-muted/50 p-1.5 rounded-full border border-border/50">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-black/5"
                )}
              >
                {cat === "AI" ? "AI Generation" : cat === "App" ? "Application" : cat === "Web" ? "Web Dev" : "All Projects"}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <FadeIn key={item.slug} delay={idx * 0.1}>
              <Link href={`/portfolio/${item.slug}`} className="group block relative rounded-[2rem] overflow-hidden bg-muted aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Image (Using standard img tag to allow external unsplash URLs without Next.js config errors) */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00346B]/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[#00adef] font-bold text-sm mb-3 tracking-wide uppercase">{item.category}</div>
                  <h3 className="text-white font-montserrat font-bold text-2xl mb-4 leading-tight">{item.title}</h3>

                  {/* Hover Button */}
                  <div className="flex items-center gap-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    View Project <ArrowUpRight className="w-5 h-5 ml-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
