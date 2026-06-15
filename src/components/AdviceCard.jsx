export default function AdviceCard({ summary, advice }) {
  return (
    <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm">
      {summary && (
        <div className="mb-4 rounded-lg border-l-4 border-amber bg-amber/10 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-dark">
            AI Weather Summary
          </p>
          <p className="mt-1 text-sm text-forest-dark">{summary}</p>
        </div>
      )}

      <h2 className="mb-3 text-base font-semibold text-forest-dark">
        Farming Recommendations
      </h2>

      <ul className="space-y-2">
        {advice.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 rounded-lg bg-cream px-3 py-2"
          >
            <span className="text-xl leading-none">{item.icon}</span>
            <div>
              <p className="text-sm font-semibold text-forest-dark">
                {item.title}
              </p>
              <p className="text-sm text-forest/70">{item.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
