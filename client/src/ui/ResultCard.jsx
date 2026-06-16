import React from "react";
function SuccessArc({ pct }) {
  const r = 22;
  const cx = 28;
  const cy = 28;
  const circ = 2 * Math.PI * r;
  const filled = (pct / 100) * circ;
  const color = pct >= 75 ? "#34d399" : "#fbbf24";
  const label =
    pct >= 85
      ? "Excellent 🔥"
      : pct >= 75
        ? "Strong 💪"
        : pct >= 65
          ? "Solid ✨"
          : "Growing 🌱";

  return (
    <div className="flex flex-col items-center gap-1 flex-shrink-0">
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        aria-label={`${pct}% success`}
      >
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#1e2130"
          strokeWidth="4"
        />
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ - filled}
          transform={`rotate(-90 ${cx} ${cy})`}
          style={{
            transition: "stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
        <text
          x={cx}
          y={cy - 3}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={color}
          fontFamily="'JetBrains Mono', monospace"
          fontSize="11"
          fontWeight="600"
        >
          {pct}%
        </text>
        <text
          x={cx}
          y={cy + 10}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#5a5f7a"
          fontFamily="'Space Grotesk', sans-serif"
          fontSize="6"
        >
          success
        </text>
      </svg>
      <span
        className="text-[0.6rem] text-center leading-tight"
        style={{ color, maxWidth: "60px" }}
      >
        {label}
      </span>
    </div>
  );
}

function SectionBlock({ color, dot, title, desc, items, twoCol = false }) {
  return (
    <div className="px-5 py-4 flex flex-col gap-2.5">
      <div>
        <div
          className={`flex items-center gap-1.5 text-md font-semibold uppercase tracking-widest mb-0.5 ${color}`}
        >
          <span className={`w-1 h-1 rounded-full ${dot} flex-shrink-0`} />
          {title}
        </div>
        <p className="text-sm text-[#5a5f7a] leading-relaxed">{desc}</p>
      </div>
      <ul
        className={`flex flex-col gap-1.5 ${twoCol ? "sm:grid sm:grid-cols-2" : ""}`}
      >
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-2 text-[0.8rem] text-[#9ca3b8] leading-relaxed"
          >
            <span className="text-violet-400/70 font-semibold flex-shrink-0 font-mono text-[0.7rem] mt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div
      className="w-full mt-6 rounded-xl overflow-hidden animate-fadeUp"
      style={{ background: "#111827", border: "1px solid #1F2937" }}
    >
      {/* Header */}
      <div
        className="flex items-start justify-between gap-4 px-5 py-4"
        style={{ borderBottom: "1px solid #1e2130" }}
      >
        <div className="flex-1 min-w-0">
          <p className="font-mono text-xs text-[#5a5f7a] uppercase tracking-widest mb-1">
            Here's your step-by-step plan 🎯
          </p>
          <h2 className="text-lg font-semibold text-white leading-snug">
            {result.motivation ||
              "You've already done the hardest part — deciding to start."}
          </h2>
        </div>
        {result.successProbability > 0 && (
          <SuccessArc pct={result.successProbability} />
        )}
      </div>

      {/* What to do */}
      <div style={{ borderBottom: "1px solid #1e2130" }}>
        <SectionBlock
          color="text-emerald-400"
          dot="bg-emerald-400"
          title="What to do — in order"
          desc="Clear milestones. Take them one at a time."
          items={result.timeline}
        />
      </div>

      {/* Keep an eye on these */}
      <div style={{ borderBottom: "1px solid #1e2130" }}>
        <SectionBlock
          color="text-amber-400"
          dot="bg-amber-400"
          title="Keep an eye on these"
          desc="Know these going in and you'll stay ahead."
          items={result.risks || result.challenges || []}
        />
      </div>

      {/* Tips */}
      <div style={{ borderBottom: "1px solid #1e2130" }}>
        <SectionBlock
          color="text-blue-400"
          dot="bg-blue-400"
          title="Tips to boost your chances"
          desc="Pick even 2–3 of these and you're already ahead."
          items={result.suggestions}
          // twoCol
        />
      </div>

      {/* Footer */}
      <div
        className="px-5 py-3 text-center"
        style={{ background: "rgba(124,92,252,0.04)" }}
      >
        <p className="text-xs text-[#5a5f7a]">
          💡 <span className="text-violet-400/80">Pro tip:</span> Screenshot
          this, revisit weekly, and check off each step. Progress compounds.
        </p>
      </div>
    </div>
  );
}
