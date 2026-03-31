"use client";
import Image from "next/image";

export default function CTA() {
  return (
    <section style={{ position: "relative", padding: "clamp(64px,8vw,120px) 0", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Image src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80" alt="Mountain vista" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(11,18,21,0.92) 0%, rgba(11,18,21,0.7) 60%, rgba(11,18,21,0.4) 100%)" }} />
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,4vw,60px)", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 580, padding: "clamp(40px,6vw,80px) 0" }}>
          <p className="section-tag">Start your journey</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,60px)", fontWeight: 700, lineHeight: 1.15, color: "#fff", marginBottom: 20 }}>
            The mountain is calling.<br />Will you answer?
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.7)", marginBottom: 40 }}>
            Join thousands of explorers who have already discovered the thrill of summit achievement. Your first trail is just one click away.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", padding: "18px 36px", background: "var(--clr-gold)", color: "var(--clr-bg)", borderRadius: 4, fontWeight: 700, fontSize: 15, transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--clr-gold)"; e.currentTarget.style.transform = "none"; }}
            >Get Started — It&apos;s Free</a>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", padding: "18px 36px", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: 4, fontSize: 15, transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.background = "transparent"; }}
            >Watch Our Story</a>
          </div>
        </div>
      </div>
    </section>
  );
}
