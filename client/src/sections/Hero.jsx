import React from "react";

export default function Hero() {
  return (
    <section className="w-full max-w-4xl mx-auto px-5 sm:px-8 pt-16 pb-10 text-center">
      <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-slate-500 mb-8">
        From idea to action plan in seconds
      </p>

      <h1 className="font-bold leading-[1.1] tracking-[-0.03em] mb-7">
        <span className="block text-white text-[clamp(3rem,5vw,4rem)]">
          You have a goal.
        </span>

        <span
          className="block text-[clamp(3rem,5vw,4rem)]"
          style={{
            background:
              "linear-gradient(135deg,#a889ff 0%,#c4b5fd 50%,#60a5fa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          We'll show you how to get there.
        </span>
      </h1>

      <p className="max-w-[620px] mx-auto mt-12 text-[1.05rem] leading-[1.9] text-slate-400">
        Most people have a goal in mind, but figuring out where to start is
        often the hardest part. Clario helps you break your goal into clear,
        practical steps, highlights potential challenges, and gives you a
        roadmap you can actually follow.
      </p>

      {/* <div className="flex flex-wrap justify-center gap-6 mt-9">
        <div className="flex items-center gap-2 text-sm text-[#8B90A8]">
          <span>⚡</span>
          <span>Plan ready in seconds</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#8B90A8]">
          <span>🎯</span>
          <span>Tailored to your exact goal</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#8B90A8]">
          <span>💪</span>
          <span>Built to keep you motivated</span>
        </div>
      </div> */}
    </section>
  );
}
