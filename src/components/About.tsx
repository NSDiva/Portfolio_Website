"use client";

import { useState, useEffect } from "react";

const logs = [
  "building responsive UIs",
  "wiring up REST APIs",
  "tuning scroll animations",
  "chasing down state bugs",
  "fixing SEO",
  "shipping to Vercel",
];

function LogTrack() {
  return (
    <>
      {logs.map((t) => (
        <span key={t} className="log-item">
          Log&gt; {t}
          <span className="sep">/</span>
        </span>
      ))}
    </>
  );
}

const radarNodes = [
  {
    id: "react",
    name: "React & Next.js",
    x: "50%",
    y: "35%",
    desc: "Designing highly performant architectures, dynamic page transitions, and stable state structures."
  },
  {
    id: "three",
    name: "Three.js & WebGL",
    x: "30%",
    y: "65%",
    desc: "Creating interactive 3D elements, canvas-based simulations, and shader effects on the web."
  },
  {
    id: "motion",
    name: "Motion & UX",
    x: "72%",
    y: "55%",
    desc: "Developing custom scroll triggers, micro-interactions, and animations that direct user focus."
  }
];

const tracks = [
  { title: "Low-Vocal Lofi Focus", bpm: "72 BPM", desc: "Low-vocal, high-focus stuff. Plays while pushing pixels." },
  { title: "Synthwave Terminal Loop", bpm: "115 BPM", desc: "Synthesizer rhythms for late-night refactoring sprints." },
  { title: "Ambient Space Codec", bpm: "60 BPM", desc: "Deep ambient textures for solving complex state bugs." }
];

