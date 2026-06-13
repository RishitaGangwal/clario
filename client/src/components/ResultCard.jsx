export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="mt-10 w-2/3 space-y-6">
      <div>
        <h2 className="text-green-400 text-xl">Timeline</h2>
        <ul className="list-disc ml-6">
          {result.timeline.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-red-400 text-xl">Risks</h2>
        <ul className="list-disc ml-6">
          {result.risks.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-yellow-400 text-xl">Success %</h2>
        <p className="text-3xl">{result.successProbability}%</p>
      </div>

      <div>
        <h2 className="text-blue-400 text-xl">Suggestions</h2>
        <ul className="list-disc ml-6">
          {result.suggestions.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
