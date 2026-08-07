"use client";

import { useMemo } from "react";
import { Logo } from "@/components/ui/Logo";
import {
  SiFlutter,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
import { IconType } from "react-icons";

const COLORS = [
  "text-[#F05941]",
  "text-[#3C71DD]",
  "text-[#2BAB92]",
  "text-[#8C47D1]",
  "text-[#F39716]",
  "text-[#2597D0]",
];

const ICONS: IconType[] = [
  SiFlutter,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFirebase,
  SiTailwindcss,
];

const generateRingIcons = (count: number, ringIndex: number) => {
  return Array.from({ length: count }).map((_, i) => {
    const angle = (i * 360) / count;
    const Icon = ICONS[(ringIndex * 10 + i) % ICONS.length];
    const color = COLORS[(ringIndex * 7 + i) % COLORS.length];

    return {
      angle,
      Icon,
      color,
    };
  });
};

export function TechOrbit() {
  const rings = useMemo(
    () => [
      {
        radius: 85,
        duration: 25,
        direction: "forward",
        icons: generateRingIcons(4, 1),
      },
      {
        radius: 130,
        duration: 35,
        direction: "reverse",
        icons: generateRingIcons(6, 2),
      },
      {
        radius: 170,
        duration: 45,
        direction: "forward",
        icons: generateRingIcons(8, 3),
      },
      {
        radius: 210,
        duration: 55,
        direction: "reverse",
        icons: generateRingIcons(10, 4),
      },
    ],
    []
  );

  return (
    <div
      className="relative mx-auto shrink-0 select-none"
      style={{ width: 500, height: 500 }}
    >
      {/* Center Logo */}
      <div
        className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white"
        style={{
          width: 105,
          height: 105,
          boxShadow:
            "rgba(0,0,0,.2) 0px 10px 40px -8px, rgb(240,240,240) 0px 0px 0px 3px, white 0px 0px 0px 6px",
        }}
      >
        <Logo className="w-12 h-12" />
      </div>

      {rings.map((ring, rIdx) => {
        const ringSize = ring.radius * 2;

        const animationClass =
          ring.direction === "forward"
            ? "animate-spin-forward"
            : "animate-spin-reverse";

        const counterAnimationClass =
          ring.direction === "forward"
            ? "animate-counter-spin-forward"
            : "animate-counter-spin-reverse";

        return (
          <div
            key={rIdx}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${animationClass}`}
            style={{
              width: ringSize,
              height: ringSize,
              animationDuration: `${ring.duration}s`,
            }}
          >
            {/* Ring Border */}
            <div className="absolute inset-0 rounded-full border border-dashed border-primary/20" />

            {ring.icons.map((item, i) => {
              const rad = (item.angle * Math.PI) / 180;

              const x = Math.cos(rad) * ring.radius;
              const y = Math.sin(rad) * ring.radius;

              const Icon = item.Icon;

              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className={`group flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-slate-100 bg-white transition-all duration-200 hover:scale-110 ${counterAnimationClass}`}
                    style={{
                      boxShadow: "rgba(0,0,0,.1) 0px 2px 12px -2px",
                      animationDuration: `${ring.duration}s`,
                    }}
                  >
                    <Icon className={`h-5 w-5 ${item.color}`} />
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