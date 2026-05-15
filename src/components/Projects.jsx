import React, { useState } from 'react';
import './Projects.scss';

/*
  ── HOW TO ADD PROJECT POSTER IMAGES ────────────────────────────────────────
  1. Copy your image to  public/images/projects/
  2. Add an  img  property to the project object, e.g.:
        img: '/images/projects/portfolio.jpg'
  3. The <img> element replaces the gradient placeholder automatically.
  ─────────────────────────────────────────────────────────────────────────────
*/

const projects = [
  // ── AI-Native builds ─────────────────────────────────────────────────────
  {
    scene:       '3A',
    title:       'OMNY Redesigned',
    tagline:     'The City That Never Swipes',
    category:    'UI/UX REDESIGN',
    description: "New York never stops moving — but its transit app did. A complete reimagining of OMNY's contactless payment experience: bolder hierarchy, cleaner wayfinding, and an interface as fluid as the city it serves. Where the original stalled, this redesign accelerates.",
    tech:        ['React', 'TypeScript', 'Lovable AI', 'Figma'],
    tone:        'midnight',
    url:         'https://omny-app-redesign.lovable.app',
    img:         '/images/img_omny.png',
  },
  {
    scene:       '3B',
    title:       'DashSign',
    tagline:     'Every Hand Tells a Story',
    category:    'ACCESSIBILITY · GAME',
    description: "Born from a father's love for his non-verbal autistic son — a driving game where your hands do the talking. Players learn American Sign Language not through drills, but through speed and the open road. Note: you'll need to enable your webcam to play. The highway becomes a classroom.",
    tech:        ['JavaScript', 'TensorFlow.js', 'Canvas API', 'GitHub Pages'],
    tone:        'amber',
    url:         'https://endofline4.github.io/DashSign/',
    img:         '/images/img_dashsign.png',
  },
  {
    scene:       '3C',
    title:       'Pardna',
    tagline:     'Community Is the Collateral',
    category:    'FINTECH · COMMUNITY',
    description: 'When the bank says no, your people say yes. Rooted in centuries-old susu and pardna lending traditions, this platform digitizes community capital — no credit checks, no rejection letters, just small businesses backing each other. Pool funds. Build trust. Access capital.',
    tech:        ['React', 'Claude AI', 'Node.js', 'Netlify'],
    tone:        'teal',
    url:         'https://agent-6a0649b68a7ebbe48b59f2f7--pardna.netlify.app/pardna.html',
    img:         '/images/img_pardna.png',
  },
  {
    scene:       '3D',
    title:       'Dressstack',
    tagline:     'Your Closet Has Chemistry',
    category:    'FASHION · AI',
    description: "Every outfit is a scene waiting to happen. Dressstack is an AI-powered wardrobe assistant that reads your style and writes the next chapter — suggesting fits, organizing collections, and turning the daily question of what to wear into a moment of creative expression.",
    tech:        ['React', 'Claude AI', 'Figma'],
    tone:        'midnight',
    url:         'https://www.loom.com/share/d4bc0d9bc6334ca1a6f3c13347381e98',
    img:         '/images/img_dressstack.png',
  },
  {
    scene:       '3E',
    title:       'BLAPP Redesigned',
    tagline:     'The UX Has Entered the Building',
    category:    'UI/UX REDESIGN',
    description: "Some apps just need a second take. The BLAPP redesign strips back what doesn't serve the user and rebuilds the experience from the inside out — cleaner flows, sharper visual language, and an interface that finally matches the ambition behind the product.",
    tech:        ['React', 'Figma', 'Claude AI'],
    tone:        'amber',
    url:         'https://www.loom.com/share/6e279e7649d24b00ac64511a51002798',
    img:         '/images/img_blapp.png',
  },
  {
    scene:       '3F',
    title:       'LoomPulse',
    tagline:     'Every Frame Has a Follow-Up',
    category:    'AI · PRODUCTIVITY',
    description: "The meeting ended. The recording sat there. LoomPulse steps in — running your Loom videos through an AI lens to surface the notes you meant to take and the action items you almost forgot. Your next move, already waiting for you.",
    tech:        ['Loom API', 'Claude AI', 'React', 'Base44'],
    tone:        'crimson',
    url:         'https://loom-pulse-pro.base44.app',
    img:         '/images/img_loom.png',
  },
  // ── Coded from scratch ────────────────────────────────────────────────────
  {
    scene:       '3G',
    title:       'Former Web Dev Portfolio',
    tagline:     "A Developer's Odyssey",
    category:    'WEB DEVELOPMENT',
    description: 'A React-based portfolio showcasing the intersection of technology and artistry. Built with modern tools while maintaining timeless aesthetic principles.',
    tech:        ['React', 'SCSS', 'Figma', 'JavaScript'],
    tone:        'midnight',
    url:         'https://agent-6a065d0debd6dfd--illustrious-kelpie-9c45a8.netlify.app/',
  },
  {
    scene:       '3H',
    title:       "Dominick's Restaurant",
    tagline:     'Where Every Meal is a Memory',
    category:    'REDESIGN · SPEC',
    description: 'Unfussy, decades-old Italian eatery brought to life on the web. Capturing the energy and warmth of communal tables in a digital space for online ordering and discovery.',
    tech:        ['Gatsby.js', 'GraphQL', 'SCSS', 'Figma'],
    tone:        'amber',
    pending:     true,
  },
  {
    scene:       '3I',
    title:       'BRAC',
    tagline:     'Bronx River Art Center',
    category:    'NON-PROFIT · SPEC',
    description: 'A non-profit providing a forum for artists and youth to transform creativity into vision. Redesigned for easy navigation with authentication features.',
    tech:        ['Gatsby.js', 'GraphQL', 'Auth0', 'SCSS'],
    tone:        'teal',
    pending:     true,
  },
  {
    scene:       '3J',
    title:       'BCM Media',
    tagline:     'Strategy in Motion',
    category:    'BUSINESS SITE',
    description: 'Strategic media planning and buying services presented through clean design. Updated from text-heavy to visual-first while retaining original branding.',
    tech:        ['WordPress', 'CSS', 'Photoshop'],
    tone:        'crimson',
    url:         'https://bcmmedia.biz/',
    img:         '/images/img_bcm.png',
  },
];

