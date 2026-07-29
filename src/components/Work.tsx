const projects = [
  {
    thumb: "[ collaborative editor ]",
    date: "01 · 2026",
    title: "Real-Time P2P Workspace",
    desc: "A document editor where everyone types at once and no server holds the data. Yjs and WebRTC sync peers directly and show who else is in the room. The Web Crypto API encrypts everything on the wire. Built on Next.js, React and TipTap.",
    tags: ["Next.js", "TipTap", "Yjs / WebRTC", "Tailwind v4"],
  },
  {
    thumb: "[ movie search ]",
    date: "02 · 2025",
    title: "MovieLand",
    desc: "Type a title and it searches thousands of films through the OMDb API. Posters and release dates come back as you go, and React Hooks refill the glass-morphism grid without a page refresh.",
    tags: ["React", "OMDb API", "React Hooks", "CSS Grid"],
  },
  {
    thumb: "[ 3D globe ]",
    date: "03 · 2025",
    title: "Global Temperature",
    desc: "A 3D globe rendered in Three.js with custom earth textures. Search a city and a live weather API pulls temperature, wind and humidity, then the view moves from the spinning globe to a plain readout. Holds up from desktop down to mobile.",
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
        A few things I&apos;ve built. Fast, responsive, no wasted motion.
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