export default function About() {
  // Clock state
  const [timeString, setTimeString] = useState<string | null>(null);
  
  // Interactive Radar State
  const [activeNode, setActiveNode] = useState(radarNodes[0]);
  
  // Fuel/Overclock State
  const [isOverclocked, setIsOverclocked] = useState(false);
  
  // Audio state
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      setTimeString(new Date().toLocaleTimeString("en-US", options));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOverclock = () => {
    if (isOverclocked) return;
    setIsOverclocked(true);
    setTimeout(() => {
      setIsOverclocked(false);
    }, 2500);
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const currentTrack = tracks[currentTrackIndex];

  // Dynamic animation speeds based on active track BPM
  const getBpmSpeed = () => {
    if (currentTrackIndex === 0) return { spin: "4s", vis: "1.2s" };
    if (currentTrackIndex === 1) return { spin: "2s", vis: "0.7s" };
    return { spin: "6s", vis: "1.8s" };
  };
  const speeds = getBpmSpeed();

  return (
    <section id="about" className="section" data-screen-label="01 ABOUT">
      <div data-reveal className="section-head">
        <div className="section-index">
          <span className="acc">01</span> <span className="faint">/</span> ABOUT
        </div>
        <div className="section-note">WHO I AM</div>
      </div>

      <p data-reveal className="about-lead">
        I&apos;m a Computer Science grad and frontend developer, and I care about
        how an interface feels to use, not just how it looks in a screenshot.
        Most of my work lives in React and Next.js, I take designs and turn them
        into responsive, accessible UIs that are ready to ship. During my
        internship at JouleWorx I built scroll-linked animations and the
        responsive journal architecture — load times dropped 40% and organic
        traffic rose 30% — and spent time on SEO and content along the way. Lately I&apos;ve been getting into 3D on the web with Three.js,
        and I lean on Cursor and Claude to move faster. The small details are
        usually what I end up obsessing over.
      </p>

      {/* Telemetry Dashboard replacing cards */}
      <div data-reveal className="telemetry-grid">
        
        {/* Panel 1: Time & Identity Telemetry */}
        <div className="telemetry-panel">
          <div className="panel-header">
            <span className="panel-title">
              <span className="ping-pulse" />
              SYSTEM TELEMETRY
            </span>
            <span className="panel-index">[01]</span>
          </div>
          <div className="panel-body">
            <div className="clock-display">
              {timeString ? `${timeString} IST` : "00:00:00 IST"}
            </div>
            <div style={{ marginTop: "12px" }}>
              <div className="telemetry-row">
                <span>TARGET COORDS</span>
                <span className="telemetry-val">28.5355° N, 77.3910° E</span>
              </div>
              <div className="telemetry-row">
                <span>SYSTEM STATUS</span>
                <span className="telemetry-val acc">ACTIVE</span>
              </div>
              <div className="telemetry-row">
                <span>NETWORK LATENCY</span>
                <span className="telemetry-val">24ms</span>
              </div>
              <div className="telemetry-row">
                <span>FOCUS VIBE</span>
                <span className="telemetry-val">Pushing Pixels</span>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 2: Interactive Skill Radar */}
        <div className="telemetry-panel">
          <div className="panel-header">
            <span className="panel-title">
              🌐 TARGET SCANNER
            </span>
            <span className="panel-index">[02]</span>
          </div>
          <div className="panel-body">
            <div className="radar-scope-container">
              <div className="radar-scope">
                <div className="radar-grid-circle c1" />
                <div className="radar-grid-circle c2" />
                <div className="radar-grid-circle c3" />
                <div className="radar-crosshair-h" />
                <div className="radar-crosshair-v" />
                <div className="radar-sweep" />
                {radarNodes.map((node) => (
                  <button
                    key={node.id}
                    className={`radar-node ${activeNode.id === node.id ? "active" : ""}`}
                    style={{ left: node.x, top: node.y }}
                    onClick={() => setActiveNode(node)}
                    aria-label={`Scan ${node.name}`}
                  >
                    <span className="radar-node-pulse" />
                  </button>
                ))}
              </div>
              <div className="radar-details">
                <div className="node-name">{activeNode.name}</div>
                <div>{activeNode.desc}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 3: Resource Monitor */}
        <div className="telemetry-panel">
          <div className="panel-header">
            <span className="panel-title">
              ⚡ SYSTEM FUEL
            </span>
            <span className="panel-index">[03]</span>
          </div>
          <div className="panel-body">
            <div className="resource-monitor">
              <div className="resource-item">
                <div className="resource-label-row">
                  <span>CURIOSITY ENGINE</span>
                  <span>{isOverclocked ? "100%" : "98%"}</span>
                </div>
                <div className="resource-bar-bg">
                  <div 
                    className={`resource-bar-fill ${isOverclocked ? "active" : ""}`} 
                    style={{ width: isOverclocked ? "100%" : "98%" }} 
                  />
                </div>
              </div>

              <div className="resource-item">
                <div className="resource-label-row">
                  <span>CAFFEINE RESERVES</span>
                  <span>{isOverclocked ? "99%" : "72%"}</span>
                </div>
                <div className="resource-bar-bg">
                  <div 
                    className={`resource-bar-fill ${isOverclocked ? "active" : ""}`} 
                    style={{ width: isOverclocked ? "99%" : "72%" }} 
                  />
                </div>
              </div>

              <div className="resource-item">
                <div className="resource-label-row">
                  <span>AI COPILOT POWER</span>
                  <span>{isOverclocked ? "95%" : "85%"}</span>
                </div>
                <div className="resource-bar-bg">
                  <div 
                    className={`resource-bar-fill ${isOverclocked ? "active" : ""}`} 
                    style={{ width: isOverclocked ? "95%" : "85%" }} 
                  />
                </div>
              </div>
            </div>
            <button 
              className={`overclock-btn ${isOverclocked ? "active" : ""}`}
              onClick={handleOverclock}
            >
              {isOverclocked ? "⚡ INJECTING CAFFEINE..." : "[ BOOSTER CHARGE ]"}
            </button>
          </div>
        </div>

        {/* Panel 4: Audio station */}
        <div className="telemetry-panel">
          <div className="panel-header">
            <span className="panel-title">
              ♫ AUDIO STATION
            </span>
            <span className="panel-index">[04]</span>
          </div>
          <div className="panel-body">
            <div className="music-player">
              <div 
                className={`vinyl-disc ${isPlaying ? "playing" : ""}`}
                style={{ animationDuration: isPlaying ? speeds.spin : "0s" }}
              >
                <div className="vinyl-label" />
              </div>
              <div className="track-meta">
                <div className="track-title">{currentTrack.title}</div>
                <div className="track-artist">{currentTrack.bpm}</div>
              </div>
            </div>
            
            <div 
              className={`audio-visualizer ${isPlaying ? "playing" : ""}`}
              style={{ "--vis-duration": speeds.vis } as React.CSSProperties}
            >
              <div className="vis-bar" />
              <div className="vis-bar" />
              <div className="vis-bar" />
              <div className="vis-bar" />
              <div className="vis-bar" />
              <div className="vis-bar" />
              <div className="vis-bar" />
              <div className="vis-bar" />
            </div>

            <div className="music-controls">
              <button 
                className="music-btn"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? "PAUSE" : "PLAY"}
              </button>
              <button 
                className="music-btn"
                onClick={handleNextTrack}
              >
                NEXT TRACK
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="log-marquee-wrap">
        <div className="log-marquee">
          <div style={{ display: "flex" }}>
            <LogTrack />
          </div>
          <div style={{ display: "flex" }} aria-hidden="true">
            <LogTrack />
          </div>
        </div>
      </div>
    </section>
  );
}
