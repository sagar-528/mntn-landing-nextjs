"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Blog", "About us", "Equipment"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? "16px 0" : "28px 0",
      background: scrolled ? "rgba(11,29,38,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: 1760, margin: "0 auto", padding: "0 clamp(20px,5vw,80px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ fontFamily: "var(--font-sans)", fontSize: 32, fontWeight: 700, color: "var(--white)", letterSpacing: "0.12em" }}>
          MNTN
        </Link>

        {/* Desktop nav */}
        <ul style={{ display: "flex", gap: 40 }} className="hidden md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href="#" style={{ fontSize: 18, fontWeight: 700, color: "var(--white)", transition: "color 0.25s", opacity: 0.85 }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--white)"; e.currentTarget.style.opacity = "0.85"; }}
              >{l}</a>
            </li>
          ))}
        </ul>

        {/* Account */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 17, fontWeight: 700, color: "var(--white)", opacity: 0.85 }} className="hidden md:flex">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          Account
        </a>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 }} className="flex md:hidden" aria-label="menu">
          {[0,1,2].map((i) => (
            <span key={i} style={{ display: "block", width: 24, height: 2, background: "var(--white)", transition: "all 0.3s",
              transform: menuOpen ? (i===0?"translateY(7px) rotate(45deg)":i===2?"translateY(-7px) rotate(-45deg)":"scaleX(0)") : "none"
            }}/>
          ))}
        </button>
      </div>

      {menuOpen && (
        <div style={{ position: "fixed", top: 70, left: 0, right: 0, background: "rgba(11,29,38,0.97)", backdropFilter: "blur(12px)", padding: "24px clamp(20px,5vw,80px) 32px", zIndex: 999 }}>
          {[...links, "Account"].map((l) => (
            <a key={l} href="#" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "14px 0", fontSize: 18, fontWeight: 700, color: "var(--white)", borderBottom: "1px solid var(--border)" }}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
