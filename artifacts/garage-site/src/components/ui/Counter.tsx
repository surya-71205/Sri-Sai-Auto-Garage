import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function Counter({ target, suffix = "", label, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center p-6 bg-surface-elevated/20 rounded-2xl border border-white/5 backdrop-blur-sm">
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 flex items-center font-heading">
        {count}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{label}</p>
    </div>
  );
}