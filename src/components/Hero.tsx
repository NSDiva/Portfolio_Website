export default function Hero() {
  return (
    <section id="top" className="hero">
      <div data-reveal className="status-badge">
        <span className="status-dot" />
        OPEN TO FULLSTACK ROLES &amp; STILL LOOKING AROUND
      </div>

      <div className="hero-grid">
        <div>
          <h1 data-reveal className="hero-title">
            Developer.<br />Designer.<br />
            <span className="acc">Builder.</span>
          </h1>
          <p data-reveal className="hero-sub">
            I build responsive interfaces with{" "}
            <span className="strong">React</span> and{" "}
            <span className="strong">Next.js</span>. Clean layouts, scroll-linked
            motion, and code that holds up once it&apos;s in production.
          </p>
          <div data-reveal className="hero-actions">
            <a href="#work" className="btn-primary">→ view work</a>
            <a href="#contact" className="btn-ghost">↗ get in touch</a>
          </div>
        </div>

        <div data-reveal className="terminal">
          <div className="term-bar">
            <span className="term-dot red" />
            <span className="term-dot yellow" />
            <span className="term-dot green" />
            <span className="term-title">neekita@sahu: ~</span>
          </div>
          <div className="term-body">
            <div><span className="acc">$</span> whoami</div>
            <div className="term-out">FullStack Developer · Software Engineer</div>
            <div className="term-gap"><span className="acc">$</span> cat stack.txt</div>
            <div className="term-out">React · Next.js · TypeScript · Three.js</div>
            <div className="term-gap"><span className="acc">$</span> status --now</div>
            <div className="term-out">shipping responsive interfaces</div>
            <div className="term-gap"><span className="acc">$</span> <span className="term-cursor" /></div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue">
        SCROLL
        <span className="scroll-arrow">↓</span>
      </a>
    </section>
  );
}
