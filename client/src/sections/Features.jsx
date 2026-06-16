import React from "react";

const features = [
  {
    icon: "⚡",
    title: "Quick plan",
    desc: "Turn your goal into simple steps instantly.",
  },
  {
    icon: "🎯",
    title: "Personalised output",
    desc: "Every plan is based on what you actually type.",
  },
  {
    icon: "🧭",
    title: "Clear direction",
    desc: "Know what to do next without confusion.",
  },
];

export default function Features() {
  return (
    <section className="w-full max-w-5xl mx-auto px-5 sm:px-8 mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest uppercase text-gray-500 mb-3">
          Why Clario
        </p>

        <h2 className="text-xl sm:text-3xl font-semibold text-white">
          Simple tools to help you start
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-6 rounded-xl bg-[#111827] border border-[#1F2937] hover:border-[#2a2f45] transition"
          >
            <span className="text-2xl">{f.icon}</span>

            <h3 className="text-white font-medium mt-3">{f.title}</h3>

            <p className="text-sm text-[#8B93B5] mt-2 leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
