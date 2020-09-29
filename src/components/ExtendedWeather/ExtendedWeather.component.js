import React from "react";
import "./ExtendedWeather.styles.scss";
import WeatherItem from "../WeatherItem/WeatherItem.component";

function ExtendedWeather() {
  return (
    <div className="container-extended-weather">
      <WeatherItem />
    </div>
  );
}

export default ExtendedWeather;
