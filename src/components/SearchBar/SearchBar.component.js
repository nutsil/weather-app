import React from "react";
import "./SearchBar.styles.scss";
import search from "../../assets/images/search.svg";

function SearchBar() {
  return (
    <form className="search-bar">
      <input type="search" id="search" placeholder="Search for a city..." />
      <button className="search-button">
        <img src={search} alt="search" />
      </button>
    </form>
  );
}

export default SearchBar;
