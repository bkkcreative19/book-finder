import React from "react";
import "./Search.scss";

const Search = ({ setSearch, searchBooks, search }) => {
  return (
    <form className="search">
      <input onChange={(e) => setSearch(e.target.value)} type="text" />
      <button onClick={searchBooks} className="search__btn">
        Search
      </button>
    </form>
  );
};

export default Search;
