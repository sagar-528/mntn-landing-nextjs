"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#trails", label: "Trail Running" },
    { href: "#events", label: "Events" },
    { href: "#journal", label: "Journal" },
  ];

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? "14px 0" : "24px 0",
        background: scrolled ? "rgba(11,18,21,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--clr-border)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,4vw,60px)", display: "flex", alignItems: "center", gap: 40 }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 700, letterSpacing: "0.06em", color: "var(--clr-gold)" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 20H22L12 2Z" stroke="#FBF0DF" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M7 20L12 11L17 20" stroke="#FBF0DF" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
          MNTN
        </Link>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: 36, marginLeft: 24, listStyle: "none" }} className="hidden md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.7)", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clr-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginLeft: "auto" }} className="hidden md:flex">
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="5" r="3" stroke="#FBF0DF" strokeWidth="1.2"/>
              <path d="M2 14C2 11.24 4.69 9 8 9C11.31 9 14 11.24 14 14" stroke="#FBF0DF" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Login
          </a>
          <a href="#" style={{ padding: "10px 22px", border: "1.5px solid var(--clr-gold)", color: "var(--clr-gold)", borderRadius: 4, fontSize: 14, fontWeight: 600, transition: "background 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(251,240,223,0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >Get Started</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "flex", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", marginLeft: "auto", padding: 4 }}
          className="flex md:hidden"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: 22, height: 1.5, background: "var(--clr-gold)", transition: "all 0.3s",
              transform: menuOpen ? (i === 0 ? "translateY(6.5px) rotate(45deg)" : i === 2 ? "translateY(-6.5px) rotate(-45deg)" : "scaleX(0)") : "none",
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "fixed", top: 70, left: 0, right: 0, background: "rgba(11,18,21,0.97)", backdropFilter: "blur(16px)", padding: "24px clamp(20px,4vw,60px) 32px", borderBottom: "1px solid var(--clr-border)", zIndex: 999 }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "12px 0", fontSize: 16, color: "rgba(255,255,255,0.8)", borderBottom: "1px solid var(--clr-border)" }}
            >{l.label}</a>
          ))}
          <a href="#" style={{ display: "inline-block", marginTop: 20, padding: "12px 24px", border: "1.5px solid var(--clr-gold)", color: "var(--clr-gold)", borderRadius: 4, fontWeight: 600 }}>Get Started</a>
        </div>
      )}
    </nav>
  );
}
