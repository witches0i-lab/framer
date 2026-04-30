/**
 * Neo-Retro — Framer Marketplace Index Page
 * Design system: Fashion Editorial Neo-Retro
 * Colors: ink #1A1325 / paper #F5EEE1 / primary #E8231A / secondary #2E7AFF / accent #FFD63A / support #1F7A4C / neutral #E0D6C3
 * Fonts: Archivo Black · Space Grotesk · Inter · JetBrains Mono
 * Shadow: hard offset (blur 0) · Border: 2px solid ink · Radius: 0px
 */

import React from "react"

// ─── Design Tokens ──────────────────────────────────────────────────────────

const C = {
  ink: "#1A1325",
  paper: "#F5EEE1",
  primary: "#E8231A",
  secondary: "#2E7AFF",
  accent: "#FFD63A",
  support: "#1F7A4C",
  neutral: "#E0D6C3",
} as const

const shadow = {
  sm: `4px 4px 0px ${C.ink}`,
  md: `6px 6px 0px ${C.ink}`,
  lg: `8px 8px 0px ${C.ink}`,
} as const

const border = `2px solid ${C.ink}`

// ─── Shared Styles ──────────────────────────────────────────────────────────

const tag = (bg: string, color = C.ink): React.CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  padding: "4px 12px",
  background: bg,
  border,
  boxShadow: shadow.sm,
  fontFamily: "JetBrains Mono, monospace",
  fontSize: 12,
  fontWeight: 500,
  color,
  letterSpacing: "0.04em",
  textTransform: "uppercase" as const,
})

const btn = (bg: string, color = C.ink): React.CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "14px 28px",
  background: bg,
  border,
  boxShadow: shadow.md,
  fontFamily: "Space Grotesk, sans-serif",
  fontSize: 16,
  fontWeight: 700,
  color,
  cursor: "pointer",
  textDecoration: "none",
  letterSpacing: "-0.01em",
  transition: "transform 0.1s, box-shadow 0.1s",
})

