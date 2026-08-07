"use client";

import { useMemo } from "react";
import { Cpu, Server, Database, Cloud, Code, Terminal, Layers, Activity, Smartphone, Box, Shield, Globe, Hexagon, Zap, Link, Wifi, Monitor, HardDrive } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const COLORS = [
  "text-[#F05941]", // coral
  "text-[#3C71DD]", // blue
  "text-[#2BAB92]", // teal
  "text-[#8C47D1]", // purple
  "text-[#F39716]", // orange
  "text-[#2597D0]", // light blue
];

const ICONS = [Cpu, Server, Database, Cloud, Code, Terminal, Layers, Activity, Smartphone, Box, Shield, Globe, Hexagon, Zap, Link, Wifi, Monitor, HardDrive];

const generateRingIcons = (count: number, ringIndex: number) => {
  return Array.from({ length: count }).map((_, i) => {
    const angle = (i * 360) / count;
    const Icon = ICONS[(ringIndex * 10 + i) % ICONS.length];
    const color = COLORS[(ringIndex * 7 + i) % COLORS.length];
    return { angle, Icon, color };
  });
};

export function TechOrbit() {
  const rings = useMemo(() => [
    { radius: 85, duration: 25, direction: 'forward', icons: generateRingIcons(4, 1) },
    { radius: 130, duration: 35, direction: 'reverse', icons: generateRingIcons(6, 2) },
    { radius: 170, duration: 45, direction: 'forward', icons: generateRingIcons(8, 3) },
    { radius: 210, duration: 55, direction: 'reverse', icons: generateRingIcons(10, 4) },
  ], []);

  return (
    <div className="relative select-none shrink-0 mx-auto" style={{ width: 500, height: 500 }}>
      {/* Center Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="rounded-full bg-white flex items-center justify-center relative shadow-2xl" style={{ width: 105, height: 105, boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 40px -8px, rgb(240, 240, 240) 0px 0px 0px 3px, white 0px 0px 0px 6px" }}>
          <Logo className="w-12 h-12 text-[#1c2b4c]" />
        </div>
      </div>

      {rings.map((ring, rIdx) => {
        const ringSize = ring.radius * 2;
        const animationClass = ring.direction === 'forward' ? 'animate-spin-forward' : 'animate-spin-reverse';
        const counterAnimationClass = ring.direction === 'forward' ? 'animate-counter-spin-forward' : 'animate-counter-spin-reverse';
        
        return (
          <div 
            key={rIdx}
            className={`absolute left-1/2 top-1/2 ${animationClass}`}
            style={{ width: ringSize, height: ringSize, animationDuration: `${ring.duration}s` }}
          >
            {/* Dashed Border */}
            <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 pointer-events-none" />
            
            {ring.icons.map((item, i) => {
              // Convert polar to cartesian
              const rad = (item.angle * Math.PI) / 180;
              const x = Math.cos(rad) * ring.radius;
              const y = Math.sin(rad) * ring.radius;

              return (
                <div 
                  key={i}
                  className="absolute group cursor-default"
                  style={{ 
                    left: `calc(50% + ${x}px)`, 
                    top: `calc(50% + ${y}px)`, 
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div 
                    className={`rounded-full bg-white flex flex-col items-center justify-center group-hover:scale-110 group-hover:shadow-elevated transition-all duration-200 border-2 border-slate-100 ${counterAnimationClass}`}
                    style={{ width: 42, height: 42, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 12px -2px', animationDuration: `${ring.duration}s` }}
                  >
                    <item.Icon className={`w-[18px] h-[18px] ${item.color}`} strokeWidth={2.5} />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
