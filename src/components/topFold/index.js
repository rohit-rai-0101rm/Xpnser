import React, { useState } from "react";
import "./topFold.css";
const TopFold = () => {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  console.log(query);
  return (
    <div className="topFold">
      <div className="home-topfold">
        <div className="searchbar">
          <i class="fi-rr-search"></i>
          <input
            value={query}
            onChange={handleQuery}
            placeholder="Search for expenses"
          /> 
        </div>
        <div className="add-button">
          <i class="fi-rr-add"></i>
          <label>Add</label>
        </div>
      </div>
    </div>
  );
};

export default TopFold;
