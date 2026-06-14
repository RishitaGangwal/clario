import React from "react";
export default function SuccessScore({ pct }) {
  const r = 28;
  const cx = 36;
  const cy = 36;
  const circ = 2 * Math.PI * r;
  const filled = (pct / 100) * circ;

  // Always a warm, encouraging color — never red
  const color =
    pct >= 70
      ? "#34d399" // green  — great
      : pct >= 55
        ? "#fbbf24" // amber  — solid
        : "#60a5fa"; // blue   — building up

  const label =
    pct >= 80
      ? "You're very likely to nail this 🔥"
      : pct >= 65
        ? "Solid chances — keep going 💪"
        : pct >= 55
          ? "Good foundation to build on ✨"
          : "Every expert started here 🌱";

  return (
    <div className="flex flex-col items-center gap-1 flex-shrink-0">
      <svg width="80" height="80" viewBox="0 0 72 72">
        {/* background track */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#1e2130"
          strokeWidth="5"
        />
        {/* filled arc */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ - filled}
          transform="rotate(-90 36 36)"
          style={{
            transition: "stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
        {/* percentage text */}
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={color}
          fontFamily="'JetBrains Mono', monospace"
          fontSize="14"
          fontWeight="500"
        >
          {pct}%
        </text>
      </svg>
      <span className="text-[0.6rem] font-mono text-[#5a5f7a] uppercase tracking-wider">
        success score
      </span>
      <span
        className="text-[0.72rem] text-center leading-snug max-w-[110px]"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}
