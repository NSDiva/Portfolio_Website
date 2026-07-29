export default function Education() {
  return (
    <section id="education" className="section" data-screen-label="04 EDUCATION">
      <div data-reveal className="section-index solo">
        <span className="acc">04</span> <span className="faint">/</span> EDUCATION
      </div>

      <div data-reveal className="edu-grid">
        <div className="edu-card">
          <div className="edu-date">SEP 2022 — JUL 2026</div>
          <h3 className="edu-school">KK Modi University</h3>
          <p className="edu-degree">B.Tech, Computer Science &amp; Engineering</p>
          <div className="cgpa-box">
            <span className="cgpa-num">8.5</span>
            <span className="cgpa-label">CGPA</span>
          </div>
        </div>

        <div className="edu-card center">
          <div className="card-label">◆ ACHIEVEMENTS</div>
          <ul className="ach-list">
            <li className="point">
              <span className="acc">→</span>Participant, Shankara Global Hackathon
              2025 — Jaipur, India.
            </li>
            <li className="point">
              <span className="acc">→</span>Infosys Springboard Virtual Internship
              6.0 — certified.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
