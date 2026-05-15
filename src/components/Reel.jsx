import React from 'react';
import './Reel.scss';

/*
  ── HOW TO ADD REAL IMAGES ────────────────────────────────────────────────────
  1. Copy your images to  public/images/reel/
     e.g.  public/images/reel/frame-01.jpg  through  frame-08.jpg
  2. In the frames array below, add an  img  property to each entry:
        img: '/images/reel/frame-01.jpg'
  3. The component will render <img> instead of the placeholder div.
  ─────────────────────────────────────────────────────────────────────────────
*/

const frames = [
  { id: 'A01', label: 'EXT. CITY — NIGHT',       tone: 'indigo'  },
  { id: 'A02', label: 'INT. STUDIO — DAY',        tone: 'amber'   },
  { id: 'A03', label: 'CLOSE UP — DETAIL',        tone: 'sepia'   },
  { id: 'A04', label: 'EXT. STREET — DUSK',       tone: 'steel'   },
  { id: 'A05', label: 'DUTCH ANGLE',              tone: 'crimson' },
  { id: 'A06', label: 'TRACKING SHOT',            tone: 'indigo'  },
  { id: 'A07', label: 'DOLLY IN',                 tone: 'amber'   },
  { id: 'A08', label: 'FREEZE FRAME',             tone: 'sepia'   },
  // Duplicates for seamless loop
  { id: 'B01', label: 'EXT. CITY — NIGHT',       tone: 'indigo'  },
  { id: 'B02', label: 'INT. STUDIO — DAY',        tone: 'amber'   },
  { id: 'B03', label: 'CLOSE UP — DETAIL',        tone: 'sepia'   },
  { id: 'B04', label: 'EXT. STREET — DUSK',       tone: 'steel'   },
  { id: 'B05', label: 'DUTCH ANGLE',              tone: 'crimson' },
  { id: 'B06', label: 'TRACKING SHOT',            tone: 'indigo'  },
  { id: 'B07', label: 'DOLLY IN',                 tone: 'amber'   },
  { id: 'B08', label: 'FREEZE FRAME',             tone: 'sepia'   },
];

const HOLE_COUNT = 32;

const Reel = () => (
  <div className="reel" aria-label="Film reel gallery">
    <div className="reel__label">
      <span>REEL 1</span>
      <span className="reel__label-sub">SELECTED FRAMES — HOVER TO PAUSE</span>
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
          {frames.map((frame) => (
            <figure key={frame.id} className={`reel__frame reel__frame--${frame.tone}`}>
              {frame.img ? (
                <img src={frame.img} alt={frame.label} className="reel__frame-img" />
              ) : (
                <div className="reel__frame-placeholder" aria-hidden="true">
                  <span className="reel__frame-id">{frame.id}</span>
                </div>
              )}
              <figcaption className="reel__frame-caption">
                {frame.label}
              </figcaption>
            </figure>
          ))}
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
