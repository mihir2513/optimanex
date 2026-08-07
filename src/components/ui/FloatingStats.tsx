"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export function FloatingStats() {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-square lg:max-w-[500px]">
      {/* The main image block replacing the solid gradient */}
      <div className="absolute inset-0 rounded-[2.5rem] shadow-xl overflow-hidden">
        <Image
          src="/mover.png"
          alt="Our Team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
      </div>

      {/* Floating stat card 1 */}
      <motion.div
        className="absolute -top-4 -right-4 md:-right-10 bg-[rgb(0_0_0_/_34%)] backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-2xl w-48 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <div className="text-4xl font-black font-montserrat text-white mb-1">15+</div>
        <div className="text-sm font-semibold text-white/90">Projects Delivered</div>
      </motion.div>

      {/* Floating stat card 2 */}
      <motion.div
        className="absolute -bottom-4 -left-4 md:-left-10 bg-[rgb(0_0_0_/_34%)] backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-2xl w-48 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
      >
        <div className="text-4xl font-black font-montserrat text-white mb-1">4+</div>
        <div className="text-sm font-semibold text-white/90">Years Experience</div>
      </motion.div>
    </div>
  );
}
