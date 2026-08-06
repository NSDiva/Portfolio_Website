"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    document.body.classList.remove("menu-open");
  };

  // Close the drawer on Escape and lock body scroll while it is open.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    document.body.classList.add("menu-open");

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-name">Neekita Sahu</span>
          <span className="brand-role">Frontend Developer · UI Engineer</span>
        </a>
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => {
            if (open) {
              closeMenu();
            } else {
              setOpen(true);
            }
          }}
        >
          {open ? "✕" : "☰"}
        </button>
        <div
          id="nav-menu"
          className={open ? "nav-links open" : "nav-links"}
          onClick={closeMenu}
        >
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#work" className="nav-link">WORK</a>
          <a href="#experience" className="nav-link">EXPERIENCE</a>
          <a href="#education" className="nav-link">EDUCATION</a>
          <a href="#skills" className="nav-link">SKILLS</a>
          <a href="#contact" className="nav-cta">CONTACT ↗</a>
        </div>
      </div>
    </nav>
  );
}
