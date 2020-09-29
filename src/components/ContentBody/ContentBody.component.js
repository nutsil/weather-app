import React from "react";
import "./ContentBody.styles.scss";
import SearchBar from "../SearchBar/SearchBar.component";

function ContentBody() {
  return (
    <div className="content-wrapper">
      <SearchBar />
    </div>
  );
}

export default ContentBody;
