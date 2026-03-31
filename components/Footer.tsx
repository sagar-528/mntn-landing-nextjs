"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "80px 0 40px" }}>
      <div style={{ maxWidth: 1760, margin: "0 auto", padding: "0 clamp(20px,5vw,80px)" }}>

        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "clamp(32px,6vw,120px)", marginBottom: 64, flexWrap: "wrap" }} className="footer-grid">

          {/* Brand */}
          <div>
            <Link href="/" style={{ fontFamily: "var(--font-sans)", fontSize: 32, fontWeight: 700, color: "var(--white)", letterSpacing: "0.12em", display: "block", marginBottom: 20 }}>
              MNTN
            </Link>
            <p style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", maxWidth: 320 }}>
              Get out there &amp; discover your next slope, mountain &amp; destination!
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: 16, marginTop: 28 }}>
              {[
                <svg key="ig" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>,
                <svg key="tw" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
              ].map((icon, i) => (
                <a key={i} href="#" style={{ color: "rgba(255,255,255,0.6)", transition: "color 0.25s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* More on The Blog */}
          <div>
            <h4 style={{ fontSize: 24, fontWeight: 700, color: "var(--gold)", marginBottom: 24 }}>More on The Blog</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {["About MNTN", "Contributors & Writers", "Write For Us", "Contact Us", "Privacy Policy"].map((l) => (
                <li key={l}>
                  <a href="#" style={{ fontSize: 18, fontWeight: 500, color: "rgba(255,255,255,0.75)", transition: "color 0.25s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* More on MNTN */}
          <div>
            <h4 style={{ fontSize: 24, fontWeight: 700, color: "var(--gold)", marginBottom: 24 }}>More on MNTN</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {["The Team", "Jobs", "Press"].map((l) => (
                <li key={l}>
                  <a href="#" style={{ fontSize: 18, fontWeight: 500, color: "rgba(255,255,255,0.75)", transition: "color 0.25s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 28 }}>
          <p style={{ fontSize: 18, fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>
            Copyright 2023 MNTN, Inc. Terms &amp; Privacy
          </p>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .footer-grid{ grid-template-columns:1fr!important; }
        }
      `}</style>
    </footer>
  );
}
