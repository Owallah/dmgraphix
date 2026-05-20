"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface KineticTextProps {
  text: string;
  className?: string;
  speed?: number;
  stagger?: number;
  enterOnly?: boolean;
}

export default function KineticText({
  text,
  className,
  speed = 0.4,
  stagger = 0.03,
  enterOnly = false,
}: KineticTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const chars = text.split("");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${speed * 40}px`, `-${speed * 40}px`],
  );

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const charVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
      rotateX: -30,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 220,
        damping: 22,
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      style={enterOnly ? undefined : { y, display: "inline-block" }}
      className={cn("inline-block will-change-transform", className)}
    >
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="inline-block"
        style={{ perspective: 800 }}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            variants={charVariant}
            className="inline-block"
            style={{ whiteSpace: char === " " ? "pre" : undefined }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </motion.span>
  );
}
