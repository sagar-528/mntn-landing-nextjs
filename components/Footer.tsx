"use client";
import Link from "next/link";

const explore = ["Trail Running", "Summit Hiking", "Mountain Biking", "Camping", "Rock Climbing"];
const company = ["About Us", "Our Team", "Careers", "Press Kit", "Contact"];
const resources = ["Journal", "Trail Maps", "Gear Guide", "Safety Tips", "Community"];

export default function Footer() {
  return (
    <footer style={{ background: "var(--clr-bg-2)", borderTop: "1px solid var(--clr-border)", padding: "clamp(48px,7vw,96px) 0 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,4vw,60px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "clamp(24px,4vw,64px)", marginBottom: 60 }} className="footer-grid">

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 700, letterSpacing: "0.06em", color: "var(--clr-gold)", marginBottom: 18 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 20H22L12 2Z" stroke="#FBF0DF" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M7 20L12 11L17 20" stroke="#FBF0DF" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              MNTN
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--clr-muted)", maxWidth: 280, marginBottom: 24 }}>
              Get out there &amp; explore the best nature has to offer. Push your limits. Live your adventure.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              {["instagram", "twitter", "youtube"].map((s) => (
                <a key={s} href="#" style={{ color: "var(--clr-muted)", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clr-gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--clr-muted)")}
                  aria-label={s}
                >
                  {s === "instagram" && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>}
                  {s === "twitter" && <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
                  {s === "youtube" && <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.4 2.8 12 2.8 12 2.8s-4.4 0-6.8.2c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.2.7 11.5v2.1c0 2.3.3 4.5.3 4.5s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.5 22.2 12 22.2 12 22.2s4.4 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.2.3-4.5v-2.1C23.3 9.2 23 7 23 7zM9.7 15.5V8.3l8.1 3.6-8.1 3.6z"/></svg>}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[["Explore", explore], ["Company", company], ["Resources", resources]].map(([heading, links]) => (
            <div key={heading as string}>
              <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", marginBottom: 20 }}>{heading}</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {(links as string[]).map((l) => (
                  <li key={l}>
                    <a href="#" style={{ fontSize: 14, color: "var(--clr-muted)", transition: "color 0.3s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clr-gold)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--clr-muted)")}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--clr-border)", padding: "24px 0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13, color: "var(--clr-muted)" }}>&copy; 2026 MNTN. All rights reserved.</p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((l) => (
              <a key={l} href="#" style={{ fontSize: 13, color: "var(--clr-muted)", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clr-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--clr-muted)")}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
