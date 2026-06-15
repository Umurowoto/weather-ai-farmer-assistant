import axios from "axios";

// Your API key lives in a .env file (see .env.example) and is injected
// at build time by Vite. Never hardcode it directly in this file.
const API_KEY = import.meta.env.VITE_WEATHER_AI_KEY;
const BASE_URL = "https://api.weather-ai.co/v1";

// A pre-configured axios instance so every request automatically
// includes the Authorization header.
const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

/**
 * Auto-detects the visitor's location from their IP address and
 * returns current weather + forecast + AI summary for that location.
 * Matches: GET /v1/weather-geo?ip=auto
 */
export async function getWeatherByIP() {
  const { data } = await client.get("/weather-geo", {
    params: { ip: "auto" },
  });
  return normalizeWeatherResponse(data);
}

/**
 * Returns current weather + forecast + AI summary for a named place
 * (e.g. "Thika" or "Nairobi, Kenya").
 * Matches: GET /v1/weather
 */
export async function getWeatherByLocation(location) {
  const { data } = await client.get("/weather", {
    params: { location },
  });
  return normalizeWeatherResponse(data);
}

/**
 * The real API response shape isn't shown in the assessment brief, so
 * this function maps whatever comes back into the simple shape the UI
 * expects:
 *
 * {
 *   location: "Thika",
 *   current: { temperature, humidity, windSpeed, condition },
 *   forecast: [{ date, temperature, condition, rainChance }, ...],
 *   aiSummary: "..."
 * }
 *
 * Once you have a real example response from the docs, adjust the
 * field names below (left side = what the UI uses, right side =
 * what the API actually returns).
 */
function normalizeWeatherResponse(data) {
  return {
    location: data.location ?? data.city ?? "Your location",
    current: {
      temperature: data.current?.temperature ?? data.temperature,
      humidity: data.current?.humidity ?? data.humidity,
      windSpeed: data.current?.windSpeed ?? data.wind_speed,
      condition: data.current?.condition ?? data.condition,
    },
    forecast: (data.forecast ?? []).map((day) => ({
      date: day.date,
      temperature: day.temperature ?? day.temp,
      condition: day.condition,
      rainChance: day.rainChance ?? day.rain_chance ?? 0,
    })),
    aiSummary: data.aiSummary ?? data.ai_summary ?? "",
  };
}
