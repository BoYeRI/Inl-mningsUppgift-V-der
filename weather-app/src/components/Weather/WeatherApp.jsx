import React, { useState, useEffect } from 'react';

const WeatherApp = ({ location }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = 'ac22a0cebd556836825878d960424945'; 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    };

    fetchWeather();
  }, [location]);

  if (!weather) return <div>Loading...</div>;

  return (
    <div>
      <h2>{weather.name}</h2>
      <p>{new Date(weather.dt * 1000).toLocaleString()}</p>
      <p>{weather.main.temp}°C</p>
    </div>
  );
};

export default WeatherApp;
