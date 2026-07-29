"use client";

import { useEffect, useState } from "react";

const ACCENT = "#7CE38B";
const MOTION = true;

function darken(hex: string, f: number) {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  let r = (n >> 16) & 255,
    g = (n >> 8) & 255,
    b = n & 255;
  r = Math.round(r * f);
  g = Math.round(g * f);
  b = Math.round(b * f);
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

export default function SiteEffects() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Apply persisted theme on mount.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("nk-theme");
    } catch {
      saved = null;
    }
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  // Reflect theme + accent onto the document.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.style.setProperty("--acc", theme === "light" ? darken(ACCENT, 0.62) : ACCENT);
  }, [theme]);

  // Scroll reveal + intro dismissal.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const show = (el: HTMLElement) => el.classList.add("revealed");
    let fallback: number | undefined;

    if (!MOTION) {
      els.forEach(show);
    } else {
      let io: IntersectionObserver | null = null;
      try {
        io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                show(e.target as HTMLElement);
                io!.unobserve(e.target);
              }
            });
          },
          { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
        );
        els.forEach((el) => io!.observe(el));

        // Immediately reveal anything already in view on mount.
        const vh = window.innerHeight || 800;
        requestAnimationFrame(() => {
          els.forEach((el) => {
            const r = el.getBoundingClientRect();
            if (r.top < vh * 0.95 && r.bottom > 0) {
              show(el);
              io!.unobserve(el);
            }
          });
        });
      } catch {
        els.forEach(show);
      }
      // Hard fallback: force everything visible.
      fallback = window.setTimeout(() => els.forEach(show), 1400);
    }

    // Remove intro overlay after its animation.
    const introEl = document.getElementById("intro");
    const introTimer = window.setTimeout(() => {
      if (introEl) introEl.style.display = "none";
    }, 3200);

    return () => {
      window.clearTimeout(introTimer);
      if (fallback !== undefined) window.clearTimeout(fallback);
    };
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem("nk-theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      id="themeToggle"
      className="theme-toggle"
      aria-label="Toggle theme"
      onClick={toggle}
    >
      {theme === "light" ? "☀" : "☾"}
    </button>
  );
}
