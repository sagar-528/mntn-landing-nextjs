"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  number: "01" | "02" | "03";
  tagline: string;
  heading: string;
  body: string;
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean;
}

export default function ContentSection({ number, tagline, heading, body, imgSrc, imgAlt, reverse = false }: Props) {
  const sectionRef  = useRef<HTMLElement>(null);
  const numRef      = useRef<HTMLDivElement>(null);
  const imgRef      = useRef<HTMLDivElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none none" },
    });

    tl.from(numRef.current, { opacity: 0, scale: 0.85, duration: 1.0, ease: "power3.out" })
      .from(imgRef.current,  { x: reverse ? 60 : -60, opacity: 0, duration: 0.9, ease: "power3.out" }, "-=0.6")
      .from(contentRef.current, { x: reverse ? -60 : 60, opacity: 0, duration: 0.9, ease: "power3.out" }, "<0.1");

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [reverse]);

  const imgSide = (
    <div ref={imgRef} style={{ flex: "0 0 auto", width: "clamp(300px,38%,566px)", height: "clamp(380px,50vw,720px)", borderRadius: 4, overflow: "hidden", position: "relative" }}>
      <Image src={imgSrc} alt={imgAlt} fill style={{ objectFit: "cover" }} />
    </div>
  );

  const textSide = (
    <div ref={contentRef} style={{ flex: 1, maxWidth: 632, paddingTop: 24 }}>
      <div className="tag-line" style={{ marginBottom: 24 }}>{tagline}</div>
      <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,4.5vw,64px)", fontWeight: 600, lineHeight: 1.2, color: "var(--white)", marginBottom: 28, letterSpacing: "-0.01em" }}>
        {heading}
      </h2>
      <p style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.75, color: "rgba(255,255,255,0.7)", marginBottom: 32, maxWidth: 580 }}>
        {body}
      </p>
      <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 18, fontWeight: 700, color: "var(--gold)", transition: "gap 0.3s" }}
        onMouseEnter={(e) => { e.currentTarget.style.gap = "16px"; }}
        onMouseLeave={(e) => { e.currentTarget.style.gap = "10px"; }}
      >
        read more
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  );

  return (
    <section ref={sectionRef} style={{ position: "relative", padding: "clamp(60px,8vw,120px) 0", overflow: "hidden" }}>
      {/* Large background number */}
      <div ref={numRef} style={{
        position: "absolute",
        top: "50%", transform: "translateY(-50%)",
        [reverse ? "right" : "left"]: "clamp(20px,5vw,80px)",
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(160px,18vw,240px)",
        fontWeight: 700,
        color: "rgba(255,255,255,0.04)",
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
        zIndex: 0,
      }}>
        {number}
      </div>

      <div style={{ maxWidth: 1760, margin: "0 auto", padding: "0 clamp(20px,5vw,80px)", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", gap: "clamp(32px,5vw,80px)", alignItems: "center", flexWrap: "wrap", flexDirection: reverse ? "row-reverse" : "row" }}>
          {imgSide}
          {textSide}
        </div>
      </div>
    </section>
  );
}
