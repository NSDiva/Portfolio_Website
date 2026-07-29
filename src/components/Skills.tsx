const groups = [
  { label: "LANGUAGES", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "C++", "Python"] },
  { label: "FRAMEWORKS & LIBS", items: ["React.js", "Next.js", "Tailwind CSS", "Three.js"] },
  { label: "FRONTEND CORE", items: ["Flexbox", "CSS Grid", "Responsive Design", "Modern UI Architecture"] },
  { label: "API & TOOLING", items: ["REST API", "JSON", "Git / GitHub", "Vercel"] },
  { label: "AI CODING", items: ["Cursor", "Claude", "Antigravity Studio"] },
  { label: "OTHER", items: ["SEO", "Performance", "Problem-Solving", "Analytical Thinking"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section" data-screen-label="05 SKILLS">
      <div data-reveal className="section-index solo">
        <span className="acc">05</span> <span className="faint">/</span> SKILLS
      </div>

      <div data-reveal className="skills-grid">
        {groups.map((g) => (
          <div key={g.label} className="skill-card">
            <div className="card-label">{g.label}</div>
            <div className="chip-row">
              {g.items.map((it) => (
                <span key={it} className="chip">{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
