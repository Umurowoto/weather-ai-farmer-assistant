export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const { location, temperature, humidity, windSpeed, condition } = weather;

  return (
    <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="mb-1 text-sm font-medium uppercase tracking-wide text-forest/60">
        {location}
      </h2>

      <div className="flex items-end justify-between">
        <p className="text-5xl font-bold text-forest-dark">{temperature}°C</p>
        <p className="text-right capitalize text-forest/70">{condition}</p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-cream px-3 py-2 text-center">
          <p className="text-xs uppercase tracking-wide text-forest/50">
            Humidity
          </p>
          <p className="text-lg font-semibold text-forest-dark">
            {humidity}%
          </p>
        </div>
        <div className="rounded-lg bg-cream px-3 py-2 text-center">
          <p className="text-xs uppercase tracking-wide text-forest/50">
            Wind
          </p>
          <p className="text-lg font-semibold text-forest-dark">
            {windSpeed} km/h
          </p>
        </div>
      </div>
    </div>
  );
}
