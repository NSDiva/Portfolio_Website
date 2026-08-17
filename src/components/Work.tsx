"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  thumb: string;
  date: string;
  title: string;
  desc: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    thumb: "[ ai resume checker ]",
    date: "06 · 2026",
    title: "AI Resume Checker",
    desc: "Upload a resume and a job description, get back a match score, the keywords you hit and missed, ATS formatting flags and rewritten bullets in one pass. Four serverless routes on Next.js 16 talk to the Google Gemini API, and a 7-model fallback chain with retry-on-429/404/503 keeps success near 100% on a rate-limited free tier where one model alone would just fail. Responses come back through Gemini responseSchema definitions mapped 1:1 to typed interfaces, so there is no JSON parsing to break. The PDF pipeline reads an upload with pdf-parse, pulls out 7 sections and re-renders a single-column ATS-safe document - a 30-minute manual reformat done in under 10 seconds.",
    tags: ["Next.js 16", "React 19", "Gemini API", "TypeScript"],
    href: "https://github.com/NSDiva/AI_Resume_Checker",
  },
  {
    thumb: "[ nextmd notes ]",
    date: "04 · 2026",
    title: "NextMD",
    desc: "A full-stack markdown notes app on the Next.js 15 App Router. Seven Supabase Edge Functions in Deno hold every note operation behind one typed invokeFn helper, so ~2,800 lines of app code share a single data-access path. Autosave debounces at 1.5s, queues concurrent writes and backs off 1s/2s/4s, with a throttled localStorage mirror underneath - nothing is lost on a failed save, a closed tab or a mid-edit note switch. Supabase Auth and Postgres row-level security isolate every tenant on every read and write, and SSR middleware only accepts same-origin relative redirects after login. Export to .md, .html or .zip is lossless and collision-safe, with JSZip dynamically imported to keep ~95 KB off the critical path.",
    tags: ["Next.js 15", "Supabase", "Postgres RLS", "TypeScript"],
    href: "https://github.com/NSDiva/NextMD",
  },
  {
    thumb: "[ collaborative editor ]",
    date: "01 · 2026",
    title: "PeerEdit Workspace",
    desc: "A document editor where everyone types at once and no server holds the data. Yjs and WebRTC sync peers directly at sub-100ms latency and show who else is in the room. The Web Crypto API generates session keys client-side, so 100% of document data stays encrypted in transit. Built on Next.js, React and TipTap with a modular Tailwind v4 component architecture.",
    tags: ["Next.js", "TipTap", "Yjs / WebRTC", "Web Crypto"],
    href: "https://github.com/NSDiva/PeerEdit_Workspace",
  },
  {
    thumb: "/MovieLand Discovery Hub.png",
    date: "02 · 2025",
    title: "MovieLand",
    desc: "Type a title and it searches 10,000+ films through the OMDb API. Tuned state handling cut query response times 25%, and React Hooks refill the glass-morphism grid without a page refresh.",
    tags: ["React", "OMDb API", "React Hooks", "CSS Grid"],
    href: "https://github.com/NSDiva/MovieLand_Discovery_Hub",
  },
  {
    thumb: "/3D Interactive Weather Globe.png",
    date: "03 · 2025",
    title: "Global Temperature",
    desc: "A 3D globe rendered in Three.js with custom earth textures. Search a city and a live weather API pulls temperature, wind and humidity, then the view moves from the spinning globe to a plain readout. Optimized texture loading holds a steady 60 FPS, and async fetching trimmed 20% off load time on that handoff. Holds up from desktop down to mobile.",
    tags: ["Three.js", "Weather API", "WebGL", "Responsive"],
    href: "https://github.com/NSDiva/Global_Temperature_Explorer",
  },
];

function Description({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [clipped, setClipped] = useState(false);

  // Only offer the toggle when the clamp actually cuts the text off. Re-measure
  // on resize, since a narrower card wraps into more lines.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      if (expanded) return;
      setClipped(el.scrollHeight > el.clientHeight + 1);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [expanded]);

  return (
    <div className="work-desc-wrap">
      <p ref={ref} className={`work-desc ${expanded ? "expanded" : "clamped"}`}>
        {text}
      </p>
      {(clipped || expanded) && (
        <button
          type="button"
          className="work-more"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "show less ↑" : "read more ↓"}
        </button>
      )}
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="section" data-screen-label="02 SELECTED WORK">
      <div data-reveal className="section-head">
        <div className="section-index">
          <span className="acc">02</span> <span className="faint">/</span> SELECTED WORK
        </div>
        <a href="#contact" className="section-note">GET IN TOUCH ↗</a>
      </div>

      <p data-reveal className="work-lead">
        A few things I&apos;ve built. Fast, responsive, no wasted motion.
      </p>

      <div className="work-list">
        {projects.map((p) => (
          <article key={p.title} data-reveal className="work-card">
            <div className="work-thumb">
              {p.thumb.startsWith("/") ? (
                <img src={p.thumb} alt={p.title} className="work-thumb-img" />
              ) : (
                p.thumb
              )}
            </div>
            <div className="work-body">
              <div className="work-date">{p.date}</div>
              <h3 className="work-title">
                <a href={p.href} className="work-link">
                  {p.title} <span className="work-link-arrow">↗</span>
                </a>
              </h3>
              <Description text={p.desc} />
              <div className="tag-row">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
