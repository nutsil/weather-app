import React from "react";
import "./WeatherItem.styles.scss";
import sun from "../../assets/images/sun.svg";

function WeatherItem() {
  return (
    <div className="weather-item">
      <p className="date">Saturday</p>
      <img src={sun} alt="sun" />
      <p className="temperature">23º</p>
      <p className="description-sky">Clear Sky</p>
    </div>
  );
}

export default WeatherItem;
