"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const slides = ["01", "02", "03"];

export default function Hero() {
  const tagRef      = useRef<HTMLDivElement>(null);
  const headingRef  = useRef<HTMLHeadingElement>(null);
  const scrollRef   = useRef<HTMLDivElement>(null);
  const socialRef   = useRef<HTMLDivElement>(null);
  const sliderRef   = useRef<HTMLDivElement>(null);
  const bgRef       = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ delay: 0.3 });
    tl.from(tagRef.current,     { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" })
      .from(headingRef.current, { y: 60, opacity: 0, duration: 1.0, ease: "power3.out" }, "-=0.4")
      .from(scrollRef.current,  { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .from([socialRef.current, sliderRef.current], { opacity: 0, duration: 0.8 }, "-=0.3");

    // BG parallax
    gsap.to(bgRef.current, {
      yPercent: 25,
      ease: "none",
      scrollTrigger: { trigger: "body", start: "top top", end: "30% top", scrub: true },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 700, display: "flex", alignItems: "center", overflow: "hidden" }}>

      {/* Background */}
      <div ref={bgRef} style={{ position: "absolute", inset: 0, willChange: "transform" }}>
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
          alt="Mountain"
          fill priority
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        {/* Dark gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(11,29,38,0.85) 0%, rgba(11,29,38,0.4) 60%, rgba(11,29,38,0.15) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,29,38,0.9) 0%, transparent 40%)" }} />
      </div>

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1760, width: "100%", margin: "0 auto", padding: "0 clamp(20px,5vw,80px)", paddingTop: 100 }}>

        {/* Tag */}
        <div ref={tagRef} className="tag-line" style={{ marginBottom: 24 }}>
          A Hiking guide
        </div>

        {/* Hero headline */}
        <h1 ref={headingRef} style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(42px, 6.5vw, 88px)",
          fontWeight: 600,
          lineHeight: 1.1,
          color: "var(--white)",
          maxWidth: 820,
          marginBottom: 48,
          letterSpacing: "-0.01em",
        }}>
          Be prepared for<br />the Mountains<br />and beyond!
        </h1>

        {/* Scroll down */}
        <div ref={scrollRef} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span style={{ display: "block", width: 1, height: 48, background: "linear-gradient(to bottom, var(--white), transparent)", animation: "scrollLine 2s ease-in-out infinite" }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, color: "var(--white)", letterSpacing: "0.04em" }}>scroll down</span>
        </div>
      </div>

      {/* Follow us – vertical left side */}
      <div ref={socialRef} style={{ position: "absolute", left: "clamp(20px,3vw,48px)", bottom: 80, zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Instagram */}
          <a href="#" style={{ color: "var(--white)", opacity: 0.75, transition: "opacity 0.25s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
            </svg>
          </a>
          {/* Twitter */}
          <a href="#" style={{ color: "var(--white)", opacity: 0.75, transition: "opacity 0.25s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
        {/* "Follow us" rotated */}
        <p style={{ fontSize: 18, fontWeight: 700, color: "var(--white)", writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.06em", marginTop: 8, opacity: 0.85 }}>Follow us</p>
      </div>

      {/* Slide indicator – right side */}
      <div ref={sliderRef} style={{ position: "absolute", right: "clamp(20px,3vw,60px)", top: "50%", transform: "translateY(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        {/* Vertical line with indicator */}
        <div style={{ position: "relative", width: 3, height: 240, background: "rgba(255,255,255,0.2)", borderRadius: 3, overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "33%", background: "var(--white)", borderRadius: 3, animation: "slideDown 3s ease-in-out infinite" }} />
        </div>
        {/* Numbers */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
          {slides.map((n, i) => (
            <span key={n} style={{ fontSize: 18, fontWeight: 700, color: i === 0 ? "var(--white)" : "rgba(255,255,255,0.4)", transition: "color 0.3s" }}>{n}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollLine { 0%,100%{opacity:0.4;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.1)} }
        @keyframes slideDown { 0%{top:0} 50%{top:33%} 100%{top:66%} }
      `}</style>
    </section>
  );
}
