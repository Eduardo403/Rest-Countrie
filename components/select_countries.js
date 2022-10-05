import React from "react";

const SelectCountries = ({ selectRegion, changerTheme }) => {
  const select = (e) => {
    selectRegion(e.target.value);
  };

  return (
    <div>
      <select
        name="region"
        className={changerTheme ? "region darck-elemet" : "region"}
        onChange={select}
      >
        <option value="all">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania"> Oceania</option>
      </select>
    </div>
  );
};

export default SelectCountries;
