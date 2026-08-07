"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function StatCounter({ value, suffix = "", prefix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Intl.NumberFormat("en-US").format(Math.floor(latest))}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-card border border-border/50 text-center">
      <div className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-2 flex items-center justify-center">
        <span ref={ref}>{prefix}0{suffix}</span>
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
}
