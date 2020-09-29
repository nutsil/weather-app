import React from "react";
import "./Header.styles.scss";
import house from "../../assets/images/house.svg";
import settings from "../../assets/images/settings.svg";

function Header() {
  return (
    <header className="header">
      <h1>WeatherApp</h1>
      <div>
        <button className="header-button">
          <img src={house} alt="home" />
        </button>
        <button className="header-button">
          <img src={settings} alt="settings" />
        </button>
      </div>
    </header>
  );
}

export default Header;
