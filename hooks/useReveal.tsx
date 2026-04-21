"use client";

import { useEffect, useRef, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
};

export default function Reveal({ children }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="appear">{children}</div>;
}