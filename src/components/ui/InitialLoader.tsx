"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if the user has already visited in this session
    const visited = sessionStorage.getItem("hasVisited");
    if (visited) {
      setHasVisited(true);
      setIsLoading(false);
      return;
    }

    // Set visited for future navigations
    sessionStorage.setItem("hasVisited", "true");

    // Give it 2.5 seconds for the cinematic entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (hasVisited) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a122d]"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: "-100%", // Slide up to reveal
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div className="relative w-32 h-32">
            {/* Left Half (Cyan) */}
            <motion.div
              className="absolute inset-0"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="loader-left">
                    <rect x="-50" y="50" width="200" height="150" transform="rotate(35 50 50)" />
                  </clipPath>
                </defs>
                <circle cx="50" cy="50" r="46" fill="#1e293b" />
                <circle cx="50" cy="50" r="28" fill="#00adef" clipPath="url(#loader-left)" />
              </svg>
            </motion.div>

            {/* Right Half (Blue) */}
            <motion.div
              className="absolute inset-0"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="loader-right">
                    <rect x="-50" y="-100" width="200" height="150" transform="rotate(35 50 50)" />
                  </clipPath>
                </defs>
                <circle cx="50" cy="50" r="28" fill="#005fc8" clipPath="url(#loader-right)" />
              </svg>
            </motion.div>

            {/* Mask cut line overlay to perfect the gap */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-20" y="44" width="140" height="12" transform="rotate(35 50 50)" fill="#0a122d" />
              </svg>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute mt-48 text-white font-montserrat font-bold text-2xl tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            OPTIMANEX
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
