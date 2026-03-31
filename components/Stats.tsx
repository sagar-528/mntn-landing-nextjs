"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 50, suffix: "+", label: "Trail Routes" },
  { num: 36,  suffix: "",  label: "Countries" },
  { num: 12,  suffix: "k", label: "Active Explorers" },
];

function useCounter(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return value;
}

function StatItem({ num, suffix, label, active }: { num: number; suffix: string; label: string; active: boolean }) {
  const count = useCounter(num, active);
  return (
    <div style={{ textAlign: "center", padding: "0 clamp(40px,6vw,100px)", flex: 1 }}>
      <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(48px,6vw,72px)", fontWeight: 700, color: "var(--clr-gold)", lineHeight: 1, marginBottom: 8 }}>
        {count}<span style={{ fontSize: "0.6em", verticalAlign: "super" }}>{suffix}</span>
      </h2>
      <p style={{ fontSize: 14, color: "var(--clr-muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setActive(true); observer.disconnect(); }
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="about" style={{ background: "var(--clr-bg-2)", borderTop: "1px solid var(--clr-border)", borderBottom: "1px solid var(--clr-border)", padding: "60px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,4vw,60px)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: 0 }}>
          {stats.flatMap((s, i) => [
            <StatItem key={s.label} {...s} active={active} />,
            i < stats.length - 1
              ? <div key={`div-${i}`} style={{ width: 1, height: 60, background: "var(--clr-border)", flexShrink: 0 }} />
              : null,
          ])}
        </div>
      </div>
    </section>
  );
}