// ─── Components ─────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: C.paper,
        borderBottom: border,
        padding: "0 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span
          style={{
            fontFamily: "Archivo Black, sans-serif",
            fontSize: 20,
            color: C.ink,
            letterSpacing: "-0.02em",
          }}
        >
          NEO-RETRO
        </span>
        <span style={tag(C.primary, C.paper)}>KIT</span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {["Components", "Pricing", "Preview", "Docs"].map((l) => (
          <a
            key={l}
            href="#"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 15,
              fontWeight: 600,
              color: C.ink,
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            {l}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a href="#" style={btn(C.primary, C.paper)}>
        Get the Kit →
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section
      style={{
        background: C.paper,
        borderBottom: border,
        padding: "96px 48px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Geometric accent — large circle */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: 340,
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: `2px solid ${C.neutral}`,
          pointerEvents: "none",
        }}
      />

      {/* Left — copy */}
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {/* eyebrow */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
          <span style={tag(C.accent)}>01 — Framer Components</span>
          <span style={tag(C.secondary, C.paper)}>Neo-Retro</span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "Archivo Black, sans-serif",
            fontSize: 72,
            fontWeight: 900,
            color: C.ink,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          BUILD BOLD.
          <br />
          <span style={{ color: C.primary }}>SHIP FAST.</span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 18,
            fontWeight: 400,
            color: C.ink,
            lineHeight: 1.6,
            margin: 0,
            maxWidth: 480,
          }}
        >
          Production-ready Framer components built on the Fashion Editorial
          Neo-Retro system — hard shadows, bold type, zero blur. Drop in, customize,
          ship.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" as const }}>
          <a href="#" style={btn(C.primary, C.paper)}>
            Browse Components →
          </a>
          <a href="#" style={{ ...btn(C.paper), border }}>
            Live Preview
          </a>
        </div>

        {/* Social proof */}
        <div
          style={{
            display: "flex",
            gap: 32,
            paddingTop: 16,
            borderTop: border,
          }}
        >
          {[
            { n: "40+", l: "Components" },
            { n: "8", l: "Categories" },
            { n: "★ 5.0", l: "Rating" },
          ].map(({ n, l }) => (
            <div key={l}>
              <div
                style={{
                  fontFamily: "Archivo Black, sans-serif",
                  fontSize: 28,
                  color: C.ink,
                  letterSpacing: "-0.02em",
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 12,
                  color: C.ink,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — preview card stack */}
      <div
        style={{
          position: "relative",
          height: 420,
        }}
      >
        {/* Back card */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            right: 0,
            bottom: 0,
            background: C.accent,
            border,
          }}
        />
        {/* Front card */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 20,
            bottom: 20,
            background: C.paper,
            border,
            boxShadow: shadow.lg,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Card header */}
          <div
            style={{
              background: C.ink,
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {[C.primary, C.accent, C.support].map((c, i) => (
              <div
                key={i}
                style={{ width: 12, height: 12, borderRadius: "50%", background: c }}
              />
            ))}
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11,
                color: C.neutral,
                marginLeft: "auto",
              }}
            >
              neo-retro-kit.framer.website
            </span>
          </div>

          {/* Card body — mini component preview */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
              background: C.neutral,
            }}
          >
            {[
              { bg: C.paper, label: "Button Kit", accent: C.primary },
              { bg: C.ink, label: "Dark Cards", accent: C.accent },
              { bg: C.secondary, label: "Nav Bar", accent: C.paper },
              { bg: C.accent, label: "Ticker", accent: C.ink },
            ].map(({ bg, label, accent }) => (
              <div
                key={label}
                style={{
                  background: bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: accent,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Marquee ticker
function Ticker() {
  const items = [
    "Buttons",
    "Cards",
    "Navigation",
    "Hero Sections",
    "Testimonials",
    "Pricing Tables",
    "Stat Counters",
    "Form Elements",
    "Modals",
    "Footer",
  ]
  const repeated = [...items, ...items]

  return (
    <div
      style={{
        background: C.ink,
        borderBottom: border,
        padding: "14px 0",
        overflow: "hidden",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 48,
          animation: "ticker 24s linear infinite",
          whiteSpace: "nowrap" as const,
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "Archivo Black, sans-serif",
              fontSize: 15,
              color: i % 3 === 0 ? C.accent : i % 3 === 1 ? C.paper : C.primary,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              display: "flex",
              alignItems: "center",
              gap: 48,
            }}
          >
            {item}
            <span style={{ color: C.neutral, fontFamily: "Inter" }}>✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  )
}

// Category grid
const CATEGORIES = [
  {
    num: "01",
    name: "Navigation",
    desc: "Sticky nav bars, mobile drawers, breadcrumbs",
    count: 6,
    accent: C.secondary,
    textColor: C.paper,
  },
  {
    num: "02",
    name: "Hero Sections",
    desc: "Bold headlines, split layouts, full-bleed grids",
    count: 5,
    accent: C.primary,
    textColor: C.paper,
  },
  {
    num: "03",
    name: "Cards",
    desc: "Article cards, product cards, outlined utility cards",
    count: 8,
    accent: C.accent,
    textColor: C.ink,
  },
  {
    num: "04",
    name: "Buttons & Tags",
    desc: "Hard-shadow CTAs, pill tags, icon buttons",
    count: 7,
    accent: C.paper,
    textColor: C.ink,
  },
  {
    num: "05",
    name: "Marquee / Ticker",
    desc: "Horizontal scrolling banners, logo strips",
    count: 4,
    accent: C.support,
    textColor: C.paper,
  },
  {
    num: "06",
    name: "Testimonials",
    desc: "Quote cards, avatar grids, rating displays",
    count: 5,
    accent: C.ink,
    textColor: C.paper,
  },
  {
    num: "07",
    name: "Pricing",
    desc: "Pricing tables, toggle plans, feature checklists",
    count: 3,
    accent: C.neutral,
    textColor: C.ink,
  },
  {
    num: "08",
    name: "Stats & Counters",
    desc: "Animated number counters, KPI blocks",
    count: 4,
    accent: C.primary,
    textColor: C.paper,
  },
]

function CategoryGrid() {
  return (
    <section
      style={{
        background: C.paper,
        borderBottom: border,
        padding: "96px 48px",
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 48,
          paddingBottom: 24,
          borderBottom: border,
        }}
      >
        <div>
          <span style={{ ...tag(C.accent), marginBottom: 16, display: "inline-flex" }}>
            02 — Categories
          </span>
          <h2
            style={{
              fontFamily: "Archivo Black, sans-serif",
              fontSize: 48,
              color: C.ink,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              margin: "16px 0 0",
            }}
          >
            EVERYTHING
            <br />
            YOU NEED.
          </h2>
        </div>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 16,
            color: C.ink,
            lineHeight: 1.6,
            maxWidth: 340,
            margin: 0,
          }}
        >
          8 component categories, 40+ individual pieces — all Neo-Retro system, all
          production-ready for Framer.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          border,
        }}
      >
        {CATEGORIES.map((cat, i) => (
          <div
            key={cat.num}
            style={{
              background: cat.accent,
              borderRight: i % 4 !== 3 ? border : "none",
              borderBottom: i < 4 ? border : "none",
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              cursor: "pointer",
              transition: "transform 0.1s",
              position: "relative",
            }}
          >
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11,
                color: cat.textColor,
                opacity: 0.6,
                letterSpacing: "0.08em",
              }}
            >
              {cat.num}
            </span>
            <h3
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 20,
                fontWeight: 700,
                color: cat.textColor,
                letterSpacing: "-0.01em",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {cat.name}
            </h3>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                color: cat.textColor,
                opacity: 0.75,
                lineHeight: 1.5,
                margin: 0,
                flex: 1,
              }}
            >
              {cat.desc}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 12,
                borderTop: `1px solid ${cat.textColor}`,
                opacity: 0.7,
              }}
            >
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                  color: cat.textColor,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {cat.count} components
              </span>
              <span style={{ color: cat.textColor, fontSize: 16 }}>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Featured component cards
const COMPONENTS = [
  {
    name: "Hard Button Kit",
    category: "Buttons",
    tag: "Bestseller",
    tagBg: C.primary,
    bg: C.paper,
    preview: C.primary,
  },
  {
    name: "Outlined Article Card",
    category: "Cards",
    tag: "New",
    tagBg: C.accent,
    bg: C.ink,
    preview: C.accent,
  },
  {
    name: "Editorial Hero",
    category: "Hero",
    tag: "Featured",
    tagBg: C.secondary,
    bg: C.paper,
    preview: C.secondary,
  },
  {
    name: "Retro Ticker Strip",
    category: "Marquee",
    tag: "Popular",
    tagBg: C.support,
    bg: C.ink,
    preview: C.support,
  },
  {
    name: "Stat Counter Block",
    category: "Stats",
    tag: "New",
    tagBg: C.accent,
    bg: C.paper,
    preview: C.ink,
  },
  {
    name: "Sticky Nav Bar",
    category: "Navigation",
    tag: "Essential",
    tagBg: C.primary,
    bg: C.ink,
    preview: C.primary,
  },
]

function FeaturedGrid() {
  return (
    <section
      style={{
        background: C.neutral,
        borderBottom: border,
        padding: "96px 48px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <span style={{ ...tag(C.primary, C.paper), marginBottom: 16, display: "inline-flex" }}>
          03 — Featured Components
        </span>
        <h2
          style={{
            fontFamily: "Archivo Black, sans-serif",
            fontSize: 48,
            color: C.ink,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            margin: "16px 0 0",
          }}
        >
          HAND-CRAFTED.
          <br />
          PIXEL-PERFECT.
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}
      >
        {COMPONENTS.map((comp) => (
          <div
            key={comp.name}
            style={{
              background: comp.bg,
              border,
              boxShadow: shadow.md,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {/* Preview area */}
            <div
              style={{
                height: 180,
                background: comp.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: border,
                position: "relative",
              }}
            >
              {/* Geometric accent */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: comp.preview,
                  border,
                  boxShadow: shadow.md,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 12,
                  right: 12,
                }}
              >
                <span
                  style={{
                    ...tag(comp.tagBg, comp.tagBg === C.accent ? C.ink : C.paper),
                    fontSize: 10,
                  }}
                >
                  {comp.tag}
                </span>
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                  color: comp.bg === C.ink ? C.neutral : C.ink,
                  opacity: 0.6,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {comp.category}
              </span>
              <h3
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: comp.bg === C.ink ? C.paper : C.ink,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                {comp.name}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: 12,
                  borderTop: `1px solid ${comp.bg === C.ink ? C.neutral : C.ink}`,
                  marginTop: 4,
                }}
              >
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: comp.preview,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Preview →
                </span>
                <span
                  style={{
                    fontFamily: "Archivo Black, sans-serif",
                    fontSize: 20,
                    color: comp.bg === C.ink ? C.paper : C.ink,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Free
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function WhySection() {
  const items = [
    {
      num: "01",
      title: "Hard-Shadow System",
      body:
        "Every component uses blur-0 hard offset shadows. No soft glow, no glassmorphism. Just raw, tactile depth.",
      accent: C.primary,
    },
    {
      num: "02",
      title: "Customizable Variables",
      body:
        "Color, text, image, and toggle variables exposed per component — so your buyers never need to dig into layers.",
      accent: C.secondary,
    },
    {
      num: "03",
      title: "Framer-Native",
      body:
        "Built entirely in Framer with Google Fonts only. No external font uploads, no Marketplace policy violations.",
      accent: C.accent,
    },
    {
      num: "04",
      title: "Cohesive System",
      body:
        "8 categories, one visual language. Mix and match any component and they'll always look like they belong together.",
      accent: C.support,
    },
  ]

  return (
    <section
      style={{
        background: C.ink,
        borderBottom: border,
        padding: "96px 48px",
      }}
    >
      <div style={{ marginBottom: 48 }}>
        <span style={{ ...tag(C.accent), marginBottom: 16, display: "inline-flex" }}>
          04 — Why This Kit
        </span>
        <h2
          style={{
            fontFamily: "Archivo Black, sans-serif",
            fontSize: 48,
            color: C.paper,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            margin: "16px 0 0",
          }}
        >
          DESIGNED WITH
          <br />
          <span style={{ color: C.primary }}>INTENTION.</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 0,
          border,
        }}
      >
        {items.map((item, i) => (
          <div
            key={item.num}
            style={{
              padding: 40,
              borderRight: i % 2 === 0 ? border : "none",
              borderBottom: i < 2 ? border : "none",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  fontFamily: "Archivo Black, sans-serif",
                  fontSize: 40,
                  color: item.accent,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {item.num}
              </span>
              {/* Geometric shape */}
              <div
                style={{
                  width: 24,
                  height: 24,
                  background: item.accent,
                  flexShrink: 0,
                }}
              />
            </div>
            <h3
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 22,
                fontWeight: 700,
                color: C.paper,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 16,
                color: C.neutral,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section
      style={{
        background: C.primary,
        borderBottom: border,
        padding: "96px 48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Geometric accents */}
      <div
        style={{
          position: "absolute",
          top: -40,
          left: -40,
          width: 160,
          height: 160,
          borderRadius: "50%",
          border: `2px solid ${C.paper}`,
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -40,
          right: 80,
          width: 120,
          height: 120,
          background: C.accent,
          border,
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      <span style={{ ...tag(C.paper), marginBottom: 24 }}>05 — Get Started</span>

      <h2
        style={{
          fontFamily: "Archivo Black, sans-serif",
          fontSize: 64,
          color: C.paper,
          letterSpacing: "-0.02em",
          lineHeight: 1.0,
          margin: "0 0 24px",
        }}
      >
        START BUILDING
        <br />
        TODAY.
      </h2>

      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 18,
          color: C.paper,
          lineHeight: 1.6,
          maxWidth: 480,
          margin: "0 0 48px",
          opacity: 0.9,
        }}
      >
        Grab the full kit and get instant access to all 40+ Neo-Retro components.
        One purchase, lifetime updates.
      </p>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" as const, justifyContent: "center" }}>
        <a
          href="#"
          style={{
            ...btn(C.ink, C.paper),
            fontSize: 18,
            padding: "18px 40px",
            boxShadow: shadow.lg,
          }}
        >
          Get the Full Kit →
        </a>
        <a
          href="#"
          style={{
            ...btn(C.paper, C.ink),
            fontSize: 18,
            padding: "18px 40px",
            boxShadow: shadow.lg,
          }}
        >
          Browse Free First
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer
      style={{
        background: C.ink,
        padding: "64px 48px 32px",
        display: "flex",
        flexDirection: "column",
        gap: 48,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48,
          paddingBottom: 48,
          borderBottom: `1px solid ${C.neutral}`,
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontFamily: "Archivo Black, sans-serif",
                fontSize: 20,
                color: C.paper,
                letterSpacing: "-0.02em",
              }}
            >
              NEO-RETRO
            </span>
            <span style={tag(C.primary, C.paper)}>KIT</span>
          </div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              color: C.neutral,
              lineHeight: 1.6,
              margin: 0,
              maxWidth: 260,
            }}
          >
            Fashion Editorial Neo-Retro components for Framer Marketplace. Bold,
            cohesive, zero-blur.
          </p>
        </div>

        {/* Links */}
        {[
          { title: "Components", links: ["Navigation", "Hero", "Cards", "Buttons", "Marquee"] },
          { title: "More", links: ["Testimonials", "Pricing", "Stats", "Footer", "Forms"] },
          { title: "Info", links: ["Framer Marketplace", "Preview Site", "Changelog", "Contact"] },
        ].map(({ title, links }) => (
          <div key={title} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11,
                color: C.accent,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {title}
            </span>
            {links.map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: C.neutral,
                  textDecoration: "none",
                  lineHeight: 1.5,
                }}
              >
                {l}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12,
            color: C.neutral,
            opacity: 0.5,
            letterSpacing: "0.04em",
          }}
        >
          © 2026 Neo-Retro Kit — Framer Marketplace
        </span>
        <span
          style={{
            fontFamily: "Archivo Black, sans-serif",
            fontSize: 40,
            color: C.neutral,
            opacity: 0.08,
            letterSpacing: "-0.02em",
          }}
        >
          NEO-RETRO
        </span>
      </div>
    </footer>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function IndexPage() {
  return (
    <div
      style={{
        background: C.paper,
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Nav />
      <Hero />
      <Ticker />
      <CategoryGrid />
      <FeaturedGrid />
      <WhySection />
      <CtaSection />
      <Footer />
    </div>
  )
}
