import { useState, useEffect } from "react";

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

  if (loading) return <p>Laddar väderdata...</p>;
  if (error) return <p>Fel: {error}</p>;

  return (
    <div className="p-4 rounded-xl shadow-lg bg-white max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-2">Väderprognos</h2>
      <p><strong>Temperatur:</strong> {weather.temperature}°C</p>
      <p><strong>Vindhastighet:</strong> {weather.windspeed} km/h</p>
      <p><strong>Vindriktning:</strong> {weather.winddirection}°</p>
    </div>
  );
}
