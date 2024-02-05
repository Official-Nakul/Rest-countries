import React, { useState } from "react";
import "./FilterArea.css";
const FilterArea = ({ isDark }) => {
  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="subNavBar flex-row">
      <div className="serachBarContainer flex-row">
        {isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path
              d="M783.522-110.913 529.848-364.587q-29.761 23.044-68.642 36.565-38.88 13.522-83.119 13.522-111.152 0-188.326-77.174Q112.587-468.848 112.587-580q0-111.152 77.174-188.326Q266.935-845.5 378.087-845.5q111.152 0 188.326 77.174Q643.587-691.152 643.587-580q0 44.478-13.522 83.12-13.521 38.641-36.565 68.163l253.913 254.152-63.891 63.652ZM378.087-405.5q72.848 0 123.674-50.826Q552.587-507.152 552.587-580q0-72.848-50.826-123.674Q450.935-754.5 378.087-754.5q-72.848 0-123.674 50.826Q203.587-652.848 203.587-580q0 72.848 50.826 123.674Q305.239-405.5 378.087-405.5Z"
              fill="#ffffff"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M783.522-110.913 529.848-364.587q-29.761 23.044-68.642 36.565-38.88 13.522-83.119 13.522-111.152 0-188.326-77.174Q112.587-468.848 112.587-580q0-111.152 77.174-188.326Q266.935-845.5 378.087-845.5q111.152 0 188.326 77.174Q643.587-691.152 643.587-580q0 44.478-13.522 83.12-13.521 38.641-36.565 68.163l253.913 254.152-63.891 63.652ZM378.087-405.5q72.848 0 123.674-50.826Q552.587-507.152 552.587-580q0-72.848-50.826-123.674Q450.935-754.5 378.087-754.5q-72.848 0-123.674 50.826Q203.587-652.848 203.587-580q0 72.848 50.826 123.674Q305.239-405.5 378.087-405.5Z" />
          </svg>
        )}
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
      </div>
      <div className="filters flex-row">
        <select name="region" id="" defaultValue={"Filter by Region"}>
          <option value="" disabled selected>
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default FilterArea;
