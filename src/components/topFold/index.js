import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./topFold.css";
const TopFold = () => {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  console.log(query);
  return (
    <div className="topFold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i class="fi-rr-search"></i>
            <input
              value={query}
              onChange={handleQuery}
              placeholder="Search for expenses"
            />
          </div>
          <Link to="/add">
            <div className="add-button">
              <i class="fi-rr-add"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfold-button">
              <i class="fi-rr-angle-left"></i>
              <label>Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className="add-topfold-button">
              <i class="fi-rr-cross-circle"></i>
              <label>Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;
