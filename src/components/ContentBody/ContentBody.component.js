import React from "react";
import "./ContentBody.styles.scss";
import SearchBar from "../SearchBar/SearchBar.component";
import DayWeather from "../DayWeather/DayWeather.component";
import ExtendedWeather from "../ExtendedWeather/ExtendedWeather.component";

function ContentBody() {
  return (
    <div className="content-wrapper">
      <SearchBar />
      <DayWeather />
      <ExtendedWeather />
    </div>
  );
}

export default ContentBody;
