import React from "react";
import "./ExtendedWeather.styles.scss";
import WeatherItem from "../WeatherItem/WeatherItem.component";
import sunIconSRC from "../../assets/images/sun.svg";
import cloudIconSRC from "../../assets/images/cloud.svg";

function ExtendedWeather() {
  const weatherItems = [
    {
      dayOfWeek: "Saturday",
      weatherIconSRC: sunIconSRC,
      weatherIconAlt: "sunny",
      celsiusTemperature: 22,
      weatherDescription: "Clear Sky",
    },
    {
      dayOfWeek: "Sunday",
      weatherIconSRC: sunIconSRC,
      weatherIconAlt: "sunny",
      celsiusTemperature: 21,
      weatherDescription: "Clear Sky",
    },
    {
      dayOfWeek: "Monday",
      weatherIconSRC: cloudIconSRC,
      weatherIconAlt: "cloudy",
      celsiusTemperature: 22,
      weatherDescription: "Broken Clouds",
    },
    {
      dayOfWeek: "Tuesday",
      weatherIconSRC: cloudIconSRC,
      weatherIconAlt: "cloudy",
      celsiusTemperature: 21,
      weatherDescription: "Broken Clouds",
    },
  ];

  return (
    <div className="container-extended-weather">
      {weatherItems.map(function (weatherItem) {
        return <WeatherItem {...weatherItem} />;
      })}
    </div>
  );
}

export default ExtendedWeather;
