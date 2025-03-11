import React, { useEffect, useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=59.3289&longitude=18.072357&current_weather=true&timezone=auto"
            );
            const data = await response.json();
            setWeather(data.current_weather);
        };

        fetchWeather();
    }, []);

    return (
        <div className="weather-container">
            <h2>Väder i Stockholm</h2>
            {weather ? (
                <div className="weather-info">
                    <p>📍 Plats: Stockholm</p>
                    <p>🌡 Temperatur: {weather.temperature}°C</p>
                    <p>🕒 Tid: {new Date().toLocaleTimeString()}</p>
                    <p>📅 Datum: {new Date().toLocaleDateString()}</p>
                </div>
            ) : (
                <p>Hämtar väderdata...</p>
            )}
        </div>
    );
}
