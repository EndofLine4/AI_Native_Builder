import React from 'react';
import './About.scss';

const passions = [
  {
    num: '01',
    title: 'CINEMA',
    body: "From Hitchcock's suspense to Wes Anderson's symmetry, from Criterion classics to contemporary masterpieces. Every frame tells a story, and every story shapes perspective.",
    accent: 'amber',
  },
  {
    num: '02',
    title: 'ART',
    body: 'Where color meets canvas, where design meets purpose. From museum galleries to digital interfaces, art is the language that transcends code.',
    accent: 'silver',
  },
  {
    num: '03',
    title: 'MUSIC',
    body: 'Jazz in coffee shops, vinyl on rainy days, soundtracks that move the soul. Every project has its playlist, every milestone its melody.',
    accent: 'amber',
  },
  {
    num: '04',
    title: 'TECHNOLOGY',
    body: 'Building the future with AI, React, and modern web technologies. Where innovation meets craft, where logic dances with creativity.',
    accent: 'silver',
  },
  {
    num: '05',
    title: 'NATURE',
    body: 'Finding inspiration in forests and gardens, in the organic patterns that inform design. The best debugging happens during walks through green spaces.',
    accent: 'amber',
  },
  {
    num: '06',
    title: 'JOURNALISM',
    body: "Every story starts with a question. Research, synthesis, narrative — the journalist's instincts translate perfectly into building with AI and code.",
    accent: 'silver',
  },
];

const About = () => (
  <section className="about" id="about">
    <div className="about__grain" aria-hidden="true" />

    <div className="about__container">
      <div className="scene-heading">
        <span className="scene-number">2.</span>
        <span className="scene-location">INT. DIRECTOR&rsquo;S SUITE &mdash; CONTINUOUS</span>
      </div>

      <div className="about__masthead">
        <h2 className="about__title">THE CHARACTER</h2>
      </div>

      <div className="about__layout">
        {/* ── Left column: portrait + bio ── */}
        <div className="about__bio-col">
          <div className="about__portrait-frame">
            {/*
              ── PORTRAIT IMAGE ───────────────────────────────────────────────
              Replace this placeholder with:
                <img src="/images/portrait.jpg" alt="Chéye Roberson" />
              ────────────────────────────────────────────────────────────────
            */}
            <div className="about__portrait-art">
              <video
                className="about__portrait-video"
                autoPlay
                muted
                playsInline
                onEnded={(e) => e.target.pause()}
              >
                <source src="/video/tigerstylevid.mp4" type="video/mp4" />
              </video>
              <div className="about__portrait-glow" aria-hidden="true" />
              <span className="about__portrait-name">CHÉYE<br />ROBERSON</span>
            </div>
            <div className="about__portrait-plate">
              <p className="about__portrait-role">DEVELOPER &middot; AI BUILDER &middot; JOURNALIST</p>
              <p className="about__portrait-city">NEW YORK, NY</p>
            </div>
          </div>

          <div className="about__director-notes">
            <p className="about__narrator">NARRATOR (V.O.)</p>
            <p className="about__note">
              Chéye isn&rsquo;t just a developer—they&rsquo;re a storyteller who happens to speak
              in code. With roots in journalism and branches reaching into AI-native
              development, they bridge worlds that rarely meet.
            </p>
            <p className="about__note">
              Every project is a new scene. Every line of code, a new line of dialogue.
              And like the best films, the work leaves you thinking long after the
              credits roll.
            </p>
          </div>
        </div>

        {/* ── Right column: contact sheet + typewriter ── */}
        <div className="about__right-col">
          <div className="about__sheet">
            <div className="about__sheet-header">
              <span className="about__sheet-label">CONTACT SHEET &mdash; PASSIONS &amp; INTERESTS</span>
              <span className="about__sheet-roll">ROLL 36</span>
            </div>
            <div className="about__sheet-grid">
              {passions.map((p) => (
                <div key={p.num} className={`about__frame about__frame--${p.accent}`}>
                  <span className="about__frame-num">{p.num}</span>
                  <h3 className="about__frame-title">{p.title}</h3>
                  <p className="about__frame-body">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about__typewriter-art" aria-hidden="true">
            <img src="/typewriter-art.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="transition">
        <span>DISSOLVE TO:</span>
      </div>
    </div>
  </section>
);

export default About;

/*I'm pasting in links to the websites that will populate the projects section of the portfolio under Now Showing. Please write the project desriptions for each of them in the same cinematic style you're currenlty using. Scan the websites if it helps summarize what the apps are about. Place these projects ahead of the projects currently mentioned in the portfolio. All of these projects are more recent and made with the help of AI. The others were coded from scratch. BRAC and Dominicks were never presented for live use, but only created on spec to practce code. BCM media was a sucessful redesign of the company website. Please take screen shots to use as thumbnails for each project. Let me know if you can't take the screenshots. When the project is clicked on it leads the visitor to the respective website. 
1. This is a UI/UX project, a mock redesign of the current omny website. The second link is the current omny website so you can comment on the improvements made. ( My redesign, 1) https://omny-app-redesign.lovable.app 
2) The original, https://omny.info/ )
2. https://endofline4.github.io/DashSign/ This is a driving game meant to find a fun way to teach people how to use American Sign language inspired by my son who's autistic and non-verbal.
3. Thhis project was inspired by my son who's non verbal autistic and lead to the asl the car driving ga,e also featured in my projects.
4. https://agent-6a0649b68a7ebbe48b59f2f7--pardna.netlify.app/pardna.html This app is a solution for small businesses that find it hard to secure a bank loan. Instead, they can turn to their small business community to help them with their financial needs.
5. Link to LoomPulse project: https://loom-pulse-pro.base44.app Takes notes and follow up action items from teh Loom video */