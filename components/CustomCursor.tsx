"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState<boolean | null>(null);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only capability check
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isTouch !== false) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("[data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [isTouch, x, y]);

  if (isTouch !== false) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[999] hidden md:block rounded-full border border-primary mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        width: hovering ? 44 : 24,
        height: hovering ? 44 : 24,
      }}
      transition={{ type: "tween", duration: 0.2 }}
    />
  );
}
