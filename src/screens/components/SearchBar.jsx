import React, { useState } from "react";

import omfLogo from "../../images/openmainframe-logo.png";

function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(
      `http://localhost:80/sdt/searchPackages?search_term=${value}&search_bit_flag=${255}`
    )
    .then((response)=>response.json())
    .then((json)=>{
      console.log(json.packages);
      setResults(json.packages);
    });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="search-bar-wrapper">
      <div className="omf-logo">
        <img className="image-11" src={omfLogo} alt="image 11" />
      </div>
      <div className="searchbox">
        <input
          className="searchbox-input"
          name="rfijidskf"
          placeholder="Search Packages"
          type="text"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="search-button-container">
        {/* <a>
          <button className="search-button-container-item" alt="search button">
            <p className="text-inside-button">Search</p>
          </button>
        </a> */}
        <button className="search-button-container-item" alt="os dropdown">
          <p className="text-inside-button">All distros</p>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
