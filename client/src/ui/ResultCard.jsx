import React from "react";
import SuccessScore from "./SuccessScore";

function SectionBlock({ color, dot, title, desc, items, twoCol = false }) {
  return (
    <div className="p-5 flex flex-col gap-3">
      <div>
        <div
          className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-0.5 ${color}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${dot} flex-shrink-0`} />
          {title}
        </div>
        <p className="text-xs text-[#5a5f7a]">{desc}</p>
      </div>
      <ul
        className={`flex flex-col gap-2 ${twoCol ? "sm:grid sm:grid-cols-2" : ""}`}
      >
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm text-[#b0b5cc] leading-relaxed"
          >
            <span className="text-[#2a2e42] flex-shrink-0 mt-0.5">—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="w-full max-w-2xl mt-8 bg-[#0f1117] border border-[#1e2130] rounded-2xl overflow-hidden animate-fadeUp">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-[#1e2130]">
        <div>
          <p className="font-mono text-[0.65rem] text-[#5a5f7a] uppercase tracking-widest mb-1">
            Your roadmap is ready
          </p>
          <h2 className="text-lg font-semibold text-white leading-snug">
            Here's your step-by-step plan 🎯
          </h2>
          <p className="text-sm text-[#5a5f7a] mt-1">
            You've already done the hardest part — deciding to start.
          </p>
        </div>
        <SuccessScore pct={result.successProbability} />
      </div>

      {/* Step-by-step plan */}
      <div className="border-b border-[#1e2130]">
        <SectionBlock
          color="text-emerald-400"
          dot="bg-emerald-400"
          title="What to do — in order"
          desc="Your goal broken into clear milestones. Take them one at a time."
          items={result.timeline}
        />
      </div>

      {/* Challenges */}
      <div className="border-b border-[#1e2130]">
        <SectionBlock
          color="text-amber-400"
          dot="bg-amber-400"
          title="Keep an eye on these"
          desc="Things that slow people down on this path — now you know, you can plan ahead."
          items={result.risks}
        />
      </div>

      {/* Suggestions */}
      <div>
        <SectionBlock
          color="text-blue-400"
          dot="bg-blue-400"
          title="Tips to boost your chances"
          desc="Small actions that make a big difference — pick even 2 or 3 and you're ahead."
          items={result.suggestions}
          twoCol
        />
      </div>

      {/* Footer nudge */}
      <div className="px-6 py-4 bg-violet-500/5 border-t border-[#1e2130] text-center">
        <p className="text-xs text-[#5a5f7a]">
          💡 <span className="text-violet-300">Pro tip:</span> Save this plan,
          revisit it weekly, and check off each step as you go. Progress
          compounds.
        </p>
      </div>
    </div>
  );
}
