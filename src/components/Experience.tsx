export default function Experience() {
  return (
    <section id="experience" className="section" data-screen-label="03 EXPERIENCE">
      <div data-reveal className="section-index solo">
        <span className="acc">03</span> <span className="faint">/</span> EXPERIENCE
      </div>

      <div className="exp-list">
        <div data-reveal className="exp-item top">
          <div className="exp-date">MAR 2026 — MAY 2026</div>
          <div>
            <h3 className="exp-role">
              Frontend Development &amp; SEO Intern{" "}
              <span className="acc">· JouleWorx</span>
            </h3>
            <ul className="point-list">
              <li className="point">
                <span className="acc">→</span>Engineered the hero-to-navbar
                transition with scroll-linked animation and responsive design
                principles.
              </li>
              <li className="point">
                <span className="acc">→</span>Designed &amp; deployed the
                agency&apos;s blog / journal architecture — directory structure
                and cohesive custom styling across screen sizes.
              </li>
              <li className="point">
                <span className="acc">→</span>Built a cursor-responsive 3D phone
                animation using IntersectionObserver to trigger context-aware
                tooltips.
              </li>
              <li className="point">
                <span className="acc">→</span>Drafted SEO-structured content and
                monitored site health with Google Search Console.
              </li>
            </ul>
          </div>
        </div>

        <div data-reveal className="exp-item bottom">
          <div className="exp-date">SEP 2025 — NOV 2025</div>
          <div>
            <h3 className="exp-role">
              Virtual Intern{" "}
              <span className="acc">· Infosys Springboard</span>
            </h3>
            <ul className="point-list">
              <li className="point">
                <span className="acc">→</span>Completed the Infosys Springboard
                Virtual Internship 6.0 certification, focused on Angular.
              </li>
              <li className="point">
                <span className="acc">→</span>Built{" "}
                <span style={{ color: "var(--text)" }}>TaxPal</span> — a personal
                finance &amp; tax estimator for freelancers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
