export default function Experience() {
  return (
    <section id="experience" className="section" data-screen-label="03 EXPERIENCE">
      <div data-reveal className="section-index solo">
        <span className="acc">03</span> <span className="faint">/</span> EXPERIENCE
      </div>

      <div className="exp-list">
        <div data-reveal className="exp-item">
          <div className="exp-date">MAR 2026 — MAY 2026</div>
          <div>
            <h3 className="exp-role">
              Frontend Development &amp; SEO Intern{" "}
              <span className="acc">· JouleWorx</span>
            </h3>
            <ul className="point-list">
              <li className="point">
                <span className="acc">→</span>On the Kin landing page the hero
                collapses into the navbar as you scroll. I tied that transition to
                scroll position and made it hold up across screen sizes — UI
                engagement went up 25%.
              </li>
              <li className="point">
                <span className="acc">→</span>Set up the agency&apos;s blog and
                journal from the directory structure up, with custom styling that
                stays consistent across screen sizes and cut frontend load times
                by 40%.
              </li>
              <li className="point">
                <span className="acc">→</span>Built the product section&apos;s
                cursor-responsive phone animation, with IntersectionObserver firing
                context-aware tooltips as it scrolls into view — more time on the
                section and better feature discovery.
              </li>
              <li className="point">
                <span className="acc">→</span>Wrote SEO-structured content and
                tracked site health through Google Search Console — organic
                traffic climbed 30%.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
