import React from "react";
import "./DayWeather.styles.scss";
import sun from "../../assets/images/sun.svg";

function DayWeather() {
  return (
    <div className="day-weather">
      <p className="city">Stockholm, SE</p>
      <p className="temperature">23º</p>
      <img src={sun} alt="sun" />
      <p className="description-sky">Clear Sky</p>
      <p className="date-time">Thursday 14:20PM</p>
      <div className="weather-description">
        <p>Wind 5.7 m/s </p>
        <p>Pressure 1015 hPa</p>
      </div>
      <div className="more-weather-description">
        <p>Humidity 50%</p>
        <p>Cloudiness 0%</p>
      </div>
    </div>
  );
}

export default DayWeather;
