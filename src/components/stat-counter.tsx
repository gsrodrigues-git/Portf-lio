"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import type { Stat } from "@/types";

export function StatCounter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1200;
    const start = performance.now();
    let frameId = 0;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(stat.value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [inView, stat.value]);

  return (
    <div className="rounded-[1.5rem] border border-border/60 bg-card/80 p-5 shadow-premium">
      <span
        ref={ref}
        className="block text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        {value}
        {stat.suffix ?? "+"}
      </span>
      <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
    </div>
  );
}
