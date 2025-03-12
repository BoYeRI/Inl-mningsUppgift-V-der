import React from "react";
import WeatherApp from "./components/Weather/WeatherApp";
import WeatherG from "./components/Details/WeatherAppDetails";

const App = () => {
  return (
    <div className="WeatherSite">
      <WeatherApp/>
      <WeatherG/>
    </div>
  );
};

export default App
