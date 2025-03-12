import React, { useEffect, useState } from "react";
import "./WeatherAppDetails.css";

export default function WeatherApp() {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch(
                 "https://api.open-meteo.com/v1/forecast?latitude=59.3289&longitude=18.072357&daily=temperature_2m_min,temperature_2m_max&timezone=auto"
            );
            const data = await response.json();
            const dailyForecast = data.daily;
            const formattedForecast = dailyForecast.time.map((date, index) => ({
                date,
                temp_min: dailyForecast.temperature_2m_min[index],
                temp_max: dailyForecast.temperature_2m_max[index],
            }));
            setForecast(formattedForecast);
        };

        fetchWeather();
    }, []);

    return (
        <div className="weather-container">
            <h2>Väderprognos för Stockholm</h2>
            {forecast.length > 0 ? (
                <div className="weather-info">
                    {forecast.map((day, index) => (
                        <div key={index} className="weather-day">
                            <p>📅 {new Date(day.date).toLocaleDateString("sv-SE")}</p>
                            <p>🌡 Min: {Math.round(day.temp_min)}°C</p>
                            <p>🌡 Max: {Math.round(day.temp_max)}°C</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Hämtar väderdata...</p>
            )}
        </div>
    );
}
