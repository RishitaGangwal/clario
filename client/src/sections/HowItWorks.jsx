import React from "react";

const steps = [
  {
    num: "01",
    label: "Share your goal",
    desc: "Tell Clario what you're trying to achieve",
  },
  {
    num: "02",
    label: "Get a clear roadmap",
    desc: "See the key steps and potential challenges",
  },
  {
    num: "03",
    label: "Move forward",
    desc: "Follow the plan and adapt as you make progress",
  },
];

export default function HowItWorks() {
  return (
    <div className="w-full max-w-[850px] grid grid-cols-1 md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-[#1e2130] bg-[#0f1117] border border-[#1e2130] rounded-2xl overflow-hidden mb-12">
      {steps.map((s) => (
        <div
          key={s.num}
          className="flex flex-col items-center text-center px-6 py-7"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-violet-300 mb-3">
            Step {s.num}
          </span>

          <h3 className="text-[16px] font-semibold text-white mb-2">
            {s.label}
          </h3>

          <p className="text-[14px] leading-[1.6] text-[#8B90A8] max-w-[190px]">
            {s.desc}
          </p>
        </div>
      ))}
    </div>
  );
}