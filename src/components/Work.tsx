const projects = [
  {
    thumb: "[ collaborative editor ]",
    date: "01 · 2026",
    title: "Real-Time P2P Workspace",
    desc: "A decentralized, real-time document editor built with Next.js, React & TipTap. Yjs + WebRTC drive peer-to-peer sync and live presence with no central database, and the Web Crypto API keeps sessions encrypted in transit.",
    tags: ["Next.js", "TipTap", "Yjs / WebRTC", "Tailwind v4"],
  },
  {
    thumb: "[ movie search ]",
    date: "02 · 2025",
    title: "MovieLand Discovery Hub",
    desc: "A dynamic React search engine over thousands of films. The OMDb API fetches real-time titles, posters & release dates, and React Hooks keep the glass-morphism grid updating instantly — no page refreshes, smooth hover animations throughout.",
    tags: ["React", "OMDb API", "React Hooks", "CSS Grid"],
  },
  {
    thumb: "[ 3D globe ]",
    date: "03 · 2025",
    title: "Global Temperature Explorer",
    desc: "An interactive 3D globe in Three.js with custom earth textures. Search any city and a live weather API pulls temperature, wind & humidity — the view transitions from the rotating 3D world to a clean report, fully responsive from desktop to mobile.",
    tags: ["Three.js", "Weather API", "WebGL", "Responsive"],
  },
];

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
        Interfaces I built to be fast, responsive, and a little delightful.
      </p>

      <div className="work-list">
        {projects.map((p) => (
          <a key={p.title} data-reveal href="#" className="work-card">
            <div className="work-thumb">{p.thumb}</div>
            <div className="work-body">
              <div className="work-date">{p.date}</div>
              <h3 className="work-title">{p.title}</h3>
              <p className="work-desc">{p.desc}</p>
              <div className="tag-row">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
