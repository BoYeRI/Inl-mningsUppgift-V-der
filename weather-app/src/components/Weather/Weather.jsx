import { useState, useEffect } from "react";
import "./Weather.css"; 

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=59.3289&longitude=18.072357&current_weather=true"
        );
        if (!response.ok) {
          throw new Error("Något gick fel vid hämtning av väderdata");
        }
        const data = await response.json();
        setWeather(data.current_weather);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p className="weather-loading">Laddar väderdata...</p>;
  if (error) return <p className="weather-error">Fel: {error}</p>;

  return (
    <div className="weather-container">
      <h2 className="weather-title">Väderprognos</h2>
      <p className="weather-info">🌡 Temperatur: {weather.temperature}°C</p>
      <p className="weather-info">💨 Vindhastighet: {weather.windspeed} km/h</p>
      <p className="weather-info">🧭 Vindriktning: {weather.winddirection}°</p>
    </div>
  );
}