const miniProjects = [
  {
    title:       'Halloween Tic Tac Toe',
    description: 'Halloween themed game built to exercise logic and problem solving skills while having fun with vanilla JavaScript.',
    tech:        ['HTML', 'CSS', 'JavaScript'],
    url:         'https://endofline4.github.io/halloween-tic-tac-toe/',
  },
];

const Projects = () => {
  const [pendingAlert, setPendingAlert] = useState(null);

  return (
    <section className="projects" id="projects">
      <div className="projects__grain" aria-hidden="true" />

      <div className="projects__container">
        <div className="scene-heading">
          <span className="scene-number">3.</span>
          <span className="scene-location">INT. PROJECT ARCHIVE &mdash; VARIOUS</span>
        </div>

        {/* Theater marquee */}
        <div className="projects__marquee">
          <div className="projects__marquee-stars" aria-hidden="true">
            &#9733;&nbsp;&#9733;&nbsp;&#9733;&nbsp;&#9733;&nbsp;&#9733;
          </div>
          <h2 className="projects__headline">
            <span className="projects__now">NOW</span>
            <span className="projects__showing">SHOWING</span>
          </h2>
          <p className="projects__sub">SELECTED WORKS</p>
          <div className="projects__marquee-stars" aria-hidden="true">
            &#9733;&nbsp;&#9733;&nbsp;&#9733;&nbsp;&#9733;&nbsp;&#9733;
          </div>
        </div>

        {/* Poster grid */}
        <div className="projects__grid">
          {projects.map((p, i) => (
            <article
              key={i}
              className={`poster poster--${p.tone}${p.url ? ' poster--linked' : ''}${p.pending ? ' poster--pending' : ''}`}
              onClick={p.pending ? () => setPendingAlert(pendingAlert === i ? null : i) : undefined}
            >
              {p.url && (
                <a
                  className="poster__link"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${p.title}`}
                />
              )}

              {/* Pending tooltip overlay */}
              {p.pending && pendingAlert === i && (
                <div
                  className="poster__pending-overlay"
                  onClick={(e) => { e.stopPropagation(); setPendingAlert(null); }}
                  aria-live="polite"
                >
                  <div className="poster__pending-notice">
                    <span className="poster__pending-stars">&#9733;&nbsp;&#9733;&nbsp;&#9733;</span>
                    <p className="poster__pending-label">PRODUCTION NOTICE</p>
                    <h4 className="poster__pending-title">PENDING<br />RE-DEPLOY</h4>
                    <p className="poster__pending-sub">Back in theaters soon.</p>
                    <span className="poster__pending-stars">&#9733;&nbsp;&#9733;&nbsp;&#9733;</span>
                  </div>
                </div>
              )}

              {/* Poster image area */}
              <div className="poster__img-wrap">
                {p.img ? (
                  <img src={p.img} alt={p.title} className="poster__img" />
                ) : (
                  <div className="poster__img-placeholder" aria-hidden="true" />
                )}
                <div className="poster__img-overlay" aria-hidden="true" />
                <span className="poster__scene-badge">SCENE {p.scene}</span>
              </div>

              {/* Poster body */}
              <div className="poster__body">
                <p className="poster__category">{p.category}</p>
                <h3 className="poster__title">{p.title}</h3>
                <p className="poster__tagline">&ldquo;{p.tagline}&rdquo;</p>
                <p className="poster__description">{p.description}</p>

                <div className="poster__credits">
                  <p className="poster__credits-label">TECH STACK</p>
                  <ul className="poster__tech">
                    {p.tech.map((t, idx) => <li key={idx}>{t}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Shorts / mini projects */}
        <div className="shorts">
          <div className="shorts__header">
            <span className="scene-marker">SCENE 4</span>
            <h3 className="shorts__title">EXPERIMENTS &amp; EXPLORATIONS</h3>
          </div>
          <div className="shorts__grid">
            {miniProjects.map((p, i) => (
              <div key={i} className="short-card">
                {p.url && (
                  <a
                    className="short-card__link"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${p.title}`}
                  />
                )}
                <h4 className="short-card__title">{p.title}</h4>
                <p className="short-card__desc">{p.description}</p>
                <div className="short-card__tech">
                  {p.tech.map((t, idx) => <span key={idx}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="transition">
          <span>FADE TO BLACK:</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
