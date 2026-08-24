"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
};

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
  onClick,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.3, y: relY * 0.3 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const styles =
    variant === "primary"
      ? "bg-primary text-ink hover:bg-fg"
      : "border border-line text-fg hover:border-primary";

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      data-cursor-hover
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={clsx(
        "focus-ring inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm tracking-wide transition-colors",
        styles,
        className
      )}
    >
      {children}
    </motion.a>
  );
}
