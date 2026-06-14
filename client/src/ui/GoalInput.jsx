import React, { useState } from "react";
import { analyzeGoal } from "../api/api";
import ResultCard from "./ResultCard";

const EXAMPLES = [
  "Get a job as a backend developer",
  "Start a freelance business",
  "Build and launch a mobile app",
];

export default function GoalInput() {
  const [goal, setGoal] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!goal.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await analyzeGoal(goal.trim());
      setResult(res.data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong — please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  const fillExample = (ex) => {
    setGoal(ex);
    setResult(null);
  };

  return (
    <div className="w-full max-w-[850px] flex flex-col items-center gap-4">
      {/* Input row */}
      <div className="w-full flex flex-col md:flex-row gap-3 px-4 sm:px-0">
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          onKeyDown={handleKey}
          className="
      flex-1
      h-14 sm:h-16
      bg-[#0f1117]
      border border-[#1e2130]
      rounded-xl sm:rounded-2xl
      px-4 sm:px-6
      text-sm sm:text-[1.05rem]
      text-white
      placeholder:text-[#6B7280]
      outline-none
      transition-all
      focus:border-violet-500
      focus:shadow-[0_0_0_3px_rgba(124,92,252,0.15)]
    "
          placeholder="What goal would you like to achieve?"
        />

        <button
          onClick={handleSubmit}
          disabled={loading || !goal.trim()}
          className="
      h-14 sm:h-16
      w-full md:w-auto
      px-6 sm:px-8
      rounded-xl sm:rounded-2xl
      bg-violet-600
      hover:bg-violet-500
      text-white
      font-semibold
      text-sm sm:text-[1rem]
      whitespace-nowrap
      transition-all
      active:scale-95
      disabled:opacity-50
    "
        >
          {loading ? "Working…" : "Build my plan →"}
        </button>
      </div>

      <div className="w-full flex flex-wrap gap-2 items-center px-4 sm:px-0 mt-2">
        <span className="text-[12px] sm:text-[13px] text-[#7E85A8] font-mono shrink-0">
          Try:
        </span>

        {EXAMPLES.map((ex) => (
          <button
            key={ex}
            onClick={() => fillExample(ex)}
            className="
        px-3 sm:px-4
        py-1.5 sm:py-2
        rounded-full
        text-[12px] sm:text-[13px]
        text-violet-300
        bg-violet-500/10
        border border-violet-500/20
        hover:bg-violet-500/20
        hover:border-violet-500/40
        transition-all
        whitespace-nowrap
      "
          >
            {ex}
          </button>
        ))}
      </div>

      {/* Empty state */}
      {!loading && !result && !error && (
        <div className="mt-8 sm:mt-10 text-center flex flex-col items-center px-4 sm:px-0">
          <span className="text-3xl sm:text-4xl mb-3">🗺️</span>

          <p className="text-base sm:text-lg font-semibold text-[#A1A7C4] leading-snug sm:leading-normal">
            Type your goal above and hit "Build my plan"
          </p>

          <p className="mt-3 sm:mt-4 max-w-[500px] text-sm sm:text-[15px] leading-6 sm:leading-7 text-[#7E85A8]">
            Get a practical roadmap, potential obstacles to watch for, and
            useful suggestions to help you make steady progress toward your
            goal.
          </p>
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="w-11 h-11 rounded-full border-[3px] border-[#1e2130] border-t-violet-500 animate-spin" />
          <p className="text-sm font-mono text-[#5a5f7a]">
            Building your roadmap — just a few seconds…
          </p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="w-full mt-4 bg-amber-500/10 border border-amber-500/25 rounded-xl px-5 py-4 text-sm text-amber-300 text-center">
          {error}
        </div>
      )}

      {/* Result */}
      <ResultCard result={result} />
    </div>
  );
}
