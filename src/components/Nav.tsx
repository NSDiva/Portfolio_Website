"use client";

import { useEffect, useState } from "react";

// Must match the .nav-links grid-template-rows transition in globals.css.
const COLLAPSE_MS = 300;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  // Track the breakpoint so the collapsed panel is only made inert on mobile —
  // at desktop the links are always visible and must stay focusable.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const sync = () => {
      setMobile(mq.matches);
      if (!mq.matches) setOpen(false);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Close on Escape. No body scroll lock: locking the body propagates to the
  // viewport, clamps scrollY to 0, and breaks the anchor jump on close.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeMenu = () => setOpen(false);

  // Collapsing the panel shortens the sticky nav and pulls the page up. If the
  // browser handles the anchor natively it measures the target *before* that
  // shift and lands mid-section, so close first, then scroll.
  const onNavClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!open) return;

    const link = (e.target as HTMLElement).closest("a");
    const href = link?.getAttribute("href");
    if (!href?.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    }, COLLAPSE_MS);
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand" onClick={onNavClick}>
          <span className="brand-name">Neekita Sahu</span>
          <span className="brand-role">Frontend Developer · UI Engineer</span>
        </a>
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
        <div id="nav-menu" className={open ? "nav-links open" : "nav-links"}>
          <div
            className="nav-links-inner"
            inert={mobile && !open ? true : undefined}
            onClick={(e) => {
              onNavClick(e);
              closeMenu();
            }}
          >
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#work" className="nav-link">WORK</a>
            <a href="#experience" className="nav-link">EXPERIENCE</a>
            <a href="#education" className="nav-link">EDUCATION</a>
            <a href="#skills" className="nav-link">SKILLS</a>
            <a href="#contact" className="nav-cta">CONTACT ↗</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
