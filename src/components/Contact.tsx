export default function Contact() {
  return (
    <section id="contact" className="section" data-screen-label="06 CONTACT" style={{ paddingBottom: 40 }}>
      <div data-reveal className="section-index solo">
        <span className="acc">06</span> <span className="faint">/</span> CONTACT
      </div>

      <div data-reveal className="contact-block">
        <h2 className="contact-title">
          Got a project in mind?<br />
          <span className="acc">Let&apos;s build it.</span>
        </h2>
        <p className="contact-sub">
          I&apos;m always up for frontend work, freelance builds, or a good
          conversation about UI, motion, and performance. I read every message.
        </p>
        <div className="contact-actions">
          <a href="mailto:neekita635@gmail.com" className="btn-primary">
            → neekita635@gmail.com
          </a>
        </div>
        <div className="contact-social">
          <a href="#" className="social-link">GitHub ↗</a>
          <a href="#" className="social-link">LinkedIn ↗</a>
          <a href="#" className="social-link">Resume ↗</a>
        </div>
      </div>
    </section>
  );
}
