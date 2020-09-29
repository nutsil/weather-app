import React from "react";
import "./ContentBody.styles.scss";
import SearchBar from "../SearchBar/SearchBar.component";
import DayWeather from "../DayWeather/DayWeather.component";

function ContentBody() {
  return (
    <div className="content-wrapper">
      <SearchBar />
      <DayWeather />
    </div>
  );
}

export default ContentBody;
