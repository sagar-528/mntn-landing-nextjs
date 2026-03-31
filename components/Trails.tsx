"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const trails = [
  { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80", difficulty: "Easy",     diffColor: "#4CAF7D", duration: "3–4 hrs", elevation: "1,200m", distance: "12 km",  name: "Valley of the Giants",   location: "Yosemite, California" },
  { img: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=600&q=80", difficulty: "Hard",     diffColor: "#E05252", duration: "8–10 hrs", elevation: "4,800m", distance: "28 km", name: "Alpine Summit Circuit",   location: "Zermatt, Switzerland", featured: true },
  { img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&q=80", difficulty: "Moderate", diffColor: "#F5A623", duration: "5–6 hrs", elevation: "2,600m", distance: "18 km",  name: "Forest Ridge Loop",       location: "Banff, Canada" },
];

export default function Trails() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef   = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(cardsRef.current, {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none none" },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} id="events" style={{ padding: "clamp(64px,8vw,120px) 0", background: "var(--clr-bg-2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,4vw,60px)" }}>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 52, flexWrap: "wrap" }}>
          <div>
            <p className="section-tag">Choose your path</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,56px)", fontWeight: 700, lineHeight: 1.1, color: "#fff", margin: 0 }}>Featured Trails</h2>
          </div>
          <a href="#" style={{ padding: "10px 20px", border: "1.5px solid var(--clr-gold)", color: "var(--clr-gold)", borderRadius: 4, fontSize: 13, fontWeight: 600, transition: "background 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(251,240,223,0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >See All Trails</a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
          {trails.map((t, i) => (
            <article key={t.name}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              style={{ background: "var(--clr-bg-card)", borderRadius: 16, overflow: "hidden", border: t.featured ? "1px solid rgba(251,240,223,0.25)" : "1px solid var(--clr-border)", transition: "transform 0.3s, box-shadow 0.3s", cursor: "pointer" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 24px 48px rgba(0,0,0,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                <Image src={t.img} alt={t.name} fill style={{ objectFit: "cover", transition: "transform 0.6s" }} />
                <span style={{ position: "absolute", top: 14, right: 14, padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, textTransform: "uppercase", background: t.diffColor, color: "#fff" }}>{t.difficulty}</span>
              </div>
              <div style={{ padding: "20px 24px 24px" }}>
                <div style={{ display: "flex", gap: 16, marginBottom: 14, flexWrap: "wrap" }}>
                  {[t.duration, t.elevation, t.distance].map((m) => (
                    <span key={m} style={{ fontSize: 12, color: "var(--clr-muted)" }}>{m}</span>
                  ))}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 10, lineHeight: 1.2 }}>{t.name}</h3>
                <p style={{ fontSize: 13, color: "var(--clr-muted)", display: "flex", alignItems: "center", gap: 5 }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1C4.067 1 2.5 2.567 2.5 4.5C2.5 7.5 6 11 6 11C6 11 9.5 7.5 9.5 4.5C9.5 2.567 7.933 1 6 1Z" stroke="#6B7D8A" strokeWidth="1.1"/><circle cx="6" cy="4.5" r="1.25" stroke="#6B7D8A" strokeWidth="1.1"/></svg>
                  {t.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
