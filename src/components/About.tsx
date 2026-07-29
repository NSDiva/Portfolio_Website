const logs = [
  "building responsive UIs",
  "integrating REST APIs",
  "crafting scroll animations",
  "debugging state",
  "optimizing for SEO",
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
    text: "Scroll-linked hero animations and a responsive journal architecture for the JouleWorx site.",
  },
  {
    label: "◇ EXPLORING",
    text: "3D on the web with Three.js, modern UI architecture, and micro-interactions that guide the eye.",
  },
  {
    label: "⚡ FUEL",
    text: "AI-assisted flow with Cursor & Claude — the default for long build sessions and late refactors.",
  },
  {
    label: "♫ NOW PLAYING",
    text: "Low-vocal, high-focus — the soundtrack for deep-work mode and pixel-pushing.",
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
        I&apos;m a Computer Science graduate and frontend developer who cares
        about how interfaces feel, not just how they look. I spend most of my
        time in the React and Next.js ecosystem, translating designs into
        responsive, accessible, production-ready UIs — with a real focus on clean
        structure, smooth motion, and performance. During my internship at
        JouleWorx I shipped scroll-linked animations, built a responsive journal
        architecture, and worked on SEO and content strategy. Lately I&apos;ve
        been going deeper into 3D on the web with Three.js and using AI-assisted
        tools like Cursor and Claude to move faster. I love the details that make
        a UI feel effortless.
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
