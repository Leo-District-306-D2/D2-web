"use client";

import { useEffect, useRef, useState } from "react";

// Parses "1000+" -> { target: 1000, suffix: "+" }, "18" -> { target: 18, suffix: "" }.
function parse(value: string) {
  const match = value.match(/^(\D*)(\d[\d,]*)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: value };
  return {
    prefix: match[1] ?? "",
    target: parseInt(match[2].replace(/,/g, ""), 10),
    suffix: match[3] ?? "",
  };
}

export default function StatCounter({ value, className = "" }: { value: string; className?: string }) {
  const { prefix, target, suffix } = parse(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setDisplay(Math.round(eased * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
