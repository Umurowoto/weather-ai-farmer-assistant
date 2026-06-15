import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import AdviceCard from "../components/AdviceCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { getWeatherByIP, getWeatherByLocation } from "../services/weatherApi";
import { getFarmingAdvice } from "../utils/recommendations";

export default function Dashboard() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Shared loader used for both "auto detect" and "search by name"
  const loadWeather = async (fetchFn) => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchFn();
      setWeather({ location: data.location, ...data.current });
      setForecast(data.forecast);
      setSummary(data.aiSummary);
    } catch (err) {
      console.error(err);
      setError("Couldn't load weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // On first load, auto-detect the visitor's location via their IP
  useEffect(() => {
    loadWeather(getWeatherByIP);
  }, []);

  // When the user searches for a specific town
  const handleSearch = (location) => {
    loadWeather(() => getWeatherByLocation(location));
  };

  // Today's rain chance feeds the recommendation engine
  const todaysRainChance = forecast[0]?.rainChance ?? 0;
  const advice = weather
    ? getFarmingAdvice({
        temperature: weather.temperature,
        humidity: weather.humidity,
        rainChance: todaysRainChance,
      })
    : [];

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SearchBar onSearch={handleSearch} />

      {loading && <LoadingSpinner />}

      {!loading && error && (
        <p className="mb-4 rounded-lg bg-clay/10 px-3 py-2 text-sm text-clay">
          {error}
        </p>
      )}

      {!loading && !error && weather && (
        <>
          <WeatherCard weather={weather} />
          <ForecastCard forecast={forecast} />
          <AdviceCard summary={summary} advice={advice} />
        </>
      )}
    </div>
  );
}
