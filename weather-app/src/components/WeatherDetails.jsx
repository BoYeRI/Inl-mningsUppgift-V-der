import React, { useState, useEffect } from 'react';

const WeatherDetails = ({ location }) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      const apiKey = 'ac22a0cebd556836825878d960424945'; 
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setForecast(data.list.slice(0, 5)); 
      } catch (error) {
        console.error('Error fetching forecast data', error);
      }
    };

    fetchForecast();
  }, [location]);

  if (!forecast.length) return <div>Loading forecast...</div>;

  return (
    <div>
      <h3>5-Day Forecast</h3>
      <ul>
        {forecast.map((day, index) => (
          <li key={index}>
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p>{day.main.temp_min}°C / {day.main.temp_max}°C</p>
            <img 
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
              alt={day.weather[0].description} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherDetails;
