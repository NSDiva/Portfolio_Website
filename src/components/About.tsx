const logs = [
  "building responsive UIs",
  "wiring up REST APIs",
  "tuning scroll animations",
  "chasing down state bugs",
  "fixing SEO",
  "shipping to Vercel",
];

function LogTrack() {
  return (
    <>
      {logs.map((t) => (
        <span key={t} className="log-item">
          Log&gt; {t}
          <span className="sep">/</span>
        </span>
      ))}
    </>
  );
}

const cards = [
  {
    label: "⚙ WORKING ON",
    text: "Scroll-linked hero animations and the responsive journal architecture on the JouleWorx site.",
  },
  {
    label: "◇ EXPLORING",
    text: "3D on the web with Three.js, plus how to structure UI and use micro-interactions to point people where to look.",
  },
  {
    label: "⚡ FUEL",
    text: "Cursor & Claude do a lot of the heavy lifting on long build sessions and the late-night refactors.",
  },
  {
    label: "♫ NOW PLAYING",
    text: "Low-vocal, high-focus stuff. It's what plays while I'm heads-down pushing pixels.",
  },
];

export default function About() {
  return (
    <section id="about" className="section" data-screen-label="01 ABOUT">
      <div data-reveal className="section-head">
        <div className="section-index">
          <span className="acc">01</span> <span className="faint">/</span> ABOUT
        </div>
        <div className="section-note">WHO I AM</div>
      </div>

      <p data-reveal className="about-lead">
        I&apos;m a Computer Science grad and frontend developer, and I care about
        how an interface feels to use, not just how it looks in a screenshot.
        Most of my work lives in React and Next.js, I take designs and turn them
        into responsive, accessible UIs that are ready to ship. During my
        internship at JouleWorx I built scroll-linked animations and the
        responsive journal architecture, and spent time on SEO and content along
        the way. Lately I&apos;ve been getting into 3D on the web with Three.js,
        and I lean on Cursor and Claude to move faster. The small details are
        usually what I end up obsessing over.
      </p>

      <div data-reveal className="about-grid">
        {cards.map((c) => (
          <div key={c.label} className="info-card">
            <div className="card-label">{c.label}</div>
            <p className="card-text">{c.text}</p>
          </div>
        ))}
      </div>

      <div className="log-marquee-wrap">
        <div className="log-marquee">
          <div style={{ display: "flex" }}>
            <LogTrack />
          </div>
          <div style={{ display: "flex" }} aria-hidden="true">
            <LogTrack />
          </div>
        </div>
      </div>
    </section>
  );
}
