import React, { useState } from 'react';
import CurrentWeather from './components/Weather/WeatherApp';
import WeatherDetails from './components/WeatherDetails';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const [location, setLocation] = useState('Stockholm');

  const handleSearch = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CurrentWeather location={location} />
      <WeatherDetails location={location} />
    </div>
  );
};

export default App;