import React from "react";
import { FaArrowRight } from "react-icons/fa";

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
    desc: "Follow the plan and adapt as you grow ",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full max-w-5xl mx-auto px-5 sm:px-8 mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest uppercase text-gray-500 mb-3">
          How it works
        </p>
        <h2 className="text-xl sm:text-3xl font-semibold text-white">
          From idea to action in 3 steps
        </h2>
      </div>

      {/* Steps */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-6">
        {steps.map((s, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row items-center w-full">
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-10 h-10 rounded-full bg-[#1a1d2b] border border-[#2a2f45] flex items-center justify-center text-white font-semibold mb-3">
                  {s.num}
                </div>

                <h3 className="text-white font-medium">{s.label}</h3>

                <p className="text-sm text-gray-500 mt-1 max-w-[200px] sm:max-w-[160px]">
                  {s.desc}
                </p>
              </div>
            </div>

            {/* Arrow */}
            {index !== steps.length - 1 && (
              <div className="hidden sm:block text-gray-600 text-2xl px-3">
                <FaArrowRight />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
