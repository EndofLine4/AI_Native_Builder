import React from 'react';
import './Reel.scss';

/*
  ── HOW TO ADD THUMBNAIL IMAGES ───────────────────────────────────────────────
  1. Copy your images to  public/images/reel/
     e.g.  public/images/reel/gs-01.jpg
  2. Add an  img  property to the matching entry in the articles array:
        img: '/images/reel/gs-01.jpg'
  3. The component will render <img> instead of the placeholder div.
  ─────────────────────────────────────────────────────────────────────────────
*/

const articles = [
  // ── Greenwich Sentinel — Arts & Culture ────────────────────────────────────
  {
    id: 'GS-01',
    label: 'ARTS — THE SENTINEL',
    title: 'Backcountry Jazz Concert Helps Fund Music Education',
    url: 'https://www.greenwichsentinel.com/2016/11/11/backcountry-jazz-concert-helps-fund-music-education/',
    tone: 'amber',
    img: '/images/backcountryjazz.jpg',
  },
  {
    id: 'GS-02',
    label: 'ARTS — THE SENTINEL',
    title: 'Terra Nova: The Landscapes of Hazel Jarvis',
    url: 'https://www.greenwichsentinel.com/2016/11/04/terra-nova-the-landscapes-of-hazel-jarvis/',
    tone: 'amber',
    img: '/images/hazel_jarvis.jpg',
  },
  {
    id: 'GS-03',
    label: 'ARTS — THE SENTINEL',
    title: "The Vanished Novelist: Actress Performs 'Agatha Christie Is Missing' at Greenwich Library",
    url: 'https://www.greenwichsentinel.com/2016/10/28/the-vanished-novelist-actress-performs-agatha-christie-is-missing-at-greenwich-library/',
    tone: 'amber',
    img: '/images/holmes_as_christie.jpg',
  },
  // ── Greenwich Sentinel — Community & Local ─────────────────────────────────
  {
    id: 'GS-04',
    label: 'COMMUNITY — THE SENTINEL',
    title: 'Autism Spectrum Disorder Emergency Training Session Held at YMCA',
    url: 'https://www.greenwichsentinel.com/2016/10/28/autism-spectrum-disorder-emergency-training-session-held-at-ymca/',
    tone: 'sepia',
    img: '/images/Reeves_asd.jpg',
  },
  {
    id: 'GS-05',
    label: 'LOCAL — THE SENTINEL',
    title: 'Neighbor to Neighbor: Building Approved on Church Property',
    url: 'https://www.greenwichsentinel.com/2016/10/21/neighbor-to-neighbor-building-approved-on-church-property/',
    tone: 'sepia',
    img: '/images/neighbor2neighbor.png',
  },
  // ── Greenwich Sentinel — Features ──────────────────────────────────────────
  {
    id: 'GS-06',
    label: 'FEATURE — THE SENTINEL',
    title: 'A Photographic Walk Through History with Fred Watkins',
    url: 'https://www.greenwichsentinel.com/2016/08/26/a-photographic-walk-through-history-with-fred-watkins/',
    tone: 'amber',
    img: '/images/fredwatkins.jpg',
  },
  {
    id: 'GS-07',
    label: 'FEATURE — THE SENTINEL',
    title: 'The Greenwich House: Smart Living, Healthy Living',
    url: 'https://www.greenwichsentinel.com/2016/07/29/the-greenwich-house-smart-living-healthy-living/',
    tone: 'amber',
    img: '/images/eco_home.jpg',
  },
  // ── Medium — Reviews & Essays ───────────────────────────────────────────────
  {
    id: 'MED-01',
    label: 'REVIEW — MEDIUM',
    title: 'Prima Facie: Infused with Dragon Fire',
    url: 'https://medium.com/@cheyerobe/prima-facie-infused-with-dragon-fire-135dbe1ab675',
    tone: 'indigo',
    img: '/images/jodie_prima.png',
  },
  {
    id: 'MED-02',
    label: 'REVIEW — MEDIUM',
    title: 'Memnon: Defender of the Apple',
    url: 'https://medium.com/@cheyerobe/memnon-defender-of-the-apple-33fd8128ea3e',
    tone: 'indigo',
    img: '/images/memnon.png',
  },
  // ── CT Post — Local News ────────────────────────────────────────────────────
  {
    id: 'CTP-01',
    label: 'LOCAL — CT POST',
    title: 'Trumbull Residents at Odds Over Zoning Change',
    url: 'https://www.ctpost.com/local/article/Trumbull-residents-at-odds-over-zoning-change-8321781.php',
    tone: 'steel',
    img: '/images/trumbull_zoning.png',
  },
  {
    id: 'CTP-02',
    label: 'LOCAL — CT POST',
    title: "Cassetti Lauds Ansonia's Progress",
    url: 'https://www.ctpost.com/local/article/Cassetti-lauds-Ansonia-s-progress-10591737.php',
    tone: 'steel',
    img: '/images/cassetti_ansonia.png',
  },
  {
    id: 'CTP-03',
    label: 'NEWS — CT POST',
    title: 'Tigers, Bears, and Backpacks at Beardsley',
    url: 'https://www.ctpost.com/news/article/Tigers-Bears-and-backpacks-at-Beardsley-6389624.php',
    tone: 'steel',
    img: '/images/backpacks_ctpost.png',
  },
];

// Duplicate set for seamless loop
const frames = [
  ...articles,
  ...articles.map(a => ({ ...a, id: `${a.id}-B` })),
];

const HOLE_COUNT = 36;

const Reel = () => (
  <div className="reel" aria-label="Film reel — published articles">
    <div className="reel__label">
      <span>REEL 1</span>
      <span className="reel__label-sub">PUBLISHED WORKS — HOVER TO PAUSE — CLICK TO READ</span>
    </div>

    <div className="reel__strip">
      {/* Sprocket holes — top */}
      <div className="reel__holes" aria-hidden="true">
        {Array.from({ length: HOLE_COUNT }, (_, i) => (
          <div key={i} className="reel__hole" />
        ))}
      </div>

      {/* Frame track */}
      <div className="reel__track">
        <div className="reel__frames">
          {frames.map((frame) => {
            const displayId = frame.id.replace(/-B$/, '');
            return (
              <a
                key={frame.id}
                href={frame.url}
                target="_blank"
                rel="noopener noreferrer"
                className="reel__frame-anchor"
                aria-label={`Read article: ${frame.title}`}
              >
                <figure className={`reel__frame reel__frame--${frame.tone} reel__frame--link`}>
                  {frame.img ? (
                    <img src={frame.img} alt={frame.title} className="reel__frame-img" />
                  ) : (
                    <div className="reel__frame-placeholder" aria-hidden="true">
                      <span className="reel__frame-id">{displayId}</span>
                    </div>
                  )}
                  <div className="reel__frame-overlay" aria-hidden="true">
                    <p className="reel__frame-title">{frame.title}</p>
                    <span className="reel__frame-cta">READ →</span>
                  </div>
                  <figcaption className="reel__frame-caption">{frame.label}</figcaption>
                </figure>
              </a>
            );
          })}
        </div>
      </div>

      {/* Sprocket holes — bottom */}
      <div className="reel__holes" aria-hidden="true">
        {Array.from({ length: HOLE_COUNT }, (_, i) => (
          <div key={i} className="reel__hole" />
        ))}
      </div>
    </div>
  </div>
);

export default Reel;
