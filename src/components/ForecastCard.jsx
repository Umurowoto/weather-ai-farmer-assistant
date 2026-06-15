export default function ForecastCard({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="mb-3 text-base font-semibold text-forest-dark">
        7-Day Forecast
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {forecast.map((day) => (
          <div
            key={day.date}
            className="rounded-lg bg-cream px-3 py-3 text-center"
          >
            <p className="text-xs font-medium text-forest/60">{day.date}</p>
            <p className="text-2xl font-bold text-forest-dark">
              {day.temperature}°
            </p>
            <p className="text-xs capitalize text-forest/60">
              {day.condition}
            </p>
            <p className="mt-1 text-xs text-sky">
              {day.rainChance}% rain
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
