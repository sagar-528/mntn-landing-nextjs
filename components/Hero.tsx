"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const tagRef    = useRef<HTMLParagraphElement>(null);
  const titleRef  = useRef<HTMLHeadingElement>(null);
  const subRef    = useRef<HTMLParagraphElement>(null);
  const btnRef    = useRef<HTMLAnchorElement>(null);
  const bgRef     = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Entrance timeline
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from(tagRef.current,   { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" })
      .from(titleRef.current, { y: 50, opacity: 0, duration: 0.9, ease: "power3.out" }, "-=0.4")
      .from(subRef.current,   { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.5")
      .from(btnRef.current,   { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .from([socialRef.current, scrollRef.current], { opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.2");

    // Parallax on scroll
    gsap.to(bgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 700, display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* BG */}
      <div ref={bgRef} style={{ position: "absolute", inset: 0, willChange: "transform" }}>
        <Image src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80" alt="Mountain landscape" fill priority style={{ objectFit: "cover", objectPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg,rgba(11,18,21,0.88) 0%,rgba(11,18,21,0.5) 50%,rgba(11,18,21,0.15) 100%)" }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, padding: "0 clamp(20px,4vw,60px)", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <p ref={tagRef} className="section-tag" style={{ marginBottom: 20 }}>#MadeToExplore</p>
        <h1 ref={titleRef} style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(56px,9vw,120px)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#fff", marginBottom: 28, maxWidth: 700 }}>
          Conquer<br />Your Peaks
        </h1>
        <p ref={subRef} style={{ fontSize: "clamp(14px,1.5vw,17px)", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", maxWidth: 420, marginBottom: 44 }}>
          Turn your next hiking adventure into an unforgettable experience with expert guides and curated trails worldwide.
        </p>
        <a ref={btnRef} href="#trails"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "var(--clr-gold)", color: "var(--clr-bg)", borderRadius: 4, fontWeight: 700, fontSize: 14, transition: "all 0.3s" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--clr-gold)"; e.currentTarget.style.transform = "none"; }}
        >
          Get Moving
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} style={{ position: "absolute", bottom: 40, left: "clamp(20px,4vw,60px)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <span style={{ display: "block", width: 1, height: 48, background: "linear-gradient(to bottom,var(--clr-gold-dim),transparent)", animation: "pulse 2s ease-in-out infinite" }} />
        <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--clr-gold-dim)", writingMode: "vertical-rl" }}>Scroll down</p>
      </div>

      {/* Social */}
      <div ref={socialRef} style={{ position: "absolute", right: "clamp(20px,3vw,48px)", top: "50%", transform: "translateY(-50%)", zIndex: 2, display: "flex", flexDirection: "column", gap: 20 }} className="hidden md:flex">
        {[
          <svg key="ig" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>,
          <svg key="x" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
        ].map((icon, i) => (
          <a key={i} href="#" style={{ color: "rgba(255,255,255,0.5)", transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clr-gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >{icon}</a>
        ))}
      </div>

      <style>{`@keyframes pulse{0%,100%{opacity:0.4}50%{opacity:1}}`}</style>
    </section>
  );
}
