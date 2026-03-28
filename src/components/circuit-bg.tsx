"use client";

export default function CircuitBG() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-100"
      viewBox="0 0 800 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Horizontal lines */}
      <line x1="0" y1="100" x2="800" y2="100" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="1000" className="animate-circuit" />
      <line x1="0" y1="200" x2="800" y2="200" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="1000" style={{ animationDelay: "0.5s" }} className="animate-circuit" />
      <line x1="0" y1="300" x2="800" y2="300" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="1000" style={{ animationDelay: "1s" }} className="animate-circuit" />
      <line x1="0" y1="400" x2="800" y2="400" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="1000" style={{ animationDelay: "1.5s" }} className="animate-circuit" />
      <line x1="0" y1="500" x2="800" y2="500" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="1000" style={{ animationDelay: "2s" }} className="animate-circuit" />

      {/* Vertical lines */}
      <line x1="100" y1="0" x2="100" y2="600" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="1000" style={{ animationDelay: "0.3s" }} className="animate-circuit" />
      <line x1="200" y1="0" x2="200" y2="600" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="1000" style={{ animationDelay: "0.8s" }} className="animate-circuit" />
      <line x1="400" y1="0" x2="400" y2="600" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="1000" style={{ animationDelay: "1.2s" }} className="animate-circuit" />
      <line x1="600" y1="0" x2="600" y2="600" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="1000" style={{ animationDelay: "1.7s" }} className="animate-circuit" />
      <line x1="700" y1="0" x2="700" y2="600" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="1000" style={{ animationDelay: "2.2s" }} className="animate-circuit" />

      {/* Intersection dots */}
      {[100, 200, 400, 600, 700].map((x) =>
        [100, 200, 300, 400, 500].map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="#222222" />
        ))
      )}

      {/* A few diagonal accent lines */}
      <line x1="200" y1="100" x2="400" y2="300" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="1000" style={{ animationDelay: "2.5s" }} className="animate-circuit" />
      <line x1="600" y1="200" x2="700" y2="400" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="1000" style={{ animationDelay: "2.8s" }} className="animate-circuit" />
    </svg>
  );
}
