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
                <span className="acc">→</span>The hero collapses into the navbar
                as you scroll. I tied that transition to scroll position and made
                it hold up across screen sizes.
              </li>
              <li className="point">
                <span className="acc">→</span>Set up the agency&apos;s blog and
                journal from the directory structure up, with custom styling that
                stays consistent across screen sizes.
              </li>
              <li className="point">
                <span className="acc">→</span>Built a 3D phone that follows the
                cursor, with IntersectionObserver firing context-aware tooltips as
                it scrolls into view.
              </li>
              <li className="point">
                <span className="acc">→</span>Wrote SEO-structured content and kept
                an eye on site health through Google Search Console.
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
                <span className="acc">→</span>Finished the Infosys Springboard
                Virtual Internship 6.0 certification, all Angular.
              </li>
              <li className="point">
                <span className="acc">→</span>Built TaxPal - a finance
                &amp; tax estimator aimed at freelancers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
