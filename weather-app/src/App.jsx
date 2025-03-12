import React from "react";
import WeatherApp from "./components/Weather/WeatherApp";
import WeatherAppDetails from "./components/Details/WeatherAppDetails";

const App = () => {
  return (
    <div className="WeatherSite">
      <WeatherApp/>
      <WeatherAppDetails/>
    </div>
  );
};

export default App
