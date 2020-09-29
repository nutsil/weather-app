import React from "react";
import "./WeatherItem.styles.scss";

function WeatherItem(props) {
  return (
    <div className="weather-item">
      <p className="date">{props.dayOfWeek}</p>
      <img src={props.weatherIconSRC} alt={props.weatherIconAlt} />
      <p className="temperature">{props.celsiusTemperature}º</p>
      <p className="description-sky">{props.weatherDescription}</p>
    </div>
  );
}

export default WeatherItem;
