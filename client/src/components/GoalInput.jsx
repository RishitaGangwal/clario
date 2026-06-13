import { useState } from "react";
import { analyzeGoal } from "../api/api";
import ResultCard from "./ResultCard";

export default function GoalInput() {
  const [goal, setGoal] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    if (!goal) return;

    const res = await analyzeGoal(goal);
    setResult(res.data);
  };

  return (
    <div className="flex flex-col items-center gap-4">

      <input
        className="p-3 w-96 rounded bg-gray-800 border border-gray-600"
        placeholder="Enter your goal..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-blue-500 rounded hover:bg-blue-600"
      >
        Analyze
      </button>

      <ResultCard result={result} />

    </div>
  );
}