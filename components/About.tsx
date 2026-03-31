"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const imgMainRef  = useRef<HTMLDivElement>(null);
  const imgSecRef   = useRef<HTMLDivElement>(null);
  const badgeRef    = useRef<HTMLDivElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: { trigger: "#trails", start: "top 75%", toggleActions: "play none none none" },
    });
    tl.from(imgMainRef.current,  { x: -60, opacity: 0, duration: 0.9, ease: "power3.out" })
      .from(imgSecRef.current,   { x: -40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .from(badgeRef.current,    { scale: 0.5, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.3")
      .from(contentRef.current,  { x: 60, opacity: 0, duration: 0.9, ease: "power3.out" }, "<0.2");

    // Subtle float on images
    gsap.to(imgMainRef.current, {
      y: -12,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="trails" style={{ padding: "clamp(64px,8vw,120px) 0", background: "var(--clr-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,4vw,60px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(40px,7vw,100px)", alignItems: "center" }}>

          {/* Image stack */}
          <div style={{ position: "relative", height: 560 }}>
            <div ref={imgMainRef} style={{ position: "absolute", top: 0, left: 0, width: "75%", height: "75%", borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.5)", zIndex: 1 }}>
              <Image src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80" alt="Hiker on trail" fill style={{ objectFit: "cover" }} />
            </div>
            <div ref={imgSecRef} style={{ position: "absolute", bottom: 0, right: 0, width: "55%", height: "55%", borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.5)", zIndex: 2, border: "3px solid var(--clr-bg)" }}>
              <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80" alt="Mountain summit" fill style={{ objectFit: "cover" }} />
            </div>
            <div ref={badgeRef} style={{ position: "absolute", bottom: "20%", left: -10, zIndex: 3, background: "var(--clr-bg-2)", border: "1px solid var(--clr-border)", borderRadius: 8, padding: "14px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, boxShadow: "0 12px 32px rgba(0,0,0,0.4)" }}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M16 4L4 28H28L16 4Z" stroke="#FBF0DF" strokeWidth="1.5" strokeLinejoin="round"/></svg>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 700, color: "var(--clr-gold)", lineHeight: 1 }}>7,500<span style={{ fontSize: 16 }}>m</span></p>
              <p style={{ fontSize: 11, color: "var(--clr-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Highest Peak</p>
            </div>
          </div>

          {/* Text */}
          <div ref={contentRef} style={{ maxWidth: 480 }}>
            <p className="section-tag">A lifetime of adventure</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,64px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff", marginBottom: 20 }}>
              All the right<br />trails, right<br />at your fingertips
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--clr-text)", marginBottom: 36 }}>
              Discover thousands of meticulously curated trails across the world&apos;s most breathtaking mountain ranges. Whether you&apos;re a seasoned climber or setting foot on your first summit, MNTN has the perfect route waiting for you.
            </p>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "var(--clr-gold)", color: "var(--clr-bg)", borderRadius: 4, fontWeight: 700, fontSize: 14, transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--clr-gold)"; e.currentTarget.style.transform = "none"; }}
            >
              Get Moving
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
