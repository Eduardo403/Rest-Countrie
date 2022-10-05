import React, { useState } from "react";

const SearchCountri = ({ searchCountrie, changerTheme }) => {
  const [search, setSearch] = useState("");

  const changelSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      alert("sin datos para buscar");
    } else {
      searchCountrie(search);
    }
  };
  const handelSearch = (e) => {
    setSearch(e.target.value);
  };
  let clase = "btn";
  return (
    <>
      <form onSubmit={changelSubmit}>
        <input
          className={changerTheme ? `darck-elemet ${clase}` : clase}
          type="search"
          name="search"
          id="search"
          placeholder=" 🔍 Search for a country"
          onChange={handelSearch}
          value={search}
        />
      </form>
    </>
  );
};

export default SearchCountri;
