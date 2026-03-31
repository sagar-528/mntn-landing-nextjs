"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const posts = [
  { img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", tag: "Trail Running", large: true,  title: "10 Essential Tips for Your First High-Altitude Trek",         excerpt: "Preparing for altitude is more than just fitness training — your body needs time to adjust and your gear needs to be dialed in. Here's what the experts say...", author: "Sarah K.", date: "March 15, 2026", avatar: "https://i.pravatar.cc/40?img=11" },
  { img: "https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?w=400&q=80", tag: "Gear",          large: false, title: "Best Lightweight Tents for Alpine Expeditions 2026",           author: "Mike D.",  date: "Feb 28, 2026",   avatar: "https://i.pravatar.cc/40?img=32" },
  { img: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=400&q=80", tag: "Adventure",     large: false, title: "How We Completed the Tour du Mont Blanc in 7 Days",           author: "Elena R.", date: "Jan 20, 2026",   avatar: "https://i.pravatar.cc/40?img=5"  },
];

export default function Journal() {
  const sectionRef = useRef<HTMLElement>(null);
  const [large, ...small] = posts;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".journal-card", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none none" },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} id="journal" style={{ padding: "clamp(64px,8vw,120px) 0", background: "var(--clr-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,4vw,60px)" }}>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 52, flexWrap: "wrap" }}>
          <div>
            <p className="section-tag">The MNTN Journal</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,56px)", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.1 }}>Stories from the trail</h2>
          </div>
          <a href="#" style={{ padding: "10px 20px", border: "1.5px solid var(--clr-gold)", color: "var(--clr-gold)", borderRadius: 4, fontSize: 13, fontWeight: 600 }}>Read All Posts</a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          {/* Large */}
          <article className="journal-card" style={{ background: "var(--clr-bg-card)", borderRadius: 16, overflow: "hidden", border: "1px solid var(--clr-border)", transition: "transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            <div style={{ position: "relative", height: 260, overflow: "hidden" }}>
              <Image src={large.img} alt={large.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: "20px 24px 24px" }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--clr-gold-dim)", marginBottom: 10, padding: "3px 10px", border: "1px solid rgba(196,168,130,0.3)", borderRadius: 20 }}>{large.tag}</span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(16px,1.8vw,21px)", fontWeight: 700, color: "#fff", lineHeight: 1.35, marginBottom: 12 }}>{large.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--clr-text)", marginBottom: 20, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{large.excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "1.5px solid var(--clr-border)", position: "relative" }}>
                  <Image src={large.avatar} alt={large.author} fill style={{ objectFit: "cover" }} />
                </div>
                <div><p style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{large.author}</p><p style={{ fontSize: 12, color: "var(--clr-muted)" }}>{large.date}</p></div>
              </div>
            </div>
          </article>

          {/* Small stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {small.map((p) => (
              <article key={p.title} className="journal-card" style={{ background: "var(--clr-bg-card)", borderRadius: 16, overflow: "hidden", border: "1px solid var(--clr-border)", display: "flex", transition: "transform 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                <div style={{ position: "relative", width: 160, flexShrink: 0 }}>
                  <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--clr-gold-dim)", marginBottom: 8, padding: "3px 10px", border: "1px solid rgba(196,168,130,0.3)", borderRadius: 20, width: "fit-content" }}>{p.tag}</span>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 17, fontWeight: 700, color: "#fff", lineHeight: 1.35, marginBottom: 12 }}>{p.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                      <Image src={p.avatar} alt={p.author} fill style={{ objectFit: "cover" }} />
                    </div>
                    <div><p style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>{p.author}</p><p style={{ fontSize: 11, color: "var(--clr-muted)" }}>{p.date}</p></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
