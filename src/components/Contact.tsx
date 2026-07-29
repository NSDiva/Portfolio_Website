import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="section" data-screen-label="06 CONTACT" style={{ paddingBottom: 40 }}>
      <div data-reveal className="section-index solo">
        <span className="acc">06</span> <span className="faint">/</span> CONTACT
      </div>

      <div data-reveal className="contact-block">
        <h2 className="contact-title">
          Got something you want built?<br />
          <span className="acc">Let&apos;s talk.</span>
        </h2>
        <p className="contact-sub">
          I&apos;m open to frontend roles and freelance work, and happy to talk
          shop about UI, motion, or performance. I read every message that comes
          in.
        </p>
        <div className="contact-actions">
          <a href={`mailto:${site.email}`} className="btn-primary">
            → {site.email}
          </a>
        </div>
        <div className="contact-social">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub ↗
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn ↗
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}
