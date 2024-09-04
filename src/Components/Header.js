import React, { useContext } from "react";
import { SearchContext } from "./Contexts/SearchContext";

const Header = () => {
  const { searchData, setSearchData, handleCategory} = useContext(SearchContext);
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchData(searchValue);
  };

  return (
    <>
      <div id="headerContainer">
        <p id="heading">App Store</p>
        <input
          id="searchBox"
          type="text"
          placeholder="Search"
          value={searchData}
          onChange={handleSearch}
        />
        <div id="categories">
          <p className="category" onClick={() => handleCategory("All")}>
            All
          </p>
          <p className="category" onClick={() => handleCategory("social")}>
            Social
          </p>
          <p className="category" onClick={() => handleCategory("games")}>
            Games
          </p>
          <p className="category" onClick={() => handleCategory("news")}>
            News
          </p>
          <p className="category" onClick={() => handleCategory("food")}>
            Food
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
