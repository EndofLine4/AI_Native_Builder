import React, { useEffect, useRef } from 'react';
import './Hero.scss';

const Hero = () => {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const drops = Array.from({ length: 140 }, () => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      len:     Math.random() * 22 + 8,
      speed:   Math.random() * 3.5 + 1.2,
      opacity: Math.random() * 0.22 + 0.04,
      width:   Math.random() * 0.5 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(d => {
        const grad = ctx.createLinearGradient(d.x, d.y, d.x - 1, d.y + d.len);
        grad.addColorStop(0,   `rgba(160, 200, 240, 0)`);
        grad.addColorStop(0.5, `rgba(160, 200, 240, ${d.opacity})`);
        grad.addColorStop(1,   `rgba(160, 200, 240, 0)`);

        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 1, d.y + d.len);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = d.width;
        ctx.stroke();

        d.y += d.speed;
        if (d.y > canvas.height + d.len) {
          d.y = -d.len;
          d.x = Math.random() * canvas.width;
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero">
      {/*
        ── VIDEO BACKGROUND ────────────────────────────────────────────────
        Drop a video file at  public/videos/hero.mp4  and it will auto-play
        behind the rain layer. Recommended: a looping film noir city scene.
        ────────────────────────────────────────────────────────────────────
      */}
      <video className="hero__video" autoPlay muted loop playsInline>
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Layered atmosphere */}
      <canvas ref={canvasRef} className="hero__rain" aria-hidden="true" />
      <div className="hero__venetian"  aria-hidden="true" />
      <div className="hero__window-light" aria-hidden="true" />
      <div className="hero__spotlight" aria-hidden="true" />
      <div className="hero__vignette"  aria-hidden="true" />

      {/* Cinematic widescreen bars */}
      <div className="hero__bar hero__bar--top"    aria-hidden="true" />
      <div className="hero__bar hero__bar--bottom" aria-hidden="true" />

      {/* Stage */}
      <div className="hero__stage">
        <div className="scene-heading hero__scene-info">
          <span className="scene-number">1.</span>
          <span className="scene-location">EXT. DIGITAL NOIR CITY &mdash; NIGHT</span>
        </div>

        <div className="hero__layout">
          {/* ── Screenplay text ── */}
          <div className="hero__screenplay">
            <h2 className="hero__title">
              Where Technology<br />Meets Artistry
            </h2>

            <blockquote className="hero__quote">
              <span className="hero__quote-mark" aria-hidden="true">&ldquo;</span>
              <p className="hero__quote-text">
                The soul should always stand ajar, ready to welcome<br />the ecstatic experience.
              </p>
              <cite className="hero__quote-author">&mdash; EMILY DICKINSON</cite>
            </blockquote>

            <div className="hero__action">
              <p>
                A developer emerges from the intersection of VINTAGE CINEMA,
                MODERN TECH, and the art of STORYTELLING. They carry the tools of AI,
                the aesthetics of classic film, and a passion for creating beautiful things.
              </p>
            </div>

            <div className="hero__intro">
              <p>
                I code with <strong>React</strong> and <strong>JavaScript</strong>,
                design in <strong>Figma</strong>, and build with <strong>AI</strong>.
                As an AI Native Builder, I work with Claude, Gemini, GitHub Copilot,
                and Perplexity to craft elegant digital experiences. With a background
                in journalism, I bring keen research skills, analytics, and the ability
                to transform complex ideas into creative, accessible solutions.
              </p>
            </div>
          </div>

          {/* ── Portrait frame ── */}
          <aside className="hero__portrait" aria-label="Portrait">
            <div className="hero__portrait-frame">
              {/*
                ── PORTRAIT IMAGE ─────────────────────────────────────────
                Replace the placeholder div below with:
                  <img src="/images/portrait.jpg" alt="Chéye Roberson" />
                ───────────────────────────────────────────────────────────
              */}
              <img
                src="/images/biopic_withhat.jpg"
                alt="Chéye Roberson"
                className="hero__portrait-img"
              />
              <div className="hero__portrait-meta">
                <p className="hero__portrait-name">CHÉYE ROBERSON</p>
                <p>AI NATIVE BUILDER</p>
                <p>DEVELOPER &middot; JOURNALIST &middot; CREATOR</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Film sprocket strip */}
      <div className="hero__sprockets" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => (
          <div key={i} className="hero__sprocket-hole" />
        ))}
      </div>

      <div className="hero__cut">
        <span>CUT TO:</span>
      </div>
    </section>
  );
};

export default Hero;
